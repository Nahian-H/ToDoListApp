// import React from "react";
// import {
//   ListItem,
//   ListItemText,
//   Checkbox,
//   IconButton,
//   Typography,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// interface Task {
//   id: number;
//   text: string;
//   completed: boolean;
// }

// interface ToDoItemProps {
//   task: Task;
//   onToggle: (id: number) => void;
//   onDelete: (id: number) => void;
// }

// const ToDoItem: React.FC<ToDoItemProps> = ({ task, onToggle, onDelete }) => {
//   return (
//     <ListItem
//       secondaryAction={
//         <IconButton edge="end" onClick={() => onDelete(task.id)}>
//           <DeleteIcon />
//         </IconButton>
//       }
//       sx={{
//         bgcolor: task.completed ? "action.selected" : "background.paper",
//         mb: 1,
//       }}
//     >
//       <Checkbox
//         edge="start"
//         checked={task.completed}
//         onChange={() => onToggle(task.id)}
//       />
//       <ListItemText
//         primary={
//           <Typography
//             variant="body1"
//             sx={{
//               textDecoration: task.completed ? "line-through" : "none",
//             }}
//           >
//             {task.text}
//           </Typography>
//         }
//       />
//     </ListItem>
//   );
// };

// export default ToDoItem;
import React from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface Task {
  id: number;
  text: string;
  completed: boolean;
  priority: "Low" | "Medium" | "High";
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body1"
              sx={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </Typography>
            {/* Chip to display the task priority */}
            <Chip
              label={task.priority}
              size="small"
              color={
                task.priority === "High"
                  ? "error"
                  : task.priority === "Medium"
                  ? "warning"
                  : "success"
              }
              sx={{ ml: 1 }}
            />
          </Box>
        }
      />
    </ListItem>
  );
};

export default ToDoItem;
