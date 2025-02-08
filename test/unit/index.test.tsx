/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../../pages'
import { getStaticProps } from '../../pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home dataFoo='This is a Foo' />)

    const heading = screen.getByTestId('title');

    expect(heading).toBeInTheDocument();
  })

  it('renders a paragraph', () => {
  render(<Home dataFoo='This is a Foo' />)

  const paragraph = screen.getByTestId('api-return');

  expect(paragraph).toBeInTheDocument();
  })

  it('checks if the request is working', async () => {
    render(<Home dataFoo='This is a Foo' />)

    const request = await getStaticProps();

    expect(request.props.dataFoo).toBe('This is a Foo')
  })
})





