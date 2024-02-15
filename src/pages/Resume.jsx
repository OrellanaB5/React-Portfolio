import React from 'react';
import { Typography, Link, List, ListItem, Container } from '@mui/material';

export default function Resume() {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Resume
      </Typography>

      <Typography variant="h6" sx={{ mt: 4 }}>
        Download my <Link href='https://www.github.com/OrellanaB5' underline="none" color="primary">resume</Link>
      </Typography>

      <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mt: 4 }}>
        Front-End Skills
      </Typography>
      <List>
        {["HTML5", "CSS", "JS", "jQuery", "React.js", "Bootstrap", "Materialize"].map(skill => (
          <ListItem key={skill}>{skill}</ListItem>
        ))}
      </List>

      <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mt: 4 }}>
        Back-End Skills
      </Typography>
      <List>
        {["JavaScript", "Node.js", "Express.js"].map(skill => (
          <ListItem key={skill}>{skill}</ListItem>
        ))}
      </List>

      <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mt: 4 }}>
        Data Skills
      </Typography>
      <List>
        {["MySQL", "Sequelize", "MongoDB", "Mongoose"].map(skill => (
          <ListItem key={skill}>{skill}</ListItem>
        ))}
      </List>

      <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mt: 4 }}>
        Development and Operations
      </Typography>
      <List>
        {["GitHub", "Git", "Version Control"].map(skill => (
          <ListItem key={skill}>{skill}</ListItem>
        ))}
      </List>
    </Container>
  );
}
