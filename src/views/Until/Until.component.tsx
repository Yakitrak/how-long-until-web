import React, { useEffect, useState } from 'react'
import './Until.scss'
import { routes } from '../../common/routes'
import { Button, Typography } from '@mui/material'
import Countdown from '../../components/Countdown/Countdown.component'
import AddIcon from '@mui/icons-material/Add'
import dayjs from 'dayjs'

const Until = (): JSX.Element => {
  const [countdownTime, setCountdownTime] = useState<Date | null>(null)
  const [countdownOccasion, setCountdownOccasion] = useState<string | null>('')

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const datetime = urlParams.get('datetime')
    const occasion = urlParams.get('occasion')

    if (!datetime || isNaN(Date.parse(datetime))) {
      window.location.href = routes.HOME
    } else {
      setCountdownTime(new Date(datetime))
      if (occasion) {
        setCountdownOccasion(occasion)
      }
      document.title = `How Long Until ${occasion || dayjs(datetime).format('LLL')}`
    }
  }, [])

  return (
        <>
            {(countdownTime != null) && (
                <>
                    <div className="until-container">

                        {countdownTime.getTime() > Date.now()
                          ? (
                            <div data-testid={'countdown-progress'}>
                                <Countdown targetDate={countdownTime}/>
                                <Typography variant="h4" gutterBottom className={'dull-text'}>
                                    until
                                </Typography>
                                <Typography variant="h2" gutterBottom className={'occasion-value'}>
                                    {toTitleCase(countdownOccasion || dayjs(countdownTime).format('LLL'))}
                                </Typography>

                            </div>)
                          : (
                            <div>
                                <Typography variant="h2" gutterBottom className={'occasion-value'} data-testid={'countdown-over'}>
                                    {toTitleCase(countdownOccasion || dayjs(countdownTime).format('LLL'))} is here
                                </Typography>
                            </div>)}
                    </div>
                    <div className='create-own-button'>
                        <Button variant="text" size={'small'} color={'info'} startIcon={<AddIcon/>} onClick={
                            () => window.open(routes.HOME, '_blank')
                        }>Create Countdown</Button>
                    </div>
                </>)}
        </>
  )
}

const toTitleCase = (phrase: string): string => {
  return phrase.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
}

export default Until
