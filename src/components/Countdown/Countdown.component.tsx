import React, {useEffect, useState} from 'react';

type CountdownTimerProps = {
    targetDate: Date;
}

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({targetDate}) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    function calculateTimeLeft(): TimeLeft {
        const difference = targetDate.getTime() - new Date().getTime();
        let timeLeft: TimeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const {days, hours, minutes, seconds} = timeLeft;

    return (
        <div>
            {targetDate.getTime() > new Date().getTime() ? (
                <div>
                    <p>{days} days, {hours} hours, {minutes} minutes, and {seconds} seconds</p>
                </div>
            ) : (
                <div>
                    <p>The countdown is over!</p>
                </div>
            )}
        </div>
    );
};

export default CountdownTimer;
