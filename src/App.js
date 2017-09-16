import React, { Component } from 'react';
import './App.css';
import Shelf from './Shelf';
import * as BooksAPI from './BooksAPI';
import BookSearch from './BookSearch';
import { Route, Link } from 'react-router-dom';
/*
@description Represents the main component.
It will initially display three shelves along with books in them.
It has a search button( a react-router Link component) that will take the user to search bar.
It maintains the state @books that is updated when the app is initially rendered
and also when any updates are made to shelves.
*/
class App extends Component {
  state={
    books:[]
  }


  /*
  @shelf {object} to hold and update the shelf property
  @book {object}  to hold the book
  @changeState func a function that will change the status of book shelf.
  It first takes the required book by using id property of the book and then update the shelf
  */
  changeState=(book,shelf)=>{
    if(book.shelf!= shelf){
      BooksAPI.update(book,shelf).then((response)=>{
        book.shelf=shelf;
        this.setState((state)=>({
          books: state.books.filter(b=> b.id !==book.id).concat(book)
        }))
      });
      alert("book moved to " + shelf);
    }
  }
//This will load all the books
  componentDidMount=()=> {
    BooksAPI.getAll().then((books)=>
    {
        this.setState({books});
    })
  }


  render() {
    return (
        <div className="App">
            <div>
              <Route exact path ="/" render={()=>(
                <div className="list-books-content">
                  <h1 className="main-title"> My Reads</h1>
                  <div className='shelf-styling'>
                    <Shelf name="Currently Reading" changeState={this.changeState}
                    books={this.state.books.filter((book)=>(book.shelf==="currentlyReading"))}/>

                    <Shelf name="Want To Read" changeState={this.changeState}
                    books={this.state.books.filter((book)=>(book.shelf==="wantToRead"))}/>

                    <Shelf name="Read" changeState={this.changeState}
                    books={this.state.books.filter((book)=>(book.shelf==="read"))}/>
                  </div>
                  <Link to ='/search' className="open-search" >Add Book</Link>
                </div>
              )}/>
              <div >
                  <Route exact path="/search" render={()=>(
                  <BookSearch changeState={this.changeState} books={this.state.books}/>
                  )}/>
              </div>
            </div>
        </div>
    );
  }
}

export default App;
