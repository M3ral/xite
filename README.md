# XITE Frontend challenge


For this challenge I used React with TypeScipt and Material-UI for the styling.

I started by working on the useFetch hook which takes care of the data fetching and preparation of the data that is going to be consumed by the component.

Genres are sorted alphabetically, and the years are ordered descending.

While the data is being fetched the user will see the Loading component.

For better performance only the first 20 videos are rendered, and the user can choose to see more by pressing the "Load more" button, which will render 20 more.

If the user uses any of the filters, all the available data will be shown rather than 20.

For better performance, only when the user stops typing on the search element, the filter will start filtering the data. This way the filter function only runs once.

The user can use all the filters at the same time. If there is a match, the data will be shown, if there is no match then the user will see the "No results" component.

If there is an error with the request the ErrorFallback component will be shown.

The app is responsive and uses the Material-UI built in brakepoints.

The app has unit tests which cover some of the usecases applied in the app.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
