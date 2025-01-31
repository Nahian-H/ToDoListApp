import React from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface ToDoItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => onDelete(task.id)}>
          <DeleteIcon />
        </IconButton>
      }
      sx={{
        bgcolor: task.completed ? "action.selected" : "background.paper",
        mb: 1,
      }}
    >
      <Checkbox
        edge="start"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <ListItemText
        primary={
          <Typography
            variant="body1"
            sx={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.text}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default ToDoItem;
