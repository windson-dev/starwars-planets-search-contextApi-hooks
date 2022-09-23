import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockData from './mockdata';
import App from '../App';

describe('Teste do mecanismo de busca com numeros.', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(() => ({
      json: jest.fn().mockResolvedValue(mockData),
    }));
  });

  it('Testa se a pesquisa por numero funciona corretamente.', async () => {
    render(<App />);
  
      const column = screen.getByTestId('column-filter');
      expect(column).toBeInTheDocument();
      userEvent.selectOptions(column, 'rotation_period');

      const comparison = screen.getByTestId('comparison-filter');
      expect(comparison).toBeInTheDocument();
      userEvent.selectOptions(comparison, 'igual a');

      const value = screen.getByTestId('value-filter');
      expect(value).toBeInTheDocument();
      userEvent.type(value, '23');

      const button = screen.getByTestId('button-filter');
      expect(button).toBeInTheDocument();
      userEvent.click(button);

      const result = await screen.findByText(/Hoth/i);
      expect(result).toBeInTheDocument();
    });
});
