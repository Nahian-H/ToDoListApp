import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToDoList from './ToDoList';

const theme = createTheme();

const customRender = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {ui}
    </ThemeProvider>
  );
};

describe('ToDoList', () => {
  beforeEach(() => {
    customRender(<ToDoList />);
  });

  it('should add a new task and show it in the list', async () => {
    const user = userEvent.setup();
    const input = screen.getByRole('textbox', { name: /New Task/i });
    const addButton = screen.getByRole('button', { name: /ADD/i });

    await user.type(input, 'test task 1');
    
    await user.click(addButton);

    expect(screen.getByText('test task 1')).toBeInTheDocument();
    // expect(input).toHaveValue('');
  });

  it('should mark a task as completed and move it to completed list', async () => {
    
  });
});