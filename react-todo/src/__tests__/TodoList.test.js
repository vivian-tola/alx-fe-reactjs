// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

// eslint-disable-next-line no-undef
describe('TodoList', () => {
  // eslint-disable-next-line no-undef
  test('renders correctly and displays demo todos', () => {
    render(<TodoList />);
    // Check that the todo list renders
    // eslint-disable-next-line no-undef
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    // eslint-disable-next-line no-undef
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    // eslint-disable-next-line no-undef
    expect(screen.getByText('Learn Testing')).toBeInTheDocument();
    // eslint-disable-next-line no-undef
    expect(screen.getByText('Build Todo App')).toBeInTheDocument();
  });

  // eslint-disable-next-line no-undef
  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    // eslint-disable-next-line no-undef
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  // eslint-disable-next-line no-undef
  test('toggles the completion of a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');

    fireEvent.click(todo);

    // eslint-disable-next-line no-undef
    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  // eslint-disable-next-line no-undef
  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('×')[0];

    fireEvent.click(deleteButton);

    // eslint-disable-next-line no-undef
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
