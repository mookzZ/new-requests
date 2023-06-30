// part 1

const card = document.querySelector('.card')
const nextButton = document.querySelector('.next')
const prevButton = document.querySelector('.prev')
let count = 1

const dataRequest = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        const data = await response.json()
        card.innerHTML = `
                        <h3>Title: ${data.title}</h3>
                        <div>ID: ${data.id}</div>
                        <div>${data.completed}</div>`
    } catch (e) {
        console.error(e, 'error')
    }
}

const cardRequest = (button) => {
    if (button === 'next') {
        if (count < 200) {
            count++
            dataRequest()
        } else {
            count = 200
        }
    } else if (button === 'prev') {
        if (count > 1) {
            count--
            dataRequest()
        } else {
            count = 1
        }
    } else {
        count = 1
        dataRequest()
    }
}

nextButton.onclick = () => cardRequest('next')
prevButton.onclick = () => cardRequest('prev')

cardRequest()

// part 2
const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.error(e, 'error')
    }
}
fetchData()