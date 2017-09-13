import React, { Component } from 'react';
/*
@description Represents a component that will display the books in the shelf,
when rendered by @Shelf.js component and also will display the results of the search bar.
The @BookSearch.js component will pass on (as props) the books available after the search has been made.
@ListBooks.js wil thendisplay the results.
*/
class ListBooks extends Component{
    /*
    @event = onChange
    @myBook {object} book currently in context
    @handleChange { func } will take two arguments and will pass it on to updateShelf
    for updating the shelf
    */
    handleChange=(myBook,event)=>{
        const Book=myBook;
        const shelf = event.target.value;
        if((shelf==="currentlyReading")||(shelf==="wantToRead")||(shelf==="read")||(shelf==="none"))
        { this.props.updateShelf(Book,shelf); }

    }

    render(){
        var {myBooks}=this.props;
        return(
            <div>
                <div className="shelf-books">
                    <ol className="books-grid">
                        {
                            myBooks.map((myBook)=>

                                <li key ={myBook.id}>
                                    <div className= "book" >
                                        <div className="book-top">
                                            <div className="book-cover" style={{backgroundImage : `url(${myBook.imageLinks.thumbnail})`,height: 200 , width:130  }}></div>
                                                <div className="book-shelf-changer">
                                                    <select defaultValue={myBook.shelf}
                                                        onChange={(event)=>this.handleChange(myBook,event)} >
                                                            <option>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                    </select>
                                                </div>
                                        </div>
                                        <div className="book-details">
                                            <p className="book-title"><strong>{myBook.title}</strong></p>
                                            <p className="book-author">{myBook.authors}</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                    </ol>
                </div>
            </div>
        )
    }
}
export default ListBooks;