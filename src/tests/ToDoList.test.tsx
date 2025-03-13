import { render, screen, fireEvent } from '@testing-library/react';
import ToDoList from '../ToDoList';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';

describe('ToDoList Component', () => {
  it('displays "No tasks left to do!" when there are no tasks', () => {
    render(<ToDoList />);
    expect(screen.getByText(/no tasks left to do!/i)).toBeInTheDocument();
  });
  
  // it('adds a task with priority to the list', async () => {
  //   render(<ToDoList />);
    
  //   const inputField = screen.getByLabelText(/new task/i);
  //   const addButton = screen.getByRole('button', { name: /add/i });
  //   const selectElement = screen.getByTestId('priority-select');
    
  //   // Enter a new task.
  //   fireEvent.change(inputField, { target: { value: 'Task 1' } });
  //   // Open dropdown and select "High"
  //   await userEvent.click(selectElement);
  //   const highOption = await screen.findByText('High');
  //   await userEvent.click(highOption);
    
  //   fireEvent.click(addButton);
    
  //   // Check that the task appears with text "Task 1" and its priority chip shows "High"
  //   expect(screen.getByText(/task 1/i)).toBeInTheDocument();
  //   expect(screen.getByText(/high/i)).toBeInTheDocument();
  // });
  
  it('toggles task completion and filters tasks accordingly', () => {
    render(<ToDoList />);
    
    const inputField = screen.getByLabelText(/new task/i);
    const addButton = screen.getByRole('button', { name: /add/i });
    const toggleFilterButton = screen.getByRole('button', { name: /show completed tasks/i });
    
    // Add a task.
    fireEvent.change(inputField, { target: { value: 'Complete Task' } });
    fireEvent.click(addButton);
    expect(screen.getByText(/complete task/i)).toBeInTheDocument();
    
    // Mark the task as complete by clicking its checkbox.
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    // By default, incomplete tasks are shown so the completed task should be hidden.
    expect(screen.queryByText(/complete task/i)).not.toBeInTheDocument();
    
    // Click the toggle filter to show completed tasks.
    fireEvent.click(toggleFilterButton);
    expect(screen.getByText(/complete task/i)).toBeInTheDocument();
  });
  
  it('deletes a task from the list', () => {
    render(<ToDoList />);
    
    const inputField = screen.getByLabelText(/new task/i);
    const addButton = screen.getByRole('button', { name: /add/i });
    
    // Add a task.
    fireEvent.change(inputField, { target: { value: 'Task to delete' } });
    fireEvent.click(addButton);
    expect(screen.getByText(/task to delete/i)).toBeInTheDocument();
    
    // Find the delete button (IconButton containing an SVG) and click it.
    const buttons = screen.getAllByRole('button');
    const deleteButton = buttons.find(btn => btn.innerHTML.includes('svg'));
    if (!deleteButton) throw new Error('Delete button not found');
    fireEvent.click(deleteButton);
    
    expect(screen.queryByText(/task to delete/i)).not.toBeInTheDocument();
  });
});
