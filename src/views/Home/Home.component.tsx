import React, {useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import dayjs, {Dayjs} from 'dayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import Snackbar from '@mui/material/Snackbar';
import {isValidISODate} from "../../utils/date";
import {IconButton} from "@mui/material";
import GithubIcon from "@mui/icons-material/GitHub";

const Home = () => {

    return (
        <>
            <IconButton aria-label="delete">
                < GithubIcon/>
            </IconButton>
            How it works?
            How to create a countdown?
            Link to create a countdown / Create her
        </>
    )
}

export default Home;