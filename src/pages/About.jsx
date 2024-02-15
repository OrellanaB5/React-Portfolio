import React from 'react';
import { Typography, Container, Box, Paper } from '@mui/material';
import profilePic from '../assets/images/pineapple.png'; 

export default function About() {
    return (
        <Container component="section" sx={{ my: 4 }}>
            <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    About Me
                </Typography>
                <Box
                    component="img"
                    sx={{
                        height: 'auto',
                        width: '100%',
                        maxWidth: { xs: 350, md: 250 }, 
                        display: 'block', 
                        mx: 'auto', 
                    }}
                    alt="Picture of me"
                    src={profilePic}
                />
                <Typography variant="body1" gutterBottom>
                    Adding bio soon
                </Typography>
            </Paper>
        </Container>
    );
}
