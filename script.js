setInterval(setClock, 1000)
const hourHand = document.querySelector('[data-hour]');
const minuteHand = document.querySelector('[data-minute]');
const secondHand = document.querySelector('[data-second]');

function setClock () {
    const currDate = new Date ()
    const currSecond = currDate.getSeconds() /60
    const currMinute = (currSecond + currDate.getMinutes()) /60
    const currHour = (currMinute + currDate.getHours()) /12

    setRotation(secondHand, currSecond)
    setRotation(minuteHand, currMinute)
    setRotation(hourHand, currHour)
};

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock();