import React, {useEffect} from 'react';
import {Button, IconButton, Snackbar, TextField, Typography} from '@mui/material';
import dayjs, {Dayjs} from 'dayjs';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {routes} from "../../constants/routes";
import LinkFieldWithButtons from "../../components/LinkFieldWithButtons/LinkFieldWithButtons.component";
import "./Create.scss"
import InfoIcon from '@mui/icons-material/Info';

const Create = () => {
    const [datetime, setDateTime] = React.useState<Dayjs | null>(dayjs().add(1, 'minute'));
    const [occasion, setOccasion] = React.useState<string>("");
    const [url, setUrl] = React.useState<string>("");
    const [isUrlValid, setIsUrlValid] = React.useState<boolean>(false);
    const [open, setOpen] = React.useState(false);

    const handleCopyUrlToClipboard = () => {
        navigator.clipboard.writeText(url)
        setOpen(true)
    }

    useEffect(() => {
        const params = new URLSearchParams();
        if (datetime?.toISOString()) {
            params.append("datetime", datetime?.toISOString())
            if (occasion) {
                params.append("occasion", occasion)
            }
            setUrl(`${window.location.origin}/until?${params.toString()}`)
            setIsUrlValid(true)
        }
    }, [datetime, occasion])

    return (
        <>
            <div className="create-container">

                <Typography variant="h2" gutterBottom>
                    What are you waiting for?
                </Typography>

                <div className="inputs-container">
                    <TextField
                        id="occasion"
                        label="What is the occasion?"
                        value={occasion}
                        placeholder={'e.g.. Birthday..'}
                        onChange={(event) => setOccasion(event.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className={'create-input'}
                    />

                    <DateTimePicker
                        label="When is it?"
                        value={datetime}
                        disablePast
                        onChange={(newValue) => setDateTime(newValue)}
                        format={"DD/MM/YYYY HH:mm"}
                        className={'create-input'}

                    />
                </div>

                <div className={'link-container'}>
                    <LinkFieldWithButtons
                        label="Your Countdown Link"
                        InputProps={{
                            readOnly: true,
                        }}
                        url={url}
                        disableButtons={!isUrlValid}
                        onCopyClick={handleCopyUrlToClipboard}
                        onVisitClick={() => window.open(url, "_blank")}
                        copyText={"Copy Link"}
                        visitText={"Visit Link"}
                    />
                </div>


                <div className='more-info-button'>
                    <Button variant="text" color={"info"} href={routes.HOME} startIcon={<InfoIcon/>}>
                        More Information
                    </Button>
                </div>

            </div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={() => setOpen(false)}
                message="Your link has been copied to clipboard."
            />
        </>
    )
}

export default Create;