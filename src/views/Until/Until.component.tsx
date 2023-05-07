import React, {useEffect, useState} from 'react';
import "./Until.scss"
import {routes} from "../../constants/routes";
import {Button, Typography} from '@mui/material';
import Countdown from "../../components/Countdown/Countdown.component";
import InfoIcon from "@mui/icons-material/Info";
import dayjs from "dayjs";

const Until = () => {
    const [countdownTime, setCountdownTime] = useState<Date | null>(null);
    const [countdownOccasion, setCountdownOccasion] = useState<string | null>("");

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const datetime = urlParams.get('datetime');
        const occasion = urlParams.get('occasion');

        if (!datetime) {
            window.location.href = routes.HOME
        } else {
            setCountdownTime(new Date(datetime))
            if (occasion) {
                setCountdownOccasion(occasion)
            }
        }
    }, [])

    return (
        <>
            {countdownTime && (
                <>
                    <div className="until-container">
                        <Typography variant="h4" gutterBottom className={'dull-text'}>
                            There is
                        </Typography>

                        <Countdown targetDate={countdownTime}/>

                        <Typography variant="h4" gutterBottom className={'dull-text'}>
                            until
                        </Typography>


                        <Typography variant="h2" gutterBottom className={'occasion-value'}>
                            {toTitleCase(countdownOccasion ? countdownOccasion : dayjs(countdownTime).format('LLL'))}
                        </Typography>


                    </div>
                    <div className='create-own-button'>
                        <Button variant="text" color={"info"} startIcon={<InfoIcon/>} href={routes.HOME}
                                target="_blank">
                            CREATE ANOTHER COUNTDOWN
                        </Button>
                    </div>
                </>)}
        </>
    )
}

const toTitleCase = (phrase: string) => {
    return phrase.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
}

export default Until;