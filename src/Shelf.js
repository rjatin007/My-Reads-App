import React, { Component } from 'react';
import ListBooks from './ListBooks';
/*
@description Represents a shelf which will contain books
It will be rendered thrice by the @App.js component as
"Currently Reading" ,"Want To Read" and "Read" shelves
*/
class Shelf extends Component{
/*
@updateShelf func  that will again call the @changeState func
and pass the book and shelf param. It receives the parameters from
the @handleChange  func which is present in ListBooks.js
*/
   updateShelf=(book,newShelf)=>{
    this.props.changeState(book,newShelf);
    }


    render(){
        const myBooks=this.props.books;
        return (
            <div className="shelf">
                <h1 className="bookshelf-title"> {this.props.name} </h1>
                <ListBooks myBooks={myBooks} updateShelf={this.updateShelf}/>
            </div>
        )
    }
}
export default Shelf;