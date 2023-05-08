import React, {useEffect} from 'react';
import {Button, Snackbar, TextField, Typography} from '@mui/material';
import dayjs, {Dayjs} from 'dayjs';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import LinkFieldWithButtons from "../../components/LinkFieldWithButtons/LinkFieldWithButtons.component";
import "./Home.scss"
import InfoIcon from '@mui/icons-material/Info';
import HelpModal from "../../components/HelpModal/HelpModal.component";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';

const Home = () => {
    const [datetime, setDateTime] = React.useState<Dayjs | null>(dayjs().hour(23).minute(59).second(0).millisecond(0));
    const [occasion, setOccasion] = React.useState<string>("");
    const [url, setUrl] = React.useState<string>("");
    const [isUrlValid, setIsUrlValid] = React.useState<boolean>(false);
    const [openSnack, setOpenSnack] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);

    const handleCopyUrlToClipboard = () => {
        navigator.clipboard?.writeText(url)
        setOpenSnack(true)
    }

    const isDateInFuture = (date: Dayjs) => {
        const inputDate = dayjs(date);
        const currentDate = dayjs();
        return inputDate.isAfter(currentDate);
    }

    useEffect(() => {
        const params = new URLSearchParams();
        if (datetime?.isValid() && datetime?.toISOString() && isDateInFuture(datetime)) {
            params.append("datetime", datetime?.toISOString())
            if (occasion) {
                params.append("occasion", occasion)
            }
            setUrl(`${window.location.origin}/until?${params.toString()}`)
            setIsUrlValid(true)
        } else {
            setIsUrlValid(false)
        }
    }, [datetime, occasion])

    return (
        <>
            <div className="create-container">

                <Typography variant="h2" gutterBottom style={{marginBottom: 75}}>
                    What are you waiting for?
                </Typography>

                <div className="inputs-container">
                    <TextField
                        id="occasion"
                        label="What is the occasion?"
                        value={occasion}
                        placeholder={'e.g.. my birthday'}
                        onChange={(event) => setOccasion(event.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className={'create-input'}
                    />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="When is it?"
                            value={datetime}
                            disablePast
                            onChange={(newValue) => setDateTime(newValue)}
                            format={"DD/MM/YYYY HH:mm"}
                            className={'create-input'}

                        />
                    </LocalizationProvider>

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
                    <Button variant="text" color={"info"} startIcon={<InfoIcon/>} onClick={() => setOpenModal(true)}>
                        Click here for more info
                    </Button>
                </div>

            </div>
            <HelpModal
                open={openModal}
                handleClose={() => setOpenModal(false)}
            />
            <Snackbar
                open={openSnack}
                autoHideDuration={6000}
                onClose={() => setOpenSnack(false)}
                message="Your link has been copied to clipboard."
            />
        </>
    )
}

export default Home;