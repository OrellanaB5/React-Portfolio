import * as React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <Grid container spacing={3} justifyContent="center">
                    <Grid item>
                        <Link href="https://github.com/OrellanaB5" color="inherit">
                            <GitHubIcon />
                        </Link>
                        <Link href="#" color="inherit" sx={{ ml: 2 }}>
                            <LinkedInIcon />
                        </Link>
                    </Grid>
                </Grid>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 3 }}>
                    Brandon Orellana
                </Typography>
            </Container>
        </Box>
    );
}
