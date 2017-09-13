This is the starter template for the final assessment project for Udacity's React Fundamentals course, developed by [React Training](https://reacttraining.com). The goal of this template is to save you time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. If you choose to start with this template, your job will be to add interactivity to the app by refactoring the static code in this template.

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

## What You're Getting
```
+--public/
 |-- index.html - DO NOT MODIFY
 |-- favicon.ico - React Icon, You may change if you wish.
+-- src/
 +-- icons/ - Helpful images for your app. Use at your discretion.
  |-- add.svg
  |-- arrow-back.svg
  |-- arrow-drop-down.svg
 |-- App.js - This is the root of your app. Contains static HTML right now.
 |-- App.css - Styles for your app. Feel free to customize this as you desire.
 |-- App.test.js - Used for testing. Provided with Create React App.
 Testing is encouraged, but not required.
 |-- BooksAPI.js - A JavaScript API for the provided Udacity backend.
 Instructions for the methods are below.
 |-- index.js - You should not need to modify this file. It is used for DOM rendering only.
 |-- index.css - Global styles. You probably won't need to change anything here.
|-- .gitignore
|-- CONTRIBUTING.MD - Information about contributing to this repo.
TL;DR - Fork and clone your own version of this to use it.
|-- README.MD - This README file.
|-- SEARCH_TERMS.md - The whitelisted short collection of available search terms
for you to use with your app.
|-- package.json - npm package manager file. It's unlikely that you'll need to modify this.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing
@Decription
Use "npm install" and "npm start" to start.
The App's main page is broken down into three shelves namely "currently Reading",Want To Read, "Read".
The Component @Shelf.js is used thrice for the above three shelves.
Each shelf makes a request to the component @ListBooks.js to display the books.
User can change shelves of the books as required.

There is an @Add Book Button that is a react-router @Link component, which when clicked opens the search page.
The search page a component namely @BookSearch.js is provided with 2 components:-

1. Search Bar, containing:-

a. Back button (Link)
b. An input for search
c. Clear query button

2. A div to show results.

As soon as the  user enters query the search results are obtained from the @BookSearch.js component,
are passed to @ListBooks.js for diplaying the books. Because that is what react is using components as many times as possible.
The books will appear in same appearence as they do on main page.
And will have a button to change shelf.
Once shelf is changed the user is notified by an alert.

Project has following:

1.The application was created with create-react-app and
requires only npm install and npm start to get it installed and launched.

2.A README is included with the project. The README includes clear instructions for installing
and launching the project.

/Main Page/
3.The main page shows 3 shelves for books.

4.The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance.

5.When the browser is refreshed, the same information is displayed on the page.

/Search Page/
6.The search page has a search input field. As the user types into the search field, books that match the query are displayed on the page.

7.Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.

8.When an item is categorized on the search page, and the user navigates to the main page, it appears on that shelf in the main page.

/Routing/
9.The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.

10.The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.

/Code Functionality/
11.Component state is passed down from parent components to child components.
 The state variable is not modified directly - setState() function is used correctly.

12.Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.

13.All JSX code is formatted properly and functional.


This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
