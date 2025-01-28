import React from 'react';
import { CssBaseline, Container, Typography } from '@mui/material';
import ToDoList from './ToDoList';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          To-Do List
        </Typography>
        <ToDoList />
      </Container>
    </>
  );
};

export default App;
