import React from 'react';
import projectList from "../assets/project";
import Project from '../components/Project';
import { Grid, Container, Typography } from '@mui/material';

function Portfolio() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom>
                Portfolio
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {projectList.map((project) => (
                    <Grid item key={project.id} xs={12} sm={6} md={4}>
                        <Project {...project} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Portfolio;
