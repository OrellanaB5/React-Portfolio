import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Brandon Orellana
                </Typography>
                <Button color="inherit" component={RouterLink} to="/">About Me</Button>
                <Button color="inherit" component={RouterLink} to="/portfolio">Portfolio</Button>
                <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
                <Button color="inherit" component={RouterLink} to="/resume">Resume</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;