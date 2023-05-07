# How Long Until Web App

## Description

This web app lets you easily create URLs with a date/time and an optional occasion which will direct to a countdown
timer. It's simple, operates without a backend, and is aesthetically beautiful - perfect for sharing and bookmarking. While there
are similar websites, they seemed to be overly complicated to create, looked visually crowded, or not mobile friendly, so I decided to make my own. 

## Development

### Getting Started

This is built using `create-react-app` and `typescript` so to run locally, simply run:

```zsh
npm start
```

### Routes

#### Home
`/` - The home page:
![Home Page](./docs/home.png)
![Home Page](./docs/help.png)
Contains a form to create a new countdown timer. There is a help button which will display a modal with instructions on how to use the app.

#### Until 
`/until?date={date}&occasion={occasion}` - The countdown timer page:

![Countdown Timer](./docs/until.png)
This page will display a countdown timer until the specified date and time. The date and time are required query parameters. The occasion is optional, and will be displayed below the countdown timer (if provided).


## Tests

The repository is set up with `jest` and `react-testing-library` so to run tests, simply run:

```zsh
npm test
```

or for live reloading

```zsh
npm run test:watch
```