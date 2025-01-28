import React, { useState } from 'react';
import { List, Typography, Paper } from '@mui/material';
import InputProps from './Props';
import ToDoItem from './ToDoListItem';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const ToDoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    if (text.trim()) {
      setTasks((prev) => [
        ...prev,
        { id: Date.now(), text, completed: false },
      ]);
    }
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <InputProps onAddTask={addTask} />
      {tasks.length > 0 ? (
        <List>
          {tasks.map((task) => (
            <ToDoItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </List>
      ) : (
        <Typography align="center" sx={{ mt: 2 }}>
          No tasks yet! Add one above.
        </Typography>
      )}
    </Paper>
  );
};

export default ToDoList;
