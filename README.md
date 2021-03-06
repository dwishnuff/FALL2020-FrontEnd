# PSU CS Diversity App
This dashboard was created as a student project for 
CS 510-Front End Web Tech at PSU in the Fall of 2020.

This dashboard displays demographic data about PSU 
undergraduate Computer Science students in regards to 
retention/persistence and graduation class makeup.  

Data was acquired from the PSU Office of Institutional 
Research and Planning (OIRP) as a part of an ongoing 
independent study project.   

## Student Team Members
Danielle Beyer\
Evan Johnson

## npm installs required
npm install react-grid-layout\
npm install react\
npm install react-dom\
npm install web-vitals\
npm install react-scripts\
npm install react-charts\
npm install gh-pages --save-dev\
npm install react--chartjs-2 chart.js\

## Tutorials and examples referenced

### `async` and React
We followed the tutorial at 
[https://www.robinwieruch.de/react-fetching-data](https://www.robinwieruch.de/react-fetching-data)
to get past errors encountered while using `fetch` to get remote
data for use in our charts.

### react-chartjs-2
We used the [examples](https://reactchartjs.github.io/react-chartjs-2/#/) linked from the official repo for
reference when building our charts.

## gh-pages deploy
The site is deployed on GitHub pages at:\
[https://dwishnuff.github.io/FALL2020-FrontEnd/](https://dwishnuff.github.io/FALL2020-FrontEnd/)

### `npm run deploy` 
to redeploy with updates, run 'npm run deploy' locally to build and push to gh-pages\

The tutorial below was used to implement the gh-pages deploy.\
https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f

## color themes
#006d8c -- rgb(0, 109, 140) --blue\
#f999000 -- rgb(249, 153, 0) --orange (male)\
#f27775 -- rgb(242, 119, 117) --pink\
#252d48 -- rgb(37, 45, 72) --navy\
#fc461a -- rgb(252, 70, 26) -- red (female)\
#C0C0C0 -- rgb(192,192,192) -- silver (legal sex unknown)

# About this React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
That includes the following scripts and instructions:

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