import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

export default function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateEmail = (email) => {
        const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        return regex.test(email);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }
        if (message === '') {
            setErrorMessage("Message cannot be empty.");
            return;
        }
        setErrorMessage('');
        console.log("Form submitted", { name, email, message });
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h4" component="h1" gutterBottom>
                Contact Me
            </Typography>
            <Box component="form" onSubmit={handleFormSubmit} noValidate sx={{ mt: 2 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="message"
                    label="Message"
                    type="text"
                    id="message"
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                {errorMessage && (
                    <Typography color="error" variant="body2">
                        {errorMessage}
                    </Typography>
                )}
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Submit
                </Button>
            </Box>
        </Container>
    );
}
