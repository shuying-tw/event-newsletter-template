import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  let textarea;
  let preview;

  beforeEach(() => {
    const utils = render(<App/>)
    textarea = utils.getByTestId('textarea');
    preview = utils.getByTestId('preview');
  });

  it('renders textarea', () => {
    expect(textarea).toMatchSnapshot();
  })
  
  it('renders markdown preview', () => {
    expect(preview).toMatchSnapshot();
  })

  describe('when inputting h1', () => {
    beforeEach(() => {
      fireEvent.change(textarea, {target: {value: '# hello'}});
    });
  
    it('updates markdown preview with h1 tag', () => {
      expect(preview.querySelector('h1').innerHTML).toBe('hello');
    })
  })
});
