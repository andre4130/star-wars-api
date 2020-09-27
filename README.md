# Star Wars API app
This application was created with React Native and Styled with Bootstrap. It fetches from the Star Wars API https://swapi.dev 

## Instructions for Installing the Application

1. Clone this repository
2. Install npm and node (if not yet installed)
3. Open a Terminal in the project root and execute `npm install`
4. Execute `npm start` to start the application 


## Login Screen

![Login Screen](/src/assets/images/readme/login.jpg)

This is a fake login without access to backend. There is a form validation and the user must add a username and a password. The application will only validate the form and won't validate if the data is correct.

## Register Screen

![Register Screen](/src/assets/images/readme/register.jpg)

This is also a fake registration without access to backend. There is a form validation and the user must add a username, a valid email and a password with character restrictions. Once the user adds the data to the form, a popup will be shown to confirm the data has been sent. No data is registered in this application.

## Main Page

![MainPage Screen](/src/assets/images/readme/mainpage.jpg)

There is a bug to be fixed. Once the login is "successful", the application is redirected to the MainPage URL. In this mainpage, the list of spaceships should be loaded immediately, but it isn't. The user must click on the navbar Spaceships to load the list of the spacecrafts from the API.

## Spaceships

![Spaceships Screen](/src/assets/images/readme/spaceships.jpg)

Just like in the API, 10 is the maximum number of spaceships that are loaded in each screen. If the user wants to check the rest of the spaceships, should press Next Page. To go back, Previous Page. The number indicates the page where the user is at the moment.

## Characters

![Characters Screen](/src/assets/images/readme/characters.jpg)

Just like in the spaceships url, 10 is the maximum number of spaceships that are loaded in each screen. There is a different browsing of the pages in this page. Between Previous Page and Next Page buttons, the user can browse through the complete list of pages. There is also implemented a See Details button, where the user can acess directly to the individual page of the character.

## Single Character Information 

![Single Character Screen](/src/assets/images/readme/character.jpg)

This screen is not yet completed. All the complete information about each character will be displayed in this screen. The request to the API is not yet working, so that the view is temporary.

### May the Force be with you
