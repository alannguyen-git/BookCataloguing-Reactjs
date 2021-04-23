import React, { Component } from 'react'

import Form from '../BodyComponents/Form'
import EmptyShow from '../BodyComponents/EmptyShow'

export default class InitialSearch extends Component {
    
    checkISBN = isbn => {
        return false
    }
    render() {
       /* if (this.checkISBN(2)) {
            setTimeout(() => {
                this.props.history.push('/found')
            }, 1000);
        }else {
            setTimeout(() => {
                this.props.history.push('/notFound')
            }, 1000);
        } */
        //Styling for the container
        let styleContainer = {
            width : '100%',
            padding: 0,
            margin: 0
        }
        let styleRow ={
            padding: '0 !important',
            marginBottom: 0,
            width: '100vw',
            height: '90vh',
            
            
        }
        let styleCol1 = {
            padding: '0 !important',
            paddingLeft: 0,
            paddingRight: 0,
            backgroundColor : '#e0f7fa',
            height: '90vh'
        }
        let styleCol2 = {
            padding: '0 !important',
            paddingLeft: 0,
            paddingRight: 0,
            height: '90vh',
           
        }
        return (
            <div className="container " style={styleContainer}>
                <div className="row" style={styleRow} >
                    <div className="col s12 l4" style={styleCol1}><Form/></div>
                    <div className="col s12 l8" style={styleCol2}><EmptyShow/></div>
                </div>
            </div>
        )
    }
}
