const getData = async () => {
    try {
        const response = await fetch('obj.json')
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.error(e, 'error')
    }
}

getData()