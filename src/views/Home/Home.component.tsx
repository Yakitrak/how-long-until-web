import React, {useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import dayjs, {Dayjs} from 'dayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import Snackbar from '@mui/material/Snackbar';
import {isValidISODate} from "../../utils/date";

const Home = () => {
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
            How it works?
            How to create a countdown?
            Link to create a countdown / Create her

            <div style={{display: 'flex'}}>
                <TextField
                    id="occasion"
                    label="Occasion (optional)"
                    type="occasion"
                    value={occasion}
                    placeholder={'e.g. Christmas'}
                    onChange={(event) => setOccasion(event.target.value)}
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label="Controlled picker"
                        value={datetime}
                        disablePast
                        onChange={(newValue) => setDateTime(newValue)}
                        format={"DD/MM/YYYY HH:mm"}
                    />
                </LocalizationProvider>

                <TextField
                    id="generated-url"
                    label="Link (share or bookmark)"
                    InputProps={{
                        readOnly: true,
                    }}
                    value={url}

                />

                <Button
                    variant="contained"
                    onClick={handleCopyUrlToClipboard}
                    disabled={!isUrlValid}
                >
                    Copy
                </Button>

                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => setOpen(false)}
                    message="Link copied to clipboard"
                />

            </div>


        </>
    )
}

export default Home;