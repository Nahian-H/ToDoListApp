import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

interface InputFieldProps {
  onAddTask: (text: string) => void;
}

const InputProps: React.FC<InputFieldProps> = ({ onAddTask }) => {
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    onAddTask(input);
    setInput(''); // Clear input field
  };

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <TextField
        fullWidth
        variant="outlined"
        label="New Task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTask}
        disabled={!input.trim()}
      >
        Add
      </Button>
    </Box>
  );
};

export default InputProps;
