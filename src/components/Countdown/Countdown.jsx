import { useState } from "react";
import { useEffect } from "react";
import moment from "moment/moment";

function Countdown(){

    // this will make sure numbers are displayed on page load and not wait 1 second 
    useEffect(()=> {
        updateTime();
    }, []);

    const [timer, setTimer] = useState()

    const current = new Date();
    // console.log(current);
    const currentTime = moment(current).format('MMMM Do YYYY, h:mm:ss a');
    const timeInMill = current.getTime();
    const newYear = 1672552800000; //This is the time on new years in milliseconsds
    const newYearTime = moment(newYear).format('MMMM Do YYYY, h:mm:ss a');
    const timeLeft = newYear - timeInMill

    

    // console.log(newYear);

    const updateTime = () => {
        setTimer( newYear - timeInMill)
        // console.log('updated time');
        // console.log(timeInMill);
    } 

    setInterval(() =>{ updateTime()}, 1000)

    let days = Math.floor(timer/1000/60/60/24)
    // let hours = Math.floor((timer/1000/60/60))-(days*24)
    let hours = 23 - moment(current).format('h');
    // let minutes = Math.floor((timer/1000/60))-(days*24*60)-(hours*60)
    let minutes = 59 - moment(current).format('mm');
    let seconds = 59 - moment(current).format('ss');

    return(
        <div>
            <h1>This will be the coutdown</h1>
            <h2>{currentTime}</h2>
            <h3>{newYearTime}</h3>
            <h3>{ timeLeft > 86400000 ? days : 0} Days { timeLeft > 3600000 ? hours : 0} Hours { timeLeft > 60000 ? minutes : 0 } Minutes { timeLeft > 0 ? seconds : 0 } Seconds</h3>

        </div>
    )
}

export default Countdown;