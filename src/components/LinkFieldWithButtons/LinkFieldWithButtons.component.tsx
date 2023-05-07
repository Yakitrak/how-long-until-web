import React from "react";
import {Button} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

type LinkFieldWithButtonsProps = {
    label: string;
    InputProps: any;
    url: string;
    disableButtons: boolean;
    onCopyClick: () => void;
    onVisitClick: () => void;
    copyText: string;
    visitText: string;
}
const LinkFieldWithButtons = ({
                                  disableButtons,
                                  copyText,
                                  visitText,
                                  onCopyClick,
                                  onVisitClick
                              }: LinkFieldWithButtonsProps) => {
    return (
        <>
            <Button
                variant="contained"
                onClick={onCopyClick}
                disabled={disableButtons}
                startIcon={<ContentCopyIcon/>}
            >
                {copyText}
            </Button>
            <Button
                endIcon={<NavigateNextIcon/>}
                variant="outlined"
                onClick={onVisitClick}
                disabled={disableButtons}
            >
                {visitText}
            </Button>
        </>
    );
};

export default LinkFieldWithButtons;
