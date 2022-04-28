/**
 * @jest-environment jsdom
 */

import { getByText, render } from '@testing-library/react'
import { UploadButton } from '../Button'

describe('<UploadButton />', () => {
  it('should display an upload button', () => {
    const { baseElement } = render(<UploadButton uploadToken='foo'>Upload Button</UploadButton>)
    expect(baseElement).toBeTruthy()
  })

  it('should have "Upload Button" for children', () => {
    const { container } = render(<UploadButton uploadToken='foo'>Upload Button</UploadButton>)
    expect(getByText(container, 'Upload Button')).toBeTruthy()
  })

  it('should have a hidden input', () => {
    const { baseElement } = render(<UploadButton uploadToken='foo'>Upload Button</UploadButton>)
    const input = baseElement.querySelector('input')
    expect(input).toBeTruthy()
    expect(input).toHaveProperty('hidden')
  })
})
