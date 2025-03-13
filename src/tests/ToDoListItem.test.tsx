import { render, screen, fireEvent } from '@testing-library/react';
import ToDoItem from '../ToDoListItem';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';

const sampleTask = {
  id: 1,
  text: 'Sample Task',
  completed: false,
  priority: 'Medium' as 'Low' | 'Medium' | 'High',
};

describe('ToDoItem Component', () => {
  it('renders task text and displays the priority chip', () => {
    render(
      <ToDoItem task={sampleTask} onToggle={vi.fn()} onDelete={vi.fn()} />
    );
    expect(screen.getByText(/sample task/i)).toBeInTheDocument();
    expect(screen.getByText(/Medium/i)).toBeInTheDocument();
  });

  it('calls onToggle when checkbox is clicked', () => {
    const onToggleMock = vi.fn();
    render(
      <ToDoItem task={sampleTask} onToggle={onToggleMock} onDelete={vi.fn()} />
    );
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onToggleMock).toHaveBeenCalledWith(sampleTask.id);
  });

  it('calls onDelete when delete button is clicked', () => {
    const onDeleteMock = vi.fn();
    render(
      <ToDoItem task={sampleTask} onToggle={vi.fn()} onDelete={onDeleteMock} />
    );
    const buttonElements = screen.getAllByRole('button');
    const deleteButton = buttonElements.find((btn) => btn.textContent === '');
    if (!deleteButton) {
      throw new Error('Delete button not found');
    }
    fireEvent.click(deleteButton);
    expect(onDeleteMock).toHaveBeenCalledWith(sampleTask.id);
  });

  it('applies line-through style when task is completed', () => {
    const completedTask = { ...sampleTask, completed: true };
    render(
      <ToDoItem task={completedTask} onToggle={vi.fn()} onDelete={vi.fn()} />
    );
    const taskText = screen.getByText(/sample task/i);
    expect(taskText).toHaveStyle('text-decoration: line-through');
  });
});
