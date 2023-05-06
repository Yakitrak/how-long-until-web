import React, {useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import dayjs, {Dayjs} from 'dayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import Snackbar from '@mui/material/Snackbar';

const Home = () => {
    const [datetime, setDateTime] = React.useState<Dayjs | null>(dayjs(''));
    const [occasion, setOccasion] = React.useState<string>("");
    const [url, setUrl] = React.useState<string>("");
    const [isUrlValid, setIsUrlValid] = React.useState<boolean>(false);
    const [open, setOpen] = React.useState(false);

    const handleCopyUrlToClipboard = () => {
        navigator.clipboard.writeText(url)
        setOpen(true)
    }

    useEffect(() => {
        setUrl(datetime+occasion)

        // if date is valid
        setIsUrlValid(true)


    }, [datetime, occasion])

    return (
        <>
            How it works?
            How to create a countdown?
            Link to create a countdown / Create her

            <div style={{display: 'flex'}}>
                <TextField
                    id="occasion"
                    label="Occasion"
                    type="occasion"
                    value={occasion}
                    onChange={(event) => setOccasion(event.target.value)}
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label="Controlled picker"
                        value={datetime}
                        onChange={(newValue) => setDateTime(newValue)}
                    />
                </LocalizationProvider>

                <TextField
                    id="generated-url"
                    label="Read Only url"
                    defaultValue=""
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