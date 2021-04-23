import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



class Form extends Component {
    //This is the constructor of this class, where binding the function happens so that it gains
    //access to the method this.setState, without binding, the function cannot be called or 
    //do anything in this class as they cannot access the methods of the COMPONENT in REACT.
    constructor(props) {
        super(props)
    
        this.state = {
             isbn:'',
             bookArray : [],
             isISBNFoundInDB : 'empty'
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
        this.clearSearchHandler = this.clearSearchHandler.bind(this)
        this.checkDigits = this.checkDigits.bind(this)
        this.isValid = this.isValid.bind(this)
        this.isFound = this.isFound.bind(this)
    }
    //Form handler - this function will set the state of this component according to the input
    //value to its name in the state of this component
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        }) 
    }

    //ClearSearchHandler
    clearSearchHandler() {
        console.log('gi')
        this.setState((state) => {
            return{
                ...state,
                isbn: ''
            }
           
        })
    }

    //When the input is submitted, this function is called to make sure the isbn is valid hence redirect
    //the users to the desired page. If the ISBN does not check out, there will be a message that inform
    //the users to re-enter the input. Moreover, this function also clears out the input box so that the
    //users can use it again
    submitHandler(event){
        alert('Submitted')
        event.preventDefault()
        
        if(this.checkDigits(this.state.isbn) && this.isValid(this.state.isbn)) {
            alert('The input is valid, please wait while we are doing our search.')
            if(this.isFound(this.state.isbn)) {
                console.log('Found')
                // this.props.history.push(`/.${this.state.isbn}`)
                window.location.replace(`http://localhost:3000/.${this.state.isbn}`);
            } else {
                console.log('Not Found')
            }
        } else {
            //This part here to reset the input box
            alert('The input is invalid, please re-enter')
            this.setState((state) => {
                return{
                    ...state,
                    isbn: ''
                }
               
            })
            window.location.reload()
        }
      
    }

    //ISBN digits checking
    checkDigits = isbn => {
        let regex = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/
        return (regex.test(isbn))
    }
    //Checking if the input is valid to the ISBN rule
    isValid = isbn => {
        //turning integer to an array of integer
        let quo = isbn;
        let rem = 0;
        let newArray = new Array(13);
        for (let i = 0; i < 13; i++) {
            rem = quo % 10; //mod
            newArray[12 - i] = rem;
            quo = Math.floor(quo / 10); //div
        }
        //is the isbn valid?
        let sum = 0;
        for (let i = 0; i < newArray.length - 1; i++) {
            if (i % 2 === 0) {
              sum += newArray[i] * 1;
            } else {
              sum += newArray[i] * 3;
            }
          }
        let checkDigit = 10 - (sum % 10);
        
        if (checkDigit === 10) {
        checkDigit = 0;
        }
        
        return checkDigit === newArray[12];
    }
    
//Fetching, searching and adding book info to JSON
//Checking if ISBN is found
    isFound = input => {
        return true
    }
    render() {
        console.log(this.props)
       
        //Styling for the page
        let divStyle={
            width: '100%',
            height: '100%',
            borderRightStyle : 'solid',
            borderRightColor: 'grey'
        }
        let formStyle={
            paddingBottom: 40,
            paddingTop: 30,
            paddingRight: 20,
            paddingLeft: 20,
            transform: 'translateY(5px)'
        }
        let cardStyle = {
            fontWeight: 'italic',
            color: 'black',
            fontSize : 20,

        }
        let cardBody = {
            color: 'grey'
        }
       //mapping the state to some cards
        const bookList = this.props.books.map( book => {
            return (
                <div className="card-panel post hoverable" key={book.book_id}>
                    
                    <div className="card-content">
                        <a href={'/.' + book.book_id}>
                            <span className="card-title" style={cardStyle}>{book.book_title}</span>
                        </a>
                        
                        <p style={cardBody}>{book.book_body.slice(0,112)}...</p>
                    </div>
                </div>
            )
        })
        //This return will render out the element the users see on the screen, which is the form
        return (
            <div style={divStyle}>
                <form 
                    style={formStyle} 
                    onSubmit={this.submitHandler}
                    autocomplete="off"
                >
                    <div className="input-field">
                        <i className="material-icons prefix">equalizer</i>
                        <input 
                            type="number" 
                            id="isbn" 
                            required min='1000000000000' 
                            max='9999999999999' 
                            value={this.state.isbn}
                            name='isbn'
                            onChange={this.handleChange}
                            data-length='13'
                        />
                        <label htmlFor="isbn">ISBN</label>
                    </div>
                    <div className="input-field center">
                        <button className="btn waves-effect waves-light">Submit
                           <i class="material-icons right">send</i>
                        </button>
                    <button 
                        onClick={this.clearSearchHandler} 
                        className="btn waves-effect waves-red"
                        style={{marginLeft  :'10px'}}
                    >Clear
                        <i className="material-icons right">close</i>
                    </button>
                    </div>
                </form> 
                
                {bookList}
                
            </div>
        )
    }
}


//A function to connect and return data from the store
const mapStateToProps = state => {
    return {
        books: state.books.books.slice(0,3),
        externalDB : state.books.externalDB
    }
}
//Exporting the class-component so that it can be used in the INITIAL SEARCH PAGE component
export default connect(mapStateToProps)(Form)