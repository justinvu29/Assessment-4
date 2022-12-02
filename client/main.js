const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const form = document.querySelector('form')
const helpInput = document.querySelector('#help-input')
const list = document.querySelector('ul')


const createHelp = arr => {
    list.innerHTML = 'Helpful Activities'
        arr.forEach((help,index) => {
            let listHelp = document.createElement('li')
            let helpSpan = document.createElement('span')
            let deleteButton = document.createElement('button')

            listHelp.appendChild(helpSpan)
            listHelp.appendChild(deleteButton)

            helpSpan.textContent = help
            deleteButton.textContent = "delete"
            deleteButton.id = index

            document.querySelector('ul').appendChild(listHelp)

            list.appendChild(listItem)
        })
    }

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getHelp = () => {
    axios.get('http://localhost:4000/api/name')
        .then(response => {
            createHelp(response.data)
        })
        .catch(err => console.log(err))
};

const submitHelp = evt => {
    evt.preventDefault()
    axios.post('http://localhost:4000/api/help', {help: helpInput.value})
        .then(response => {
            let { data } = response
            createHelp(data)
        })
        .catch(err => console.log(err))
}

form.addEventListener('submit', submitHelp)
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)

getHelp()