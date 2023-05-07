import React from 'react';
import {Dialog, DialogContent, IconButton} from "@mui/material";
import GithubIcon from "@mui/icons-material/GitHub";
import CloseIcon from '@mui/icons-material/Close';
import "./HelpModal.scss"

type HelpModalProps = {
    open: boolean;
    handleClose: () => void;
}
const HelpModal = ({
                       open,
                       handleClose
                   }: HelpModalProps
) => {

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullScreen
        >
            <DialogContent className={'help-modal'}>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon/>
                </IconButton>

                <IconButton aria-label="delete">
                    < GithubIcon/>
                </IconButton>
                How it works?
                How to create a countdown?
                Link to create a countdown / Create here

            </DialogContent>

        </Dialog>
    )
}

export default HelpModal;