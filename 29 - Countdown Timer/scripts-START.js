const timerButton = document.querySelectorAll('.timer__button');
const countDownNum = document.querySelector('.display__time-left');
const countEndTime = document.querySelector('.display__end-time');
let countdown;

function startTimer(time) {
    displayTimeLeft(time)

    clearInterval(countdown)

    const now = Date.now();
    const then = now + time * 1000;

    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    let min = Math.floor(seconds / 60) < 10 ? '0' + Math.floor(seconds / 60) : Math.floor(seconds / 60)
    let sec = seconds % 60 < 10 ? '0' + seconds % 60 : seconds % 60
    countDownNum.innerHTML = min + ':' + sec
}

function displayEndTime(time) {
    let end = new Date(time);
    let hour = end.getHours();
    let newHour = hour > 12 ? hour - 12 : hour;
    let minutes = end.getMinutes();
    countEndTime.innerHTML = `Be Back At ${newHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

timerButton.forEach(elem => {
    elem.addEventListener('click', function() {
        startTimer(this.dataset.time)
    })
})

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    startTimer(mins * 60);
    this.reset();
});
