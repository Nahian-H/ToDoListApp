import React, { useState } from "react";
import { List, Typography, Paper, Button, Stack } from "@mui/material";
import InputProps from "./InputProps";
import ToDoItem from "./ToDoListItem";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const ToDoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showCompleted, setShowCompleted] = useState<boolean>(false);

  const addTask = (text: string) => {
    if (text.trim()) {
      setTasks((prev) => [...prev, { id: Date.now(), text, completed: false }]);
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

  const completedTasks = tasks.filter((task) => task.completed);
  //   return (
  //     <Paper elevation={3} sx={{ p: 2 }}>
  //       <InputProps onAddTask={addTask} />
  //       {tasks.length > 0 ? (
  //         <List>
  //           {tasks.map((task) => (
  //             <ToDoItem
  //               key={task.id}
  //               task={task}
  //               onToggle={toggleTask}
  //               onDelete={deleteTask}
  //             />
  //           ))}
  //         </List>
  //       ) : (
  //         <Typography align="center" sx={{ mt: 2 }}>
  //           No tasks yet! Add one above.
  //         </Typography>
  //       )}
  //     </Paper>
  //   );
  // };
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <InputProps onAddTask={addTask} />

      {/* Buttons for controlling task visibility */}
      <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 2 }}>
        {/* Show Completed Tasks */}
        <Button
          variant="contained"
          color="success"
          onClick={() => setShowCompleted(true)}
        >
          Show Completed Tasks
        </Button>

        {/* Show All Tasks */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowCompleted(false)}
        >
          Show All Tasks
        </Button>
      </Stack>

      {/* Display Task List */}
      {showCompleted ? (
        completedTasks.length > 0 ? (
          <List>
            {completedTasks.map((task) => (
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
            No completed tasks yet!
          </Typography>
        )
      ) : tasks.length > 0 ? (
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
          Add a task to do!
        </Typography>
      )}
    </Paper>
  );
};

export default ToDoList;
