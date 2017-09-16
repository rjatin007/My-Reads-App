import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListBooks from './ListBooks' ;
import * as BooksAPI from './BooksAPI';
import escRegExp from 'escape-string-regexp'; 
/*
@description Represents component that is used to search books.
Results of the search are passed to the component @ListBooks.js for display.
It maintains the two states @query and @availableBooks
*/
class BookSearch extends Component{

    state={
        query : "" ,
        availableBooks : []
    }
    /*
    @updateShelf func  that will again call the @changeState func
    and pass the book and shelf param. It receives the parameters from
    the @handleChange  func which is present in ListBooks.js
    */
    updateShelf=(book,newShelf)=>{
        this.props.changeState(book,newShelf);
    }
    /*
    @query { string }
    @updateQuery { func } to update the query state
    @availableBooks {object} will receive the books from response that @BooksAPI.search() returns
    This param is then passed on to the @ListBooks.js component for displaying the search results
    */
    updateQuery=(val)=>{
        const value=val.trim();
        if(value){
            this.setState({
                query: value
            });
            
            BooksAPI.search(value,20).then((foundBooks) => {
                if((foundBooks.length>0)&&(!foundBooks.error)){
                    let books = foundBooks.map((foundBook) => {
                        const book=this.props.books.find((book) => book.id === foundBook.id)
                        foundBook.shelf = book? book.shelf :'none';
                        return foundBook;
                    });
                    console.log(books)
                    this.setState({
                        availableBooks: books
                    });
                }        
            }).catch(err=>{console.log(err)});
        }
        else{
            this.setState({
                query:"",
                availableBooks: []
            });
        }
    }
    clearQuery=(query)=>{
        this.setState({
            query:"",
            availableBooks: []
        });
    }

    render(){
        const { query, availableBooks  }=this.state;
        
        return(
            <div className="search-books">
                <div className='search-books-bar' >
                    <Link className='close-search' to="/">back</Link>
                    <input
                            value={query}
                            type="text"
                            onChange={(event)=> this.updateQuery(event.target.value)}
                    />
                    <div className="clear-search" onClick={this.clearQuery}></div>
                </div>
                <div className="search-books-results">
                    <ListBooks myBooks={availableBooks}
                    updateShelf={this.updateShelf}/>
                </div>
            </div>
        )
    }
}
export default BookSearch;
