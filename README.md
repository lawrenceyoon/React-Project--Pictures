This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
API Used: Unsplash https://unsplash.com/developers

### `View App`

https://react-project-pictures.now.sh/

### `App Steps`
1) Set up boilerplate, removed all previous files in src directory and created own file structure. Imported Semantic-UI CDN into index for CSS. All other apps while learning was made using Class Components, so for this project I decided to go with Functional Component w/ Hooks.
2) Created SearchBar component and styled it using CSS. Added onChange event handler, and set SearchBar to a "controlled" component by moving user input into state. Put an onSubmit event handler to prevent form from submitting.
3) SearchBar's primary role is just to show the form and get user input, not connect to an API. It makes sense to put our App component in charge of getting API data - passed user's search term from SearchBar (child) to App (parent) by making a callback function on App.
4) Installed axios. Used it to access Unsplash API and updated our App's state with information received. Set some axios data into a separate file called Unsplash.js, so our App onFormSubmit is easier to read and understand what's happening. Also, no need to import axios (only in unsplash.js), instead we import unsplash.js.
5) Created ImageList.js.