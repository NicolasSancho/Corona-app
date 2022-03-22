## About this project:

# This was the following dev task:

Short description: Small data visualization SPA for COVID-19 dataset.

# Requirements
React.js must be used. Other than that any framework or library can be used to implement the task. This includes UI frameworks, like material-ui, charting libraries like reaviz.

The completed task should be available on a GitHub repository or sent as a zip file.

The app should implement the below mockup.

Data source for the app is a local JSON file obtained from the https://github.com/owid/covid-19-data/tree/master/public/data repository.

The country select should list all of the available countries of the above data source. The select should be searchable. If no country selected, than the below charts should show global statistics (that is available from the above data source)

Below that should be 2 tabs titled “Reported cases” and “Ranked charts”

The first tab (“Reported cases”) should render a line chart. The controls for the line chart should be in the section labeled “chart controls”. In the chart control we should have these options available:

Switch between death count or confirmed cases

Switch between daily new values or cumulative mode

The second tab (“Ranked charts”) should render a bar chart. The controls for the bar chart should be in the section labeled “chart controls”. The chart should render the top X number of countries for the selected settings. If there is a country selected in the top country selector, that country should be highlighted in the bar chart. In the chart control we should have these options available:

Switch between total number of deaths and total number of cases.

Dropdown to select how many countries should be listed in the bar chart. Default should be 10.
The app should also implement a dark mode switch. This can be toggled by the user via an icon placed in the top-right corner of the viewport. This should change between a light and dark themed color palette. (The colors don’t need to comply with WCAG color contrast requirements for the purposes of this task)

In all cases the charts should display the full range of available data.
Style of the app is left to the implementer.
Responsiveness should be taken into account. The app should be usable on mobile devices.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
