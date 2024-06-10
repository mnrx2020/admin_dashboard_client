import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from '../Sidebar';
import { render, fireEvent, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Sidebar', () => {
  it('navigates when a navigation item is clicked', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Sidebar user={{ name: 'John Doe', occupation: 'Software Developer' }} isSidebarOpen setIsSidebarOpen={jest.fn()} drawerWidth={240} isNonMobile={true} />
      </MemoryRouter>
    );

    fireEvent.click(getByText('Dashboard'));
    // Add assertion for navigation if necessary

    fireEvent.click(getByText('Products'));
    // Add assertion for navigation if necessary
  });

  it('renders with correct user info', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Sidebar user={{ name: 'John Doe', occupation: 'Software Developer' }} isSidebarOpen setIsSidebarOpen={jest.fn()} drawerWidth={240} isNonMobile={true} />
      </MemoryRouter>
    );

    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('Software Developer')).toBeInTheDocument();
  });
});
