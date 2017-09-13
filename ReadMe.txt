@Decription
Use "npm install" and "npm start" to start.
The App's main page is broken down into three shelves namely "currently Reading",Want To Read, "Read".
The Component @Shelf.js is used thrice for the above three shelves.
Each shelf makes a request to the component @ListBooks.js to display the books.
User can change shelves of the books as required.

There is an @Add Book Button that is a react-router @Link component, which when clicked opens the search page.
The search page a component namely @BookSearch.js is provided with 2 components:-

1. Search Bar, containing:-

a.Back button (Link)
b.An input for search
c.Clear query button

2.A div to show results.

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