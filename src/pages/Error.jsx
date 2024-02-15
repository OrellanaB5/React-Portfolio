import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Container, Typography, Paper } from '@mui/material';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Container component="main" maxWidth="sm" sx={{ mt: 8 }}>
            <Paper elevation={3} sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Oops!
                </Typography>
                <Typography variant="subtitle1">
                    Sorry, an unexpected error has occurred.
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    <i>{error.statusText || error.message}</i>
                </Typography>
            </Paper>
        </Container>
    );
}
