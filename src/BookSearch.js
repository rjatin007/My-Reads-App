import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListBooks from './ListBooks' ;
import * as BooksAPI from './BooksAPI';
/*
@description Represents component that is used to search books.
Results of the search are passed to the component @ListBooks.js for display.
It maintains the two states @query and @availableBooks
*/
class BookSearch extends Component{

    state={
        query : "" ,
        availableBooks : this.props.books
    }
    /*
    @updateShelf func  that will again call the @changeState func
    and pass the book and shelf param. It receives the parameters from
    the @handleChange  func which is present in ListBooks.js
    */
    updateShelf=(book,newShelf)=>{
        this.props.changeState(book,newShelf);
        alert("book moved to " + newShelf);
    }
    /*
    @query { string }
    @updateQuery { func } to update the query state
    @availableBooks {object} will receive the books from response that @BooksAPI.search() returns
    This param is then passed on to the @ListBooks.js component for displaying the search results
    */
    updateQuery=(query)=>{
        if(query){
            this.setState({
                query: query.trim()
            })
            BooksAPI.search(query,20).then((response)=>
            {
                if((!response.error)){
                    this.setState({availableBooks :response});
                }
                else{
                    this.setState({
                        availableBooks : [],
                        query:""
                    })
                    alert("no such book available")
                }
            }).catch(
                (response)=>
                    {
                    alert("No such book available")
                    }
                )
        }
        else{
            this.setState({
                query:"",
                availableBooks : []
            })
        }
    }
// To clear the user query
    clearQuery=()=>{
        this.setState({
            query : "",
            availableBooks : []
        })
    }

    render(){
        const { query, availableBooks }=this.state;
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