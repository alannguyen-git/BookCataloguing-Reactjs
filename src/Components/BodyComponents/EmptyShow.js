import React, { Component } from 'react'
import { connect } from 'react-redux'
import picture from './isbn.png'
import picture2 from './where-to-find.jpg'
import picture3 from './why-use-isbn.jpg'

class EmptyShow extends Component {
    //This class-component does not need a constructor because it has no function to be called. This is just simply
    //a class-component that display information to the screen. It also has no state, but it does gain access to the
    //store because before we export it. I have supercharged it to make it a HIGHER ORDER COMPONENT.
    render() {
        //Some simple styling for the page
       let cardStyle = {
           marginTop : 35,
           height : 290
       }

       let cardImgStyle = {
           height : 210,
           width : 'auto'
       }

       let picStyle = {
           marginTop: 20
       }

       let title = {
           marginTop: 50,
           fontWeight : 'bold',
       }

       let whatIsISBN = {
           fontSize: 16
       }
        //Similar to other class-component, this render out the screen-display
        return (
            <div className="container" >

                <h3 className='center-align' style={title}>What is an ISBN ?</h3>

                <p style={whatIsISBN}>ISBN is the acronym for International Standard Book Number. This 10 or 13-digit number identifies a specific book, an edition of a book, or a book-like product (such as an audiobook).</p>

                <div className="center-align">
                    <img src={picture} style={picStyle} className='center-align' alt='this is a pic'/>
                </div>
                
                <div className='row'>

                    <div className="col l6">
                        <div class="card hoverable" style={cardStyle}>
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" src={picture2} alt='this is just a pic' style={cardImgStyle}/>
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Where to find ISBN<i class="material-icons right">more_vert</i></span>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Where to find ISBN<i class="material-icons right">close</i></span>
                                <p>On most books, the ISBN number can be found on the back cover, next to the barcode. 
                                If a book doesn't show the ISBN on the back cover, look on the page featuring the copyright 
                                and publisher information and the ISBN will be found there.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col l6">
                        <div className="card hoverable" style={cardStyle}>
                            <div className="card-image waves-effect waves-block waves-light">
                                <img class="activator" src={picture3} alt='this is just a pic' />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Why do we use ISBN<i class="material-icons right">more_vert</i></span>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Why do we use ISBN<i className="material-icons right">close</i></span>
                                <p>ISBNs are useful when looking for a specific printing of a book. 
                                A student, for example, can search by ISBN to find the correct edition 
                                of a textbook for school.</p>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}
//This is a function to return the state from the store
const mapStateToProps = state => {
    return {
        books: state.books.books
    }
}
//Here is where I export the class-component and make it a HIGHER ORDER COMPONENT
export default connect(mapStateToProps)(EmptyShow)