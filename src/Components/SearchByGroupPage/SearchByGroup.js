import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import M from 'materialize-css'

//Import Material UI

class SearchByGroup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: '',
            referenceArray : [
                'Undefined',
                'Action & Adventure',
                'Autobiography',
                'Comic',
                'Cookbook',
                'Coming of Age',
                'Crime',
                'Dictionary',
                'Drama',
                'Documentary',
                'Fairytale',
                'Fantasy',
                'Health',
                'History',
                'Horror',
                'Mystery',
                'Mathematical',
                'Picture book',
                'Poetry'
            ],
            displayArr : [
                {
                    book_id : 1000000000000, 
                    book_title: 'Please choose a category', 
                    book_body:"...",
                    book_edition: "This book does not exist",
                    book_publicationYear: 1000,
                    book_publisher: "This book does not exist",
                    book_author: 'This book does not exist',
                    book_category: 'This book does not exist',
                    book_comment: ["This book does not exist", "This book does not exist"]
                }
            ],
            checkArr : [
                {
                    book_id : 1000000000000, 
                    book_title: 'No such book is found in the catalogue', 
                    book_body:"No such book is found in the catalogue",
                    book_edition: "This book does not exist",
                    book_publicationYear: 1000,
                    book_publisher: "This book does not exist",
                    book_author: 'This book does not exist',
                    book_category: 'This book does not exist',
                    book_comment: ["This book does not exist", "This book does not exist"]
                }
            ]
       }
        this.submitHandler = this.submitHandler.bind(this)
    
    }

    submitHandler(event) {
        alert('Submitted')
        event.preventDefault()
        let elems = document.querySelectorAll('select');
        
        // console.log(elems)
        let items = elems[0].M_FormSelect._valueDict
        let index  = 0
        let arr = []
        for (const item in items) {
            let ar = [index, (items[`${item}`].optionEl.className)]
            arr.push(ar)
            index++
            // console.log(typeof a)
            // for (const item in a) {
            //     console.log(item)
            // }
          }
        // console.log(arr)
        let answer = null
        for(let i = 0; i < arr.length;i++){
            if(arr[i][1].includes('selected')){
                answer = i
            }
        }
        // window.prompt(this.state.referenceArray[answer])
        //Start to search for book
        let displayArr = this.props.books.filter(book => book.book_category === this.state.referenceArray[answer] )
        // console.log(this.props.books)
        if (displayArr[0] === this.state.checkArr[0] || displayArr.length === 0){
            this.setState((state) => {
                return {
                    ...state,
                    displayArr : [
                        {
                            book_id : 1000000000000, 
                            book_title: 'No such book is found in the catalogue', 
                            book_body:"This book does not exist",
                            book_edition: "This book does not exist",
                            book_publicationYear: 1000,
                            book_publisher: "This book does not exist",
                            book_author: 'This book does not exist',
                            book_category: 'This book does not exist',
                            book_comment: ["This book does not exist", "This book does not exist"]
                        }
                    ]
                }
            })
        }else{
            this.setState((state) => {
                return{
                    ...state,
                    category : this.state.referenceArray[answer],
                    displayArr : displayArr
                }
               
            })
        }
        
        this.forceUpdate()
        // console.log(elems[0].M_FormSelect._valueDict.getOwnPropertyDescriptors())
        
    }
    
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            M.FormSelect.init(elems, {});
          });
          console.log('hi from mount')  
          
    }
    componentDidUpdate(){
        console.log('hiFrom Update')
        
        
    }
    render() {
        //Filter book
        
        //Styling 
        let divStyle = {
            transform: 'translateX(254px)',
            width:'500px', 
            height:'45',
            zIndex : '9'
        }
        let cardStyle = {
            fontWeight: 'italic',
            color: 'black',
            fontSize : 20,

        }
        let cardBody = {
            color: 'grey'
        }
        let card1 = {
            width: '80%',
            transform: 'translateX(144px)',
            marginTop: '40px',
            marginBottom: '20px'
        }
        let postAndEdit = {
            transform : 'translateX(22.5px)',
            marginTop: '10px'
        }

        let postAndEdit2 = {
            marginTop: '0px'
        }
        //mapping the state to some cards
        let bookList
        if (this.state.displayArr[0] === this.state.checkArr[0] || this.state.displayArr.length === 0){
            bookList = this.state.displayArr.map( book => {
                return (
                    <div className="a">
                        <div className="card-panel post hoverable " style={card1} key={book.book_id}>
                        
                            <div className="card-content">
                                <Link to={'/.' + book.book_id}>
                                    <span className="card-title" style={cardStyle}>{book.book_title}</span>
                                </Link>
                                
                                <p style={cardBody}>{book.book_body.slice(0,112)}...</p>
                            </div>
                            
                        </div>
                        <h1>Hi</h1>
                    </div>
                    
                )
            })
        }else{
            bookList = this.state.displayArr.map( book => {
                return (
                    <div className="card-panel post hoverable " style={card1} key={book.book_id}>
                        
                        <div className="card-content">
                            <a href={'/.' + book.book_id}>
                                <span className="card-title" style={cardStyle}>{book.book_title}</span>
                            </a>
                            
                            <p style={cardBody}>{book.book_body.slice(0,112)}...</p>
                        </div>
                    </div>
                )
            })
        }
        
        
        
        
        return (
            <div >
            <div className="container ">
                <form 
                    autoComplete='off'
                    onSubmit={this.submitHandler}
                    
                >
                    <div  
                        
                        class="input-field col s12 center"
                        style={divStyle}
                    >
                        <select >
                            <option value="" disabled selected>Choose your option</option>
                            <optgroup label="A">
                                <option value="0">Action & Adventure</option>
                                <option value="1">Autobiography</option>
                            </optgroup>
                            <optgroup label="C">
                                <option value="2">Comic</option>
                                <option value="3">Cookbook</option>
                                <option value="4">Coming of Age</option>
                                <option value="5">Crime</option>
                            </optgroup>
                            <optgroup label="D">
                                <option value="6">Dictionary</option>
                                <option value="7">Drama</option>
                                <option value="8">Documentary</option>
                            </optgroup>
                            <optgroup label="F">
                                <option value="9">Fairytale</option>
                                <option value="10">Fantasy</option>
                            </optgroup>
                            <optgroup label="H">
                                <option value="11">Health</option>
                                <option value="12">History</option>
                                <option value="13">Horror</option>
                            </optgroup>
                            <optgroup label="M">
                                <option value="14">Mystery</option>
                                <option value="15">Mathematical</option>
                                
                            </optgroup>
                            <optgroup label='P'>
                                <option value="16">Picture book</option>
                                <option value="17">Poetry</option>
                            </optgroup>
                            
                        
                           
                        </select>

                        <div className="input-field center" style={postAndEdit2}>
                            <button className="btn-floating btn-large waves-effect waves-light"  style={postAndEdit}>Find
                            <i className="material-icons ">send</i>
                            </button>
                        </div>
                    </div>
                    
                </form>
            </div>
                

                {bookList}
                

            </div>
        )
    }
}
//A function to connect and return data from the store
const mapStateToProps = state => {
    
    return {
        books: state.books.books,
        externalDB : state.books.externalDB
    }
}

export default connect(mapStateToProps)(SearchByGroup)