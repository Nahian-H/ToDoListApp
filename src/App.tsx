// import React from 'react';
// import { CssBaseline, Container, Typography } from '@mui/material';
// import ToDoList from './ToDoList';

// const App: React.FC = () => {
//   return (
//     <>
//       <CssBaseline />
//       <Container maxWidth="sm" sx={{ mt: 4 }}>
//         <Typography variant="h4" component="h1" align="center" gutterBottom>
//           To-Do List
//         </Typography>
//         <ToDoList />
//       </Container>
//     </>
//   );
// };

// export default App;
// App.tsx
import React, { useState } from 'react';
import { CssBaseline, Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ToDoList from './ToDoList';
import ThemeToggle from './ThemeToggle';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          To-Do List
        </Typography>
        <ToDoList />
      </Container>
    </ThemeProvider>
  );
};

export default App;
