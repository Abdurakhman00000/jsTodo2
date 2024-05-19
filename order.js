const order = document.querySelector('.order')
orderProduct()


function orderProduct () {
    let data = JSON.parse(localStorage.getItem('food')) || [];
    order.innerHTML = ''

    data.forEach((el) => {
        let block = document.createElement('div')
        let block_img = document.createElement('img')
        let block_content = document.createElement('div')
        let block_name = document.createElement('p')
        let block_price = document.createElement('p')
        let block_operation = document.createElement('div')
        let btn_minus = document.createElement('button')
        let data_count = document.createElement('input')
        let btn_plus = document.createElement('button')
        let btn_buy = document.createElement('button')


        block.classList.add('block')
        block_img.classList.add('block_img')
        block_content.classList.add('block_content')
        block_name.classList.add('block_name')
        block_price.classList.add('block_price')
        block_operation.classList.add('block_operation')
        btn_minus.classList.add('btn_minus')
        data_count.classList.add('data_count')
        btn_plus.classList.add('btn_plus')
        btn_buy.classList.add('btn_buy')

        block_img.src = el.image
        block_name.innerText = el.name
        block_price.innerText = `${el.price} $`

        btn_minus.innerHTML = `<ion-icon name="remove-outline"></ion-icon>`
        data_count.placeholder = 0
        btn_plus.innerHTML = `<ion-icon name="add-outline"></ion-icon>`
        btn_buy.innerText = 'BUY'

        block.append(block_img)

        block_content.append(block_name)
        block_content.append(block_price)

        block_operation.append(btn_minus)
        block_operation.append(data_count)
        block_operation.append(btn_plus)
        block_operation.append(btn_buy)

        block.append(block_content)
        block.append(block_operation)

        order.append(block)


        btn_plus.addEventListener('click', () => {
            let currentValue = +data_count.value + 1;

            data_count.value = currentValue
        })

        btn_minus.addEventListener('click', () => {
            let currentValue = +data_count.value - 1;
            if(currentValue > 0) {
                data_count.value = currentValue
            }
        })
    })
}


