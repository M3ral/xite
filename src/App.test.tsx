import React from 'react';
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react';
import App from './App';

test('Renders the explore page after the loading', async () => {
  render(<App/>);

  await waitForElementToBeRemoved(() => screen.getByTitle(/loading spinner/i))

  expect(screen.getByTitle(/explore container/i)).toBeVisible()
});
