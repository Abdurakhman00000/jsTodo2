const name = document.querySelector('.input1')
const price = document.querySelector('.input2')
const image = document.querySelector('.input3')
const btn_create = document.querySelector('.btn')


btn_create.addEventListener('click', () => {

    if(!name.value.trim() || !price.value.trim() || !image.value.trim()) {
        alert('Пожалуйста заполните поля')
        return;
    }
    let newProduct = {
        name: name.value,
        price: price.value,
        image: image.value
    }

    let data = JSON.parse(localStorage.getItem('food')) || [];
    data.push(newProduct)
    localStorage.setItem('food', JSON.stringify(data))
})