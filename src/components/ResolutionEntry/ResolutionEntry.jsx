import { useState } from "react";

function ResolutionEntry(){

    const [entry, setEntry] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('resolution', entry);
        setEntry('');
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