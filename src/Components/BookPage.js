import React, { Component } from 'react'
import { connect } from 'react-redux'
import IMAGES from '../Images/index.js'
import M from 'materialize-css'

class BookPage extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             inputCategory : '',
             inputComment : '',
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
             ]
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
        this.commentSubmitHanler = this.commentSubmitHanler.bind(this)
        this.categorySubmitHandler = this.categorySubmitHandler.bind(this)
        this.bookDownloadHandler = this.bookDownloadHandler.bind(this)
        // this.postCommentHandler = this.postCommentHandler.bind(this)
        /* this.editCategoryHandler = this.editCategoryHandler.bind(this) */
    }
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
    submitHandler() {
        //window.location.replace('http://localhost:3000/search')
        this.props.history.push('/search')
        
    }
    commentSubmitHanler(e) {
        e.preventDefault()
        if(this.state.inputComment.length > 170 ) {
            alert('Character exceeds limit of 170 characters!')
            this.setState((state) => {
                return{
                    ...state,
                    inputComment: ''
                }
            })
        } else if(this.state.inputComment.replace(/\s+/g, '').length < 1){
            alert('Comments cannot be blank!')
            this.setState((state) => {
                return{
                    ...state,
                    inputComment: ''
                }
            })
        }else {
            this.props.postComment(this.props.book.book_id, this.state.inputComment)
            this.setState((state) => {
                return{
                    ...state,
                    inputComment: ''
                }
            })
        }
        this.forceUpdate()
    }
    categorySubmitHandler(e) {
        //---------------Old method of validation---------------------------

        // e.preventDefault()
        // if(this.state.inputCategory.length > 20) {
        //     alert('Character exceeds limit of 20 characters!')
        //     this.setState((state) => {
        //         return {
        //             ...state,
        //             inputCategory: ''
        //         }
        //     })
        // } else if(this.state.inputCategory.replace(/\s+/g, '').length < 1){
        //     alert('Category cannot be blank!')
        //     this.setState((state) => {
        //         return {
        //             ...state,
        //             inputCategory: ''
        //         }
        //     })
        // }else {
        //     alert(this.state.inputCategory.replace(/\s+/g, '').length)
        //     this.props.editCategory(this.props.book.book_id, this.state.inputCategory)
        //     this.setState((state) => {
        //         return{
        //             ...state,
        //             inputCategory: ''
        //         }
        //     })
        // }
        //----------------New method of self-validating----------------------
        // alert('Submitted')
        e.preventDefault()
        let elems = document.querySelectorAll('select');
        let instance = M.FormSelect.getInstance(elems);
        console.log(elems)
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
        console.log(arr)
        let answer = null
        for(let i = 0; i < arr.length;i++){
            if(arr[i][1].includes('selected')){
                answer = i
            }
        }
        
        // console.log(elems[0].M_FormSelect._valueDict.getOwnPropertyDescriptors())
        this.props.editCategory(this.props.book.book_id, this.state.referenceArray[answer])
        window.location.reload()
        // this.forceUpdate()
    }
    bookDownloadHandler() {
        
        let url = this.props.match.url.slice(2,15)
        this.props.downloadBook(Number(url))
        window.location.replace(`http://localhost:3000/.${url}`)
        
        

    }

    componentDidMount() {
        if(typeof(this.props.DB) == 'undefined' && typeof(this.props.book) == 'undefined') {
            setTimeout(() => {
                this.props.history.push('/search')
            }, 3000);
        }
        if(this.props.match.url.includes('/.97')) {
            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('select');
                M.FormSelect.init(elems, {});
              });
        }
        
    }
    // postCommentHandler () {
    //     this.props.postComment(this.props.book.book_id, this.state.inputComment)
    // }
   /*  editCategoryHandler () {
        this.props.editCategory(this.props.book.book_id)
    } */
    render() {

    //Styling for found books
        let text = "Click to enlarge & when done, please go back to the previous page. Mac: CMD + < (left arrow key)  Window: Alt + < (left arrow key)"
        let url = IMAGES[this.props.match.url.slice(2,15)]
        
        let cardStyle = {
            marginTop : 35,
            height : 150            
        }
        let col12 = {
            width : 600,
            transform : 'translateX(48px)',
        }
        let containerStyle = {
            backgroundColor: 'rgba(208, 234, 235, 1)',
            padding: 0,
            margin: 0,
            width: '100vw',
            height: '737px',
            maxWidth: '1496px'
        }
        let titleStyle = {
            margin: 0,
            paddingTop: 30,
            fontFamily: 'Potta One',
            
        }
        let postStyle = {
            width: '1496px',
        }
        let commentStyle = {
            margin : 10,
            backgroundColor : 'rgba(208, 234, 235, 1)',
            borderRadius : '10px',
            width: 1180,
            transform : 'translateX(48px)',
        }
        let cardTitle = {
            fontSize : 25,
            fontWeight : 'bold',
            paddingTop : 30
        }
        let cardTitle1 = {
            fontSize : 25,
            fontWeight : 'bold'
        }
        let actualComment = {
            backgroundColor: 'white',
            padding: 15,
            fontStyle : 'italic',
            fontSize: 15
        }
        let formStyle = {
            width: 555,
            transform : 'translateX(48px)'
        }
        let formStyle1 = {
            width: 555,
            transform : 'translateX(128px)'
        }
        let returnBtnStyle = {
            
            position: 'absolute',
            bottom: 20,
            left: 0
            
        }
        let cardInfoStyle = {
            fontSize : 20
        }
        let postAndEdit = {
            transform : 'translateX(22.5px)',
            marginTop: '0px',
            
        }

        let postAndEdit2 = {
            marginTop: '0px',
            
        }

        let inputBox = {
            marginBottom: '0px'
        }

        //Styling for external DB
        let DBnotFound = {
            marginTop : 50
        }
        let DBnotFoundh2 = {
            margin: 0,
            
            padding: 0,
            fontWeight: 'bold'
        }
        let DBinfoStyling = {
            fontSize: 25,
            
        }
        let DBinfoStyling1 = {
            transform : 'translateX(30)'
        }
        let DBpanel = {
            margin: 0,
            paddingBottom: 1
        }
        //Styling for when both DB and Internal DB does not have the book
        let bothNullTitle = {
            margin : 0,
            paddingTop: 100,
            paddingBottom: 40,
            fontWeight : 'bold',
            
        }
        let bothNullMessage = {
            color: 'grey',
            fontSize: 15,
            fontWeight: 'italic'
        }

        let picStyle = {
            height: '310px',
            width : 'auto',
            marginLeft: 10,
            marginTop: 15
            
        }
        let book
        let isExisted = (typeof(this.props.DB) == 'undefined' && typeof(this.props.book) == 'undefined')
        book = isExisted ? (
            <div className="container">
                <span>
                    <h2 className="center-align" style={bothNullTitle}>Book does not exist!</h2>
                </span>
                <div className="center-align">
                    <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue">
                        <div className="circle-clipper left">
                        <div className="circle"></div>
                        </div><div className="gap-patch">
                        <div className="circle"></div>
                        </div><div className="circle-clipper right">
                        <div className="circle"></div>
                        </div>
                    </div>

                    <div className="spinner-layer spinner-red">
                        <div className="circle-clipper left">
                        <div className="circle"></div>
                        </div><div className="gap-patch">
                        <div className="circle"></div>
                        </div><div className="circle-clipper right">
                        <div className="circle"></div>
                        </div>
                    </div>

                    <div className="spinner-layer spinner-yellow">
                        <div className="circle-clipper left">
                        <div className="circle"></div>
                        </div><div className="gap-patch">
                        <div className="circle"></div>
                        </div><div className="circle-clipper right">
                        <div className="circle"></div>
                        </div>
                    </div>

                    <div className="spinner-layer spinner-green">
                        <div className="circle-clipper left">
                        <div className="circle"></div>
                        </div><div className="gap-patch">
                        <div className="circle"></div>
                        </div><div className="circle-clipper right">
                        <div className="circle"></div>
                        </div>
                    </div>
                    </div>
                        
                </div>
                <p className = "center-align" style={bothNullMessage}>This page will be directed back to search in a moment</p>
            </div>

        ) : (
            book = this.props.book ? (
                <div className="post container" style={postStyle}>
                    <h4 className="center-align" style={titleStyle}>{this.props.book.book_title}</h4>
                    
                    <div className='row'>
                        <div className="col l5" style={col12}>
                            <div className="card hoverable" style={cardStyle}>
                                <div className="card-content ">
                                    <span class="card-title activator grey-text text-darken-4 center-align " style={cardTitle}>Basic Information</span>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4" style={cardTitle1}>Basic Information<i class="material-icons right">close</i></span>
                                    <div className="row" style={cardInfoStyle}>
                                        <div className="col l6">
                                            <a href={url}>
                                                <img src={url} style={picStyle} alt=""/>
                                                <figcaption style={{fontSize:15, paddingLeft:8}}>{text}</figcaption>
                                            </a>
                                            
                                            
                                            
                                        </div>
                                        <div className="col l6">
                                            <p><b>Author:</b> {this.props.book.book_author}</p>
                                            <p><b>Edition:</b> {this.props.book.book_edition}</p>
                                            <p><b>Category:</b> {this.props.book.book_category}</p>
                                            <p><b>ISBN:</b> {this.props.book.book_id}</p>
                                            <p><b>Publisher:</b> {this.props.book.book_publisher}</p>
                                            <p><b>Publication Year:</b> {this.props.book.book_publicationYear}</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="col l5" style={col12}>
                            <div className="card hoverable" style={cardStyle}>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4 center-align" style={cardTitle}>Contents</span>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4" style={cardTitle1}>Contents<i class="material-icons right">close</i></span>
                                    <p style={cardInfoStyle}>{this.props.book.book_body}</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                
                    <div className="card-panel hoverable " style={commentStyle}>
                        <div className="card-content center-align ">
                            <span className="card-title activator grey-text text-darken-4 " style={cardTitle}>Comments</span>
                        </div>
                        <div className="card-content">
                            <p style={actualComment}>{this.props.book.book_comment[0]}</p>
                            <p style={actualComment}>{this.props.book.book_comment[1]}</p>
                        </div>
                    </div>
                    <div className="row">
                        <form  
                            className='col l6' 
                            onSubmit={this.categorySubmitHandler} 
                            style={formStyle}
                            autoComplete='off'
                        >
                            <div className="input-field " style={inputBox}>
                            <select >
                                <option style={{color:'#9e9e9e'}} value="" disabled selected>Choose your option</option>
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
                            </div>
                            <div className="input-field center" style={postAndEdit2}>
                                <button className="btn-floating btn-large waves-effect waves-light"  style={postAndEdit}>Edit
                                <i className="material-icons ">send</i>
                                </button>
                            </div>
                        </form>
                        <form 
                            className='col l6' 
                            style={formStyle1} 
                            onSubmit={this.commentSubmitHanler}
                            autoComplete='off'
                        >
                            <div className="input-field " style={inputBox}>
                                <i className="material-icons prefix">equalizer</i>
                                <textarea 
                                    id="textarea2" 
                                    className="materialize-textarea" 
    
                                    value={this.state.inputComment}
                                    onChange={this.handleChange}
                                    name = "inputComment"
                                    data-length="170"
                                    maxLength="170"
                                ></textarea>
                                <label htmlFor="category">Comment</label>
                            </div>
                            <div className="input-field center" style={postAndEdit2}>
                            <button className="btn-floating btn-large waves-effect waves-light" style={postAndEdit}>Post
                               <i className="material-icons right">send</i>
                            </button>
                        </div>
                        </form>
                    </div>
                    <button className="btn-large waves-effect waves-light" onClick={this.submitHandler} style={returnBtnStyle} type="submit" name="action">RETURN TO SEARCH
                        <i className="material-icons right">home</i>
                    </button>
                </div>
                
            ) : (
                <div className="container">
                    <div className="row center-align">
                        <div className="col s12 m5 l12">
                            <div className="card-panel teal" style={DBnotFound} >
                                <span className="white-text center-align">
                                    <h2 style={DBnotFoundh2}>Book not found</h2>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col s12 m5 l12" >
                            <div className="card-panel teal" style={DBpanel} >
                                <span className="white-text ">
                                    <h4  className='center-align' style={DBnotFoundh2}>Book found online</h4>
                                    <h4 className="center-align">{this.props.DB.book_title}</h4>
                                    
                                    <div className="row" style={DBinfoStyling}>
                                        <div className="col l6 left" style={DBinfoStyling1} >
                                            <p><b>Author:</b> {this.props.DB.book_author}</p>
                                            <p><b>Edition:</b> {this.props.DB.book_edition}</p>
                                            <p><b>Publication Year:</b> {this.props.DB.book_publicationYear}</p>
                                        </div>
                                        <div className="col l6" style={DBinfoStyling1}>
                                            <p><b>Category:</b> {this.props.DB.book_category}</p>
                                            <p><b>ISBN:</b> {this.props.DB.book_id}</p>
                                            <p><b>Publisher:</b> {this.props.DB.book_publisher}</p>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <form 
                            onSubmit={this.bookDownloadHandler}
                            autoComplete='off'
                        >
                            <div className="col l6">
                                <button className="btn-large waves-effect waves-light" type="submit" name="action">DOWNLOAD
                                    <i className="material-icons right">get_app</i>
                                </button>
                            </div>
                        </form>
                        
                        <div className="col l6">
                            <button className="btn-large waves-effect waves-light right" onClick={this.submitHandler}  type="submit" name="action">CANCEL
                                <i className="material-icons right">home</i>
                            </button>
                        </div>
                    </div>
                </div>
            )
        )
         
        return (
            <div className="container" style={containerStyle}><div/>
                {book}
                
            </div>

        )
    }
}

//Map state to props
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.book_id
    return {
        book: state.books.books.find( book => book.book_id === Number(id)),
        DB: state.books.externalDB.find( book => book.book_id === Number(id))
    }
}
//Map dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
        postComment: (id, comment) => { dispatch({ type: 'POST_COMMENT', id: id, comment: comment}) },
        editCategory: (id, category) => {dispatch({ type: 'EDIT_CATEGORY', id: id, category: category})},
        downloadBook: (id) => {dispatch({ type: 'DOWNLOAD_BOOK', id: id})}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookPage)

