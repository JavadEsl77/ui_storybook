import React from 'react';
import {Button, Typography} from "@mui/material";

const MainButton = ({title}) => {
    return (
        <Button >
            <Typography>{title}</Typography>
        </Button>
    );
};

export default MainButton;