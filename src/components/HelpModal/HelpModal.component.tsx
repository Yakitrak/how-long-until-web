import React from 'react'
import { Button, Dialog, DialogContent, IconButton, Typography } from '@mui/material'
import GithubIcon from '@mui/icons-material/GitHub'
import CloseIcon from '@mui/icons-material/Close'
import './HelpModal.scss'

interface HelpModalProps {
  open: boolean
  handleClose: () => void
}
const HelpModal = ({
  open,
  handleClose
}: HelpModalProps
): JSX.Element => {
  return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullScreen
            data-testid={'help-modal'}
        >
            <DialogContent className={'help-modal'}>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                      position: 'absolute',
                      right: 8,
                      top: 8,
                      color: (theme) => theme.palette.grey[500]
                    }}
                >
                    <CloseIcon/>
                </IconButton>

                <div className={'about-info'}>
                    <Typography variant="h2" gutterBottom style={{ marginBottom: 40 }}>How it works?</Typography>

                    <Typography variant="body1" gutterBottom>
                        This is a simple web app that allows you to create a countdown timer for a specific <span
                        className={'highlight'}>date and time</span>. You can also add a custom <span
                        className={'highlight'}>occasion</span> to the
                        countdown. The countdown will be saved in the
                        link so you can share it with your friends or bookmark it for later. You can visit the
                        link at any time to see <span className='highlight'>how long until</span> the event!
                    </Typography>
                    <Button onClick={handleClose} variant="contained"> Create Now</Button>
                </div>

                <div className='about-info-corner'>
                    <Button href={'https://github.com/Yakitrak/how-long-until-web'} target={'_blank'}>
                        <IconButton aria-label="delete">
                            < GithubIcon/>
                        </IconButton>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
  )
}

export default HelpModal
