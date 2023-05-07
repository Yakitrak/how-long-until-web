import React, {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import "./Until.scss"
import {routes} from "../../constants/routes";
import {Button, Typography} from '@mui/material';
import Countdown from "../../components/Countdown/Countdown.component";
import InfoIcon from "@mui/icons-material/Info";

const Until = () => {
    const [countdownTime, setCountdownTime] = useState<Date>(new Date());
    const [countdownOccasion, setCountdownOccasion] = useState<string | null>("");
    const relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)

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
            <div className="until-container">
                <Typography variant="h4" gutterBottom>
                    You have
                </Typography>

                <Typography variant="h2" gutterBottom>
                    <Countdown targetDate={countdownTime}/>
                </Typography>

                {countdownOccasion && (
                    <><Typography variant="h4" gutterBottom>
                        until
                    </Typography><Typography variant="h2" gutterBottom>
                        {toTitleCase(countdownOccasion)}
                    </Typography>
                    </>
                )}
            </div>
            <div className='create-own-button'>
                <Button variant="text" color={"info"}  startIcon={<InfoIcon/>} href={routes.HOME}>
                    CREATE YOUR OWN
                </Button>
            </div>
        </>
    )
}

const toTitleCase = (phrase: string) => {
    return phrase.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
}

export default Until;