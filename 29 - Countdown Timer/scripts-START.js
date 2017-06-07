const timerButton = document.querySelectorAll('.timer__button')

function startTimer() {
    let time = this.dataset.time
    console.log(time)
}

timerButton.forEach(elem => {
    elem.addEventListener('click', startTimer)
})
