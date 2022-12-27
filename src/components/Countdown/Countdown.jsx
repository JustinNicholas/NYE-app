import { useState } from "react";
import { useEffect } from "react";
import moment from "moment/moment";

function Countdown(){

    useEffect(()=> {
        updateTime();
    }, []);

    const [timer, setTimer] = useState()

    const current = new Date();
    console.log(current);
    const currentTime = moment(current).format('MMMM Do YYYY, h:mm:ss a');
    const timeInMill = current.getTime();
    const newYear = 1672552800000; //This is the time on new years in milliseconsds
    const newYearTime = moment(newYear).format('MMMM Do YYYY, h:mm:ss a');

    console.log(newYear);

    const updateTime = () => {
        setTimer( newYear - timeInMill)
        console.log('updated time');
    } 

    setInterval(() =>{ updateTime()}, 1000)

    let days = Math.floor(timer/1000/60/60/24)
    let hours = Math.floor((timer/1000/60/60))-(days*24)
    let minutes = Math.floor((timer/1000/60))-(days*24*60)-(hours*60)
    let seconds = 60 - moment(current).format('ss');

    return(
        <div>
            <h1>This will be the coutdown</h1>
            <h2>{currentTime}</h2>
            <h3>{newYearTime}</h3>
            <h3>{days}</h3>
            <h3>{hours}</h3>
            <h3>{minutes}</h3>
            <h3>{seconds}</h3>
        </div>
    )
}

export default Countdown;