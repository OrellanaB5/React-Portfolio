import React, { useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, IconButton, Link as MuiLink } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

function Project({ id, title, deployed, link, techUsed, image }) {
    return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardActionArea component="a" href={deployed} target="_blank">
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {techUsed}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <MuiLink href={link} target="_blank" color="inherit">
                    <IconButton aria-label="github link">
                        <GitHubIcon />
                    </IconButton>
                </MuiLink>
                <Typography variant="body2" color="text.secondary">
                    <Link to={deployed} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                        View Project
                    </Link>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Project;
