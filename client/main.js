const complimentBtn = document.getElementById("complimentButton")
const fortuneButton = document.getElementById('fortuneButton')
const form = document.querySelector('form')
const carInput = document.querySelector('#car-input')
const list = document.querySelector('ul')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => 
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
}); 

const createCarList = arr => {
    list.innerHTML = 'Car List:'
    arr.forEach((car,index) => {
        let listItem = document.createElement('li')
        let carSpan = document.createElement('span')
        let deleteButton = document.createElement('button')
        let editButton = document.createElement('button')
        let editForm = document.createElement('form')
        let editInput = document.createElement('input')

        editForm.appendChild(editInput)
        editForm.style.display = 'none'

        listItem.appendChild(editForm)
        listItem.appendChild(carSpan)
        listItem.appendChild(editButton)
        listItem.appendChild(deleteButton)

        carSpan.textContent = car
        deleteButton.textContent = "delete"
        deleteButton.id = index

        deleteButton.addEventListener('click', deleteCar)

        editButton.textContent = "edit"
        editForm.id = index

        editButton.addEventListener('click', createEditForm)

        list.appendChild(listItem)
    })
}

const getCar = () => {
    axios.get('http://localhost:4000/api/car')
        .then(response => {
            createList(response.data)
        })
        .catch(err => console.log(err))
}

const submitCar = evt => {
    evt.preventDefault()
    axios.post('http://localhost:4000/api/car', {car: carInput.value})
        .then(response => {
            let { data } = response
            createCarList(data)
        })
        .catch(err => console.log(err))
}

const deleteCar = evt => {
    evt.preventDefault()
    axios.delete(`http://localhost:4000/api/car/${evt.target.id}`)
        .then(response => {
            let { data } = response
            createCarList(data)
        })
        .catch(err => console.log(err))
}

const createEditForm = evt => {
    evt.preventDefault()
    let listElement = evt.target.parentNode
    let editForm = listElement.children[0]
    let spanElement = listElement.children[1]

    editForm.style.display = 'inline'
    spanElement.style.display = 'none'

    editForm.addEventListener('submit', editCar)
}

const editCar = evt => {
    evt.preventDefault()
    console.log(evt.target)
    let index = evt.target.id
    let inputField = evt.target.children[0]

    let editObj = {
        index,
        car: inputField.value
    }

    axios.put('http://localhost:4000/api/car', editObj)
        .then(response => {
            let { data } = response
            createCarList(data)
        })
        .catch(err => console.log(err))
}

form.addEventListener('submit', submitCar)

getCar()



complimentBtn.addEventListener('click', getCompliment)
fortuneButton.addEventListener('click', getFortune)