const wrapper = document.querySelector('.wrapper')

const getData = async () => {
    try {
        const response = await fetch('peoples.json')
        const data = await response.json()
        data.forEach((human) => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
            const img = document.createElement('img')
            img.src = 'img.jpg'
            const name = document.createElement('span')
            const age = document.createElement('span')
            name.innerHTML = `Имя: ${human.name}`
            age.innerHTML = `Возраст: ${human.age}`
            card.append(img, name, age)
            wrapper.append(card)
        })
    } catch (e) {
        console.error(e, 'fatal error')
    }
}

getData()