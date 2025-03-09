// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensure jest-dom matchers are available
import TodoList from '../components/TodoList';

describe('TodoList', () => {
  test('renders correctly and displays demo todos', () => {
    render(<TodoList />);
    // Check that the todo list renders
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Learn Testing')).toBeInTheDocument();
    expect(screen.getByText('Build Todo App')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles the completion of a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');

    fireEvent.click(todo);

    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('×')[0];

    fireEvent.click(deleteButton);

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
