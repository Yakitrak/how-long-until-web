import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Home from './Home.component';

describe('Home', () => {

    it('should render "What are you waiting for?"', () => {
        // Arrange
        render(<Home/>);
        // Assert
        expect(screen.getByText('What are you waiting for?')).toBeInTheDocument();
    })

    it('should render the date and occasion inputs', () => {
        // Arrange
        render(<Home/>);
        // Assert
        expect(screen.getByLabelText('What is the occasion?')).toBeInTheDocument();
        expect(screen.getByLabelText('When is it?')).toBeInTheDocument();
    })

    it('should render the copy and visit button', () => {
        // Arrange
        render(<Home/>);
        // Assert
        expect(screen.getByText('Copy Link')).toBeInTheDocument();
        expect(screen.getByText('Visit Link')).toBeInTheDocument();
    })

    it('buttons should be disabled when date is invalid', () => {
        // Arrange
        render(<Home/>);
        // Act
        fireEvent.change(screen.getByLabelText('When is it?'), {target: {value: 'invalid date'}})
        // Assert
        expect(screen.getByText('Copy Link')).toBeDisabled();
        expect(screen.getByText('Visit Link')).toBeDisabled();
    })

    it('should open snackbar when copy button is clicked', () => {
        // Arrange
        render(<Home/>);
        // Act
        fireEvent.click(screen.getByText('Copy Link'))
        // Assert
        expect(screen.getByText('Your link has been copied to clipboard.')).toBeInTheDocument();
    })

    it('should open a new tab with url when visit button is clicked', () => {
        const openSpy =  jest.spyOn(window, "open");
        // Arrange
        render(<Home/>);
        // Act
        fireEvent.click(screen.getByText('Visit Link'))
        // Assert
        expect(openSpy).toHaveBeenCalledWith(expect.anything(), '_blank');
    })

    it('should render the more info button', () => {
        // Arrange
        render(<Home/>);
        // Assert
        expect(screen.getByText('Click here for more info')).toBeInTheDocument();
    })

    it('should render the help modal when the more info button is clicked', () => {
       // Arrange
        render(<Home/>);
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        // Act
        fireEvent.click(screen.getByText('Click here for more info'))
        // Assert
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(screen.getByText('How it works?')).toBeInTheDocument();
    })




})