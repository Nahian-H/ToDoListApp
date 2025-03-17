import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import InputProps from '../InputProps';
import { describe, it, expect, vi } from 'vitest';

describe('InputProps Component', () => {
//   it('calls onAddTask with input text and selected priority, then clears input and resets priority', async () => {
//     const onAddTaskMock = vi.fn();
//     render(<InputProps onAddTask={onAddTaskMock} />);
    
//     const inputField = screen.getByLabelText(/new task/i);
//     const addButton = screen.getByRole('button', { name: /add/i });
//     // Our Select has a test id.
//     const selectElement = screen.getByTestId('priority-select');
    
//     // Type a task.
//     fireEvent.change(inputField, { target: { value: 'Test Task' } });
//     expect(inputField).toHaveValue('Test Task');
    
//     // Open the dropdown and choose "High"
//     await userEvent.click(selectElement);
//     // Wait for the "High" option to appear.
//     const highOption = await screen.findByText('High');
//     await userEvent.click(highOption);
    
//     // Verify that the select now displays "High"
//     expect(selectElement).toHaveTextContent('High');
    
//     // Click the Add button.
//     fireEvent.click(addButton);
//     expect(onAddTaskMock).toHaveBeenCalledWith('Test Task', 'High');
    
//     // After adding, the input should be cleared and the select reset to "Medium"
//     expect(inputField).toHaveValue('');
//     expect(selectElement).toHaveTextContent('Medium');
//   });
  
  it('disables the Add button when the input is empty or whitespace', () => {
    const onAddTaskMock = vi.fn();
    render(<InputProps onAddTask={onAddTaskMock} />);
    
    const inputField = screen.getByLabelText(/new task/i);
    const addButton = screen.getByRole('button', { name: /add/i });
    
    expect(inputField).toHaveValue('');
    expect(addButton).toBeDisabled();
    
    fireEvent.change(inputField, { target: { value: '   ' } });
    expect(addButton).toBeDisabled();
  });
});
