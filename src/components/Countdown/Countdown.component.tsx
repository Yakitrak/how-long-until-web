import React, {useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import "./Countdown.scss"

type CountdownTimerProps = {
    targetDate: Date;
}
type TimeLeft = {
    years: number;
    months: number
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({targetDate}) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    function calculateTimeLeft(): TimeLeft {
        const difference = targetDate.getTime() - new Date().getTime();
        const MILLISECONDS_IN_SECOND = 1000;
        const SECONDS_IN_MINUTE = 60;
        const MINUTES_IN_HOUR = 60;
        const HOURS_IN_DAY = 24;
        const DAYS_IN_MONTH = 30; // Assumes a month is 30 days

        let timeLeft = {
            years: 0,
            months: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }

        if (difference > 0) {
            const secondsLeft = Math.floor(difference / MILLISECONDS_IN_SECOND);
            const minutesLeft = Math.floor(secondsLeft / SECONDS_IN_MINUTE);
            const hoursLeft = Math.floor(minutesLeft / MINUTES_IN_HOUR);
            const daysLeft = Math.floor(hoursLeft / HOURS_IN_DAY);
            const monthsLeft = Math.floor(daysLeft / DAYS_IN_MONTH);
            const yearsLeft = Math.floor(monthsLeft / 12);
            const remainingMonths = monthsLeft % 12;

            timeLeft = {
                years: yearsLeft,
                months: remainingMonths,
                days: daysLeft % DAYS_IN_MONTH,
                hours: hoursLeft % HOURS_IN_DAY,
                minutes: minutesLeft % MINUTES_IN_HOUR,
                seconds: secondsLeft % SECONDS_IN_MINUTE,
            }
        }

        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const {days, hours, minutes, seconds, months, years} = timeLeft;

    const prefixText = (timeLeft.years === 1 || timeLeft.months === 1 || timeLeft.days === 1 || timeLeft.hours === 1 || timeLeft.minutes === 1 || timeLeft.seconds === 1) ? "There is" : "There are";
    return (
        <>
            <Typography variant="h4" gutterBottom className={'dull-text'}>
                {prefixText}
            </Typography>

            {years > 0 && (
                <Typography variant="h2" gutterBottom>
                    <span className={'countdown-value'}>{years}</span> {years > 1 ? "years" : "year"}
                </Typography>
            )}
            {months > 0 && (
                <Typography variant="h2" gutterBottom>
                    <span className={'countdown-value'}>{months}</span> {months > 1 ? "months" : "month"}
                </Typography>
            )}
            {days > 0 && (
                <Typography variant="h2" gutterBottom>
                    <span className={'countdown-value'}>{days}</span> {days > 1 ? "days" : "day"}
                </Typography>
            )}
            {hours > 0 && (
                <Typography variant="h2" gutterBottom>
                    <span className={'countdown-value'}>{hours}</span> {hours > 1 ? "hours" : "hour"}
                </Typography>
            )}
            {minutes > 0 && (
                <Typography variant="h2" gutterBottom>
                    <span className={'countdown-value'}>{minutes}</span> {minutes > 1 ? "minutes" : "minute"}
                </Typography>
            )}
            <Typography variant="h2" gutterBottom>
                <span className={'countdown-value'}>{seconds}</span> {seconds > 1 ? "seconds" : "second"}
            </Typography>
        </>
    );
};

export default CountdownTimer;
