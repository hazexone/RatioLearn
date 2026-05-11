// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RatioLearn title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RatioLearn/i);
    expect(titleElement).toBeInTheDocument();
});
