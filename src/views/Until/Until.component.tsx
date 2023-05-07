import React, {useEffect} from 'react';
import dayjs, {Dayjs} from 'dayjs';

const Until = () => {
    const [countdownText, setCountdownText] = React.useState<string | null>("");

    useEffect(() => {
        let text = ""
        const urlParams = new URLSearchParams(window.location.search);
        const datetime = urlParams.get('datetime');
        const occasion = urlParams.get('occasion');

        if (datetime) {
            const dateText = dayjs(datetime).format("DD/MM/YYYY HH:mm") // '25/01/2019'
            text += "You have " + dateText + " left"
            if (occasion) {
                text += " until " + occasion
            }
        }
        setCountdownText(text)

    })

    return (
        <>
            {countdownText}
        </>
    )
}

export default Until;