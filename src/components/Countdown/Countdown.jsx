import { useState } from "react";
import moment from "moment/moment";
import DateCountdown from 'react-date-countdown-timer';

function Countdown(){

    const [timer, setTimer] = useState()

    const current = new Date();
    console.log(current);
    const currentTime = moment(current).format('MMMM Do YYYY, h:mm:ss a');
    console.log('current time in mill', current.getTime());
    // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
    const newYear = 1672552800000;
    const newYearTime = moment(newYear).format('MMMM Do YYYY, h:mm:ss a');

    console.log(newYear);


    return(
        <div>
            <h1>This will be the coutdown</h1>
            <h2>{currentTime}</h2>
            <h3>{newYearTime}</h3>
        </div>
    )
}

export default Countdown;