import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import '@testing-library/jest-dom';


test('renders Header component with correct title and subtitle', () => {
  // Define theme
  const theme = createTheme();

  // Mock props
  const title = 'Test Title';
  const subtitle = 'Test Subtitle';

  // Render Header component with mocked props and theme
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Header title={title} subtitle={subtitle} />
    </ThemeProvider>
  );

  // Ensure title and subtitle are rendered correctly
  const titleElement = getByText(title);
  const subtitleElement = getByText(subtitle);

  expect(titleElement).toBeInTheDocument();
  expect(subtitleElement).toBeInTheDocument();
});
