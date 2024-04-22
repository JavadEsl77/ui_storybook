import React from 'react';
import {Button, Typography} from "@mui/material";
import {PaletteLightWarningLight} from "../build/js/tokens";

const MainButton = ({title}) => {
    return (
        <Button sx={{backgroundColor:PaletteLightWarningLight}}>
            <Typography>{title}</Typography>
        </Button>
    );
};

export default MainButton;