// CURRENCY CONVERTER

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const convert = (element, targetElement, targetElement2, curr) => {
    element.oninput = () => {
        const fetchData = async () => {
            try {
                const response = await fetch('currency.json')
                const data = await response.json()
                if (curr === 'curSom') {
                    targetElement.value = (element.value / data.somUsd).toFixed(2)
                    targetElement2.value = (element.value / data.somEur).toFixed(2)
                } else if (curr === 'curUsd') {
                    targetElement.value = (element.value * data.somUsd).toFixed(2)
                    targetElement2.value = (element.value * data.usdEur).toFixed(2)
                } else {
                    targetElement.value = (element.value * data.somEur).toFixed(2)
                    targetElement2.value = (element.value * data.eurUsd).toFixed(2)
                }
                element.value === '' && (targetElement.value = '')
                element.value === '' && (targetElement2.value = '')
            } catch (e) {
                console.error(e, 'error')
            }
        }
        fetchData()
    }
}

convert(som, usd, eur, 'curSom')
convert(usd, som, eur, 'curUsd')
convert(eur, som, usd, 'curEur')
