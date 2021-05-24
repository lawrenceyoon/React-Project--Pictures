This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
API Used: Unsplash https://unsplash.com/developers

### `View App`

https://react-project-pictures.now.sh/

### `Gratitude`

Finished first React project. Proud of m'self :\_)

### `How It Works`

Type in any images you want searched into the search bar! Or make a quick selection from one of the three boxes below!
<br />
![On App Load Image](/public/imgs/default.png?raw=true 'On Default Load')
<br />
<br />
It will then connect to the Unsplash API and get 10 images to show on the screen.
<br />
![List Images of Sunset](/public/imgs/list-images.png?raw=true 'List of Sunset Images')

### `App Structure`

App (Topmost) => SearchBar, ImageList, NatureCard, SunsetCard, BeachCard

### `App Steps`

1. Set up boilerplate, removed all previous files in src directory and created own file structure. Imported Semantic-UI CDN into index for CSS. All other apps while learning was made using Class Components, so for this project I decided to go with Functional Component w/ Hooks.
2. Created SearchBar component and styled it using CSS. Added onChange event handler, and set SearchBar to a "controlled" component by moving user input into state. Put an onSubmit event handler to prevent form from submitting.
3. SearchBar's primary role is just to show the form and get user input, not connect to an API. It makes sense to put our App component in charge of getting API data - passed user's search term from SearchBar (child) to App (parent) by making a callback function on App.
4. Installed axios. Used it to access Unsplash API and updated our App's state with information received. Set some axios data into a separate file called Unsplash.js, so our App onFormSubmit is easier to read and understand what's happening. Also, no need to import axios (only in unsplash.js), instead we import unsplash.js.
5. Created ImageList.js. Passed the list of images returned from API upon user input to ImageList as a prop called listOfImages. ImageList component is responsible for mapping over each (image). We assigned it to a variable called images, then referenced it in our JSX. Now upon user input, shows the regular version of images!
6. Changed ImageList to now map over each ImageCard Component, and styled ImageList to make all images fit nicely.
7. Created three separate Card Components (Nature, Sunset and Beach), with an onClick event handler on each. <em>I made them into separate components by passing onDivClick to each respective child component, to not clutter up App component. Then I set state equal to the name of each Component Card (NatureCard = "nature"), and this gets passed back to the App component through the callback function, which ultimately passes the data into onFormSubmit.</em> This updates the searchTerm, and renders the clicked card images onto the screen!
8. Finally, styled my little individual cards beautifully.
