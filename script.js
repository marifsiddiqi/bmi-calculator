
function callData() {
    const weight = document.querySelector('#berat').value
    const height = document.querySelector('#tinggi').value
    const data = {
        weight: weight,
        height: height
    }
    return data
}

function submit() {
    const data = callData()
    const bmi = parseFloat((data.weight / (data.height / 100)**2).toFixed(1))
    let kategori
    if(bmi <18.5){
        kategori = "Underweight"
    }else if(bmi >= 18.5 && bmi <= 24.9){
        kategori = "Normal"
    }else if(bmi >= 25 && bmi <= 29.9){
        kategori = "Overweight"
    }else if (bmi >= 30){
        kategori = "Obesity"
    }
    const result ={
        bmi: bmi,
        kategori: kategori
    }
    return result
}

const button = document.querySelector('.form')
button.addEventListener('submit', function (event) {
    event.preventDefault()
    const hasil = document.querySelector('#hasil')
    hasil.innerHTML = `<p>Your BMI is <span id="bmi">${submit().bmi}</span> which means You are <span id="kategori">${submit().kategori}</span></p>`
})