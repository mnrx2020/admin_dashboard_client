import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Performance from '../performance'; // Adjust the path as necessary
import { useGetUserPerformanceQuery } from 'state/api';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

// Mocking the useGetUserPerformanceQuery hook
jest.mock('state/api', () => ({
  useGetUserPerformanceQuery: jest.fn(),
}));

const mockStore = configureMockStore();
const store = mockStore({
  global: {
    userId: 'user1', // Mock user ID
  },
});

const renderWithProvider = (ui) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

describe('Performance Component', () => {
  test('renders Performance component with loading state', () => {
    // Mocking the data and isLoading returned by useGetUserPerformanceQuery
    (useGetUserPerformanceQuery as jest.Mock).mockReturnValue({ data: undefined, isLoading: true });

    const { getByText, queryByText } = renderWithProvider(<Performance />);

    expect(getByText('Loading...')).toBeInTheDocument();
    // Remove the expectation for the subtitle text since it's not rendered in the loading state
    expect(queryByText('Track your Affiliate Sales Performance Here')).toBeNull();
  });

  test('renders Performance component with data', () => {
    // Mocking the data returned by useGetUserPerformanceQuery when it's not loading
    (useGetUserPerformanceQuery as jest.Mock).mockReturnValue({
      data: {
        sales: [
          { _id: '1', userId: 'user1', createdAt: '2024-06-11', products: { length: 2 }, cost: 100 },
          // Add more mock data as needed
        ],
      },
      isLoading: false,
    });

    const { getByText } = renderWithProvider(<Performance />);

    expect(getByText('PERFORMANCE')).toBeInTheDocument();
    expect(getByText('Track your Affiliate Sales Performance Here')).toBeInTheDocument();
    expect(getByText('ID')).toBeInTheDocument();
    expect(getByText('User ID')).toBeInTheDocument();
    // Add more assertions based on your data
  });
});
