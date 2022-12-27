import { useState } from "react";
import moment from "moment/moment";

function Countdown(){

    const [timer, setTimer] = useState()

    const current = new Date();
    console.log(current);
    const currentTime = moment(current).format('MMMM Do YYYY, h:mm:ss a');
    // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;

    return(
        <div>
            <h1>This will be the coutdown</h1>
            <h2>{currentTime}</h2>
        </div>
    )
}

export default Countdown;