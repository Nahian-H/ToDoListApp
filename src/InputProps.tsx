import React, { useState } from 'react';
import { Box, TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

interface InputFieldProps {
  onAddTask: (text: string, priority: 'Low' | 'Medium' | 'High') => void;
}

const InputProps: React.FC<InputFieldProps> = ({ onAddTask }) => {
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Medium');

  const handleAddTask = () => {
    onAddTask(input, priority);
    setInput(''); // Clear input field
    setPriority('Medium'); // Reset priority to default
  };

  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <TextField
        fullWidth
        variant="outlined"
        label="New Task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel id="priority-label">Priority</InputLabel>
        <Select
          data-testid="priority-select"
          labelId="priority-label"
          id="priority-select"
          label="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value as 'Low' | 'Medium' | 'High')}
          renderValue={(selected) => String(selected)}
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
      </FormControl>
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



// import React, { useState } from 'react';
// import { Box, TextField, Button } from '@mui/material';

// interface InputFieldProps {
//   onAddTask: (text: string) => void;
// }

// const InputProps: React.FC<InputFieldProps> = ({ onAddTask }) => {
//   const [input, setInput] = useState('');

//   const handleAddTask = () => {
//     onAddTask(input);
//     setInput(''); // Clear input field
//   };

//   return (
//     <Box sx={{ display: 'flex', gap: 1 }}>
//       <TextField
//         fullWidth
//         variant="outlined"
//         label="New Task"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleAddTask}
//         disabled={!input.trim()}
//       >
//         Add
//       </Button>
//     </Box>
//   );
// };

// export default InputProps;
