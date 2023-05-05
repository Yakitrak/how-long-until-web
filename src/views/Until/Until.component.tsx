import React, {useEffect} from 'react';

const Until = () => {
    const [datetime, setDatetime] = React.useState<string>("");
    const [occasion, setOccasion] = React.useState<string>("");

    useEffect(() => {
        // get date time
        // get occasion
        // set document title
    })

    // stuff
    return (
        <>
            There is
            {datetime}
            left until
            {occasion}


            ---
            Link to create a countdown
        </>
    )
}

export default Until;