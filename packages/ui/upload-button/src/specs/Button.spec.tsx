/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react'
import { UploadButton } from '../Button'

describe('<UploadButton />', () => {
  it('should display an upload button', () => {
    const { baseElement } = render(<UploadButton uploadToken='foo'>Upload Button</UploadButton>)
    expect(baseElement).toBeTruthy()
  })
})
