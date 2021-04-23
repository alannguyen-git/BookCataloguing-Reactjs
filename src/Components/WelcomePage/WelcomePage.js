import React, { Component } from 'react'
import picture from './star.png'
export default class WelcomePage extends Component {
    
    render() {
        setTimeout(() => {
            // this.props.history.push('/search')
            window.location.replace(`http://localhost:3000/search`);
        }, 3000);
        let style = {
            width: '100vw',
            height:'90vh'
        }
        return (
            <img style={style} src={picture} alt=""/>
        )
    }
}
