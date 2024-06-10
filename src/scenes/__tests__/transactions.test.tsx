import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import Transactions from '../transactions'; // Assuming the file is named Transactions.tsx
import { useGetTransactionsQuery } from 'state/api';
import '@testing-library/jest-dom';

// Mocking useGetTransactionsQuery hook
jest.mock('state/api', () => ({
  useGetTransactionsQuery: jest.fn(),
}));

describe('Transactions Component', () => {
  test('renders transactions component with loading state', async () => {
    // Mocking the data returned by useGetTransactionsQuery
    (useGetTransactionsQuery as jest.Mock).mockReturnValue({ data: undefined, isLoading: true });

    render(<Transactions />);

    // Assert that the loading message is rendered
    expect(screen.getByText('TRANSACTIONS')).toBeInTheDocument();
    expect(screen.getByText('Entire list of transactions')).toBeInTheDocument();

    // Wait for the loading indicator to be in the document
    await waitFor(() => {
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });
  });

  test('renders transactions when data is available', () => {
    // Mocking the data returned by useGetTransactionsQuery
    const mockTransactions = [
      { _id: '1', userId: 'user1', createdAt: '2022-06-01', products: [], cost: 100 },
      { _id: '2', userId: 'user2', createdAt: '2022-06-02', products: [], cost: 150 },
      // Add more mock data as needed
    ];
    (useGetTransactionsQuery as jest.Mock).mockReturnValue({ data: { transactions: mockTransactions, total: 2 }, isLoading: false });

    render(<Transactions />);

    // Assert that the header and subtitle are rendered
    expect(screen.getByText('TRANSACTIONS')).toBeInTheDocument();
    expect(screen.getByText('Entire list of transactions')).toBeInTheDocument();

    // Assert that transaction data is rendered
    expect(screen.getByText('user1')).toBeInTheDocument();
    expect(screen.getByText('2022-06-01')).toBeInTheDocument();
    // Add more assertions based on your transaction data
  });
});
