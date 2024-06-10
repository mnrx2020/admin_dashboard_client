// jest.setup.js
jest.mock('d3-interpolate', () => ({
    interpolate: jest.fn()
  }));
  
  jest.mock('@nivo/line', () => ({
    ResponsiveLine: () => <div />,
  }));
  
  jest.mock('@nivo/pie', () => ({
    ResponsivePie: () => <div />,
  }));
  