const menu = document.querySelector('.menu')
readProduct()


function readProduct() {
    let data = JSON.parse(localStorage.getItem('food')) || [];
    menu.innerHTML = ''
    data.forEach((el, index) => {

        let card = document.createElement('div')
        let card_image = document.createElement('img')
        let card_name = document.createElement('p')
        let card_price = document.createElement('p')
        let text_content = document.createElement('div')
        let action_block = document.createElement('div')
        let btn_order = document.createElement('button')
        let btn_edit = document.createElement('button')
        let btn_delete = document.createElement('button')


        card.classList.add('card')
        card_image.classList.add('card_image')
        card_name.classList.add('card_name')
        card_price.classList.add('card_price')
        text_content.classList.add('text_content')
        action_block.classList.add('action_block')
        btn_order.classList.add('btn_order')
        btn_edit.classList.add('btn_edit')
        btn_delete.classList.add('btn_delete')


        card_image.src = el.image

        card_name.innerText = el.name
        card_price.innerText = `${el.price} $`

        btn_order.innerHTML = `<ion-icon name="bag-add-outline"></ion-icon>`
        btn_edit.innerHTML = `<ion-icon name="create-outline"></ion-icon>`
        btn_delete.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`


        card.append(card_image)

        text_content.append(card_name)
        text_content.append(card_price)

        action_block.append(btn_order)
        action_block.append(btn_edit)
        action_block.append(btn_delete)

        card.append(text_content)
        card.append(action_block)

        menu.append(card)



        //!ACTION
        btn_delete.addEventListener('click', () => {
            deleteItem(index)
        })

        btn_edit.addEventListener('click', () => {
            modal_content.style.display = 'flex'
            editProduct(index)
        })

        btn_order.addEventListener('click', () => {
            orderProduct()
            let orderProducted = {
                name: name.value,
                price: price.value,
                image: image.value
            }
            let data = JSON.parse(localStorage.getItem('food')) || []
            data.push(orderProducted)
            localStorage.setItem('food', JSON.stringify(data))
        })

        
        //!ACTION

    })
}







        // delete btn
function deleteItem (id) {
    let data = JSON.parse(localStorage.getItem('food')) || []
    data.splice(id, 1)
    localStorage.setItem('food', JSON.stringify(data))
    readProduct()
}


// modal window
let modal_content = document.querySelector('.modal_content')

window.addEventListener('click', (e) => {
   if(e.target === modal_content) {
    modal_content.style.display = 'none'
   }
})


// EDIT

let edit_name = document.querySelector('.edit_input1')
let edit_price = document.querySelector('.edit_input2')
let edit_image = document.querySelector('.edit_input3')
let edit_btn = document.querySelector('.edit_btn')


function editProduct (index) {
    let data = JSON.parse(localStorage.getItem('food')) || [];
    edit_image.value = data[index].image;
    edit_name.value = data[index].name;
    edit_price.value = data[index].price;

    edit_name.setAttribute('id', index)
    edit_price.setAttribute('id', index)
    edit_image.setAttribute('id', index)
    edit_btn.setAttribute('id', index)
}


edit_btn.addEventListener('click', () => {

    let data = JSON.parse(localStorage.getItem('food')) || [];

    let editedProduct = {
        name: edit_name.value,
        price: edit_price.value,
        image: edit_image.value
    }


    let nameId = edit_name.id;
    let priceId = edit_price.id;
    let imageId = edit_price.id;

    data.splice(nameId, 1, editedProduct)
    data.splice(priceId, 1, editedProduct)
    data.splice(imageId, 1, editedProduct)

    localStorage.setItem('food', JSON.stringify(data))
    readProduct();
    modal_content.style.display = 'none'
})