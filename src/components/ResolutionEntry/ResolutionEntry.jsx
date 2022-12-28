import { useState } from "react";
import axios from 'axios';

function ResolutionEntry(){

    const [entry, setEntry] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        addResolution(entry);
        console.log('resolution', entry);
        setEntry('');
    }

    const addResolution = (newResolution) => {
        axios({
            method: 'POST',
            url: '/resolutions',
            data: {
                resolution: newResolution
            }
        }).then( response => {
            console.log(response);
            // getResolutions();
        }).catch( err => {
            console.log(err);
        })
    }

    return(
        <div>
            <h1>This will be an entry form</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="text"
                onChange={(event) => setEntry(event.target.value)}
                value={entry}
                placeholder="Type your new years resolution here"/>
                <input type="submit" />
            </form>
        </div>
    );
}

export default ResolutionEntry;