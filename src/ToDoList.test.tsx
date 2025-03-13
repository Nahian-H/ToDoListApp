import { describe, it, expect, beforeEach, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ToDoList from "./ToDoList";

const useStateMock = (initialState: any) => {
  const state = initialState;
  const setState = vitest.fn();
  return [state, setState];
};

const theme = createTheme();

const customRender = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("ToDoList", () => {
  beforeEach(() => {
    customRender(<ToDoList />);
  });

  it("should add a new task and show it in the list", async () => {
    const user = userEvent.setup();
    const input = screen.getByRole("textbox", { name: /New Task/i });
    const addButton = screen.getByRole("button", { name: /ADD/i });

    await user.type(input, "test task 1");
    expect(input).toHaveValue("test task 1");
    await user.click(addButton);
    expect(screen.getByText("test task 1")).toBeInTheDocument();
    expect(input).toHaveValue("");
  });
  describe("addTask", () => {
    let tasks, setTasks: any, addTask: any;

    beforeEach(() => {
      [tasks, setTasks] = useStateMock([]);
      addTask = (text: string) => {
        if (text.trim()) {
          setTasks((prev: any) => [
            ...prev,
            { id: Date.now(), text, completed: false },
          ]);
        }
      };
    });

    it("should add a new task when text is not empty", () => {
      const taskText = "New Task";
      addTask(taskText);
      expect(setTasks).toHaveBeenCalledWith(expect.any(Function));
      const setTasksCallback = setTasks.mock.calls[0][0];
      const newTasks = setTasksCallback([]);
      expect(newTasks).toHaveLength(1);
      expect(newTasks[0]).toMatchObject({ text: taskText, completed: false });
    });

    it("should not add a new task when text is empty", () => {
      const taskText = "   ";
      addTask(taskText);
      expect(setTasks).not.toHaveBeenCalled();
    });
  });
});
