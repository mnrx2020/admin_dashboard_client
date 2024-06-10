import React from 'react';
import { render } from '@testing-library/react';
import StatBox from '../StatBox';
import '@testing-library/jest-dom';


test('renders StatBox component with correct props', () => {
  const props = {
    title: 'Title',
    value: '100',
    increase: '+10%',
    icon: <div>Icon</div>,
    description: 'Description'
  };

  const { getByText } = render(<StatBox {...props} />);

  expect(getByText(props.title)).toBeInTheDocument();
  expect(getByText(props.value)).toBeInTheDocument();
  expect(getByText(props.increase)).toBeInTheDocument();
  expect(getByText(props.description)).toBeInTheDocument();
});
