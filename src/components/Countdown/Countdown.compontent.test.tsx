import React from 'react'
import { render, screen } from '@testing-library/react'
import CountdownTimer from './Countdown.component'

describe('Countdown', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern')
    jest.setSystemTime(new Date('2021-10-01T00:00:00.000Z'))
  })
  describe('when the target date is in the future', () => {
    describe('should display the time left until the target date', () => {
      it('when there are more than 1 year left', () => {
        // Arrange
        const targetDate = new Date('2025-12-25T00:00:00.000Z')
        // Act
        render(<CountdownTimer targetDate={targetDate}/>)
        // Assert
        expect(screen.getByText('There are')).toBeInTheDocument()
        expect(screen.getByText('4')).toBeInTheDocument()
        expect(screen.getByText('years')).toBeInTheDocument()
        expect(screen.getByText('3')).toBeInTheDocument()
        expect(screen.getByText('months')).toBeInTheDocument()
        expect(screen.getByText('16')).toBeInTheDocument()
        expect(screen.getByText('days')).toBeInTheDocument()
      })
      it('when there is 1 year left', () => {
        // Arrange
        const targetDate = new Date('2022-11-28T00:00:00.000Z')
        // Act
        render(<CountdownTimer targetDate={targetDate}/>)
        // Assert
        expect(screen.getByText('There is')).toBeInTheDocument()
        expect(screen.getByText('1')).toBeInTheDocument()
        expect(screen.getByText('year')).toBeInTheDocument()
        expect(screen.getByText('2')).toBeInTheDocument()
        expect(screen.getByText('months')).toBeInTheDocument()
        expect(screen.getByText('3')).toBeInTheDocument()
        expect(screen.getByText('days')).toBeInTheDocument()
      })
    })
  })
  describe('when the target date is in the past', () => {
    it('should display nothing', () => {
      // Act
      render(<CountdownTimer targetDate={new Date('2000-01-01T00:00:00.000Z')}/>)
      // Assert
      expect(screen.queryByText('until')).not.toBeInTheDocument()
    })
  })
})
