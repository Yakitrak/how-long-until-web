import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import HelpModal from './HelpModal.component'

describe('HelpModal', () => {
  it('should display the modal when open is passed', () => {
    // Arrange
    render(<HelpModal open={true} handleClose={() => null}/>)
    // Act
    const modal = screen.getByTestId('help-modal')
    // Assert
    expect(modal).toBeInTheDocument()
  })

  it('should not display the modal when open is not passed', () => {
    // Arrange
    render(<HelpModal open={false} handleClose={() => null}/>)
    // Act
    const modal = screen.queryByTestId('help-modal')
    // Assert
    expect(modal).not.toBeInTheDocument()
  })

  it('should call handleClose when the close button is clicked', () => {
    // Arrange
    const handleClose = jest.fn()
    render(<HelpModal open={true} handleClose={handleClose}/>)
    // Act
    const closeButton = screen.getByLabelText('close')
    fireEvent.click(closeButton)
    // Assert
    expect(handleClose).toHaveBeenCalled()
  })

  it('should call handleClose when the create button is clicked', () => {
    // Arrange
    const handleClose = jest.fn()
    render(<HelpModal open={true} handleClose={handleClose}/>)
    // Act
    const createButton = screen.getByText('Create Now')
    fireEvent.click(createButton)
    // Assert
    expect(handleClose).toHaveBeenCalled()
  })

  it('should display the about info', () => {
    // Arrange
    render(<HelpModal open={true} handleClose={() => null}/>)
    // Act
    const aboutInfo = screen.getByText('How it works?')
    // Assert
    expect(aboutInfo).toBeInTheDocument()
  })
})
