import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Add this import for jest-dom matchers
import Products from '../products'; // Assuming the file is named Products.tsx

// Importing the useGetProductsQuery function from state/api
import { useGetProductsQuery } from 'state/api';

// Define the prop types for the Product component
interface ProductProps {
  _id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  supply: number;
  stat: {
    yearlySalesTotal: number;
    yearlyTotalSoldUnits: number;
  };
}

// Mocking the useGetProductsQuery hook
jest.mock('state/api', () => ({
  useGetProductsQuery: jest.fn(),
}));

describe('Products Component', () => {
  test('renders loading state', () => {
    // Mocking the data returned by useGetProductsQuery
    (useGetProductsQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
    });

    const { getByText } = render(<Products />);

    // Assert that the loading message is rendered
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  test('renders products when data is available', () => {
    // Mocking the data returned by useGetProductsQuery
    const mockProducts: ProductProps[] = [
      {
        _id: '1',
        name: 'Product 1',
        description: 'Description 1',
        price: 10,
        rating: 4,
        category: 'Category 1',
        supply: 100,
        stat: {
          yearlySalesTotal: 1000,
          yearlyTotalSoldUnits: 200,
        },
      },
      // Add more mock product data as needed
    ];

    (useGetProductsQuery as jest.Mock).mockReturnValue({
      data: mockProducts,
      isLoading: false,
    });

    const { getByText } = render(<Products />);

    // Assert that the product information is rendered
    expect(getByText('Product 1')).toBeInTheDocument();
    // Add more assertions based on your product data
  });
});
