import React from 'react';
import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleTheme }) => {
  return (
    <IconButton
      onClick={toggleTheme}
      data-testid="theme-toggle"
      sx={{ position: 'fixed', top: 16, right: 16 }}
    >
      {darkMode ? (
        <LightModeIcon data-testid="light-mode-icon" />
      ) : (
        <DarkModeIcon data-testid="dark-mode-icon" />
      )}
    </IconButton>
  );
};

export default ThemeToggle;
