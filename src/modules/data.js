'use strict';

const dataModule = () => {
    const text1 = document.querySelector('.text1');
    const text2 = document.querySelector('.text2');
    const text3 = document.querySelector('.text3');
    const text4 = document.querySelector('.text4');

    const getData = () => {
        let timesOfDay;
        let data = new Date();
        let dayOfTheWeeck = data.toLocaleString('ru-RU', { weekday: 'long'});
        let time = data.toLocaleString('en-EN').slice(-11);

        let signTime = time.slice(-2);
        let arrTime = time.slice(0, -3).split(":");

        let dateNow = data.getTime();
        let newYearDay = new Date('01 january 2023').getTime()

        let remainder = (newYearDay - dateNow) / 1000;
        let days = Math.floor(remainder / 60 / 60 / 24);

        const addZerro = (num) => (num < 10) ? '0' + num : num;

        for(let i = 0; i < arrTime.length; i++) {
            arrTime[i] = Number(arrTime[i])
            arrTime[i] = addZerro(arrTime[i])
        }

        time = arrTime.join(":")
        dayOfTheWeeck = dayOfTheWeeck[0].toUpperCase() + dayOfTheWeeck.slice(1);


        const getTimesOfDay = (hours) => {
            if(hours >= '00' && hours < '06' ) {
                timesOfDay = 'Доброй ночи';
            } else if(hours >= '06' && hours < '12' ) {
                timesOfDay = 'Доброе утро';
            } else if(hours > '12' && hours < '18' ) {
                timesOfDay = 'Доброй день';
            } else if(hours >= '18' && hours <= '23' ) {
                timesOfDay = 'Доброй вечер';
            }
        }

        const showData = () => {
            text1.textContent = timesOfDay;
            text2.textContent = `Сегодня: ${dayOfTheWeeck}`
            text3.textContent = `Текущее время: ${time} ${signTime}`
            text4.textContent = `До нового года осталось ${days} дней`
        }

        getTimesOfDay(time.slice(0, 2))
        showData();
    }

    setInterval(getData, 1000);
}

export default dataModule;