import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Until from './Until.component'

describe('Until', () => {
  it('when the page loads, it should redirect to the home page if no datetime is provided', () => {
    // Arrange
    const mockLocation = {
      search: ''
    }
    Object.defineProperty(window, 'location', {
      value: mockLocation,
      writable: true
    })
    // Act
    render(<Until/>)
    // Assert
    expect(window.location.href).toBe('/')
  })

  it('when the page loads, it should redirect to the home page if an invalid datetime is provided', () => {
    // Arrange
    const mockLocation = {
      search: '?datetime=invalid'
    }
    Object.defineProperty(window, 'location', {
      value: mockLocation,
      writable: true
    })
    // Act
    render(<Until/>)
    // Assert
    expect(window.location.href).toBe('/')
  })

  describe('when the page loads with a valid past datetime', () => {
    it('should display time is here', function () {
      // Arrange
      const mockLocation = {
        search: '?datetime=2000-10-10T10:10:10.000Z'
      }
      Object.defineProperty(window, 'location', {
        value: mockLocation,
        writable: true
      })
      // Act
      render(<Until/>)
      // Assert
      expect(screen.getByTestId('countdown-over')).toBeInTheDocument()
    })
  })
  describe('when the page loads with a valid future datetime', () => {
    it('should display the countdown', () => {
      // Arrange
      const mockLocation = {
        search: '?datetime=2035-10-10T10:10:10.000Z'
      }
      Object.defineProperty(window, 'location', {
        value: mockLocation,
        writable: true
      })
      // Act
      render(<Until/>)
      // Assert
      expect(screen.getByTestId('countdown-progress')).toBeInTheDocument()
    })

    describe('when the occasion is provided', () => {
      it('should display the occasion', () => {
        // Arrange
        const mockLocation = {
          search: '?datetime=2035-10-10T10:10:10.000Z&occasion=My%20Birthday'
        }
        Object.defineProperty(window, 'location', {
          value: mockLocation,
          writable: true
        })
        // Act
        render(<Until/>)
        // Assert
        expect(screen.getByText('My Birthday')).toBeInTheDocument()
      })
    })

    describe('when the occasion is not provided', () => {
      it('should display the datetime', () => {
        // Arrange
        const mockLocation = {
          search: '?datetime=2035-10-10T10:10:10.000Z'
        }
        Object.defineProperty(window, 'location', {
          value: mockLocation,
          writable: true
        })
        // Act
        render(<Until/>)
        // Assert
        expect(screen.getByText('LLL')).toBeInTheDocument()
      })
    })
  })

  describe('when the "Create Countdown" button is clicked', () => {
    it('should open home page in another tab', () => {
      // Arrange
      const openSpy = jest.spyOn(window, 'open')
      const mockLocation = {
        search: '?datetime=2035-10-10T10:10:10.000Z'
      }
      Object.defineProperty(window, 'location', {
        value: mockLocation,
        writable: true
      })
      // Act
      render(<Until/>)
      fireEvent.click(screen.getByText('Create Countdown'))
      // Assert
      expect(openSpy).toHaveBeenCalledWith(expect.anything(), '_blank')
    })
  })
})
