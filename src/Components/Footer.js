import React, { Component } from 'react'


class Footer extends Component{
    
    render() {
        let styling = {
            position: 'fixed',
            bottom: 0,
            width:'100vw'
        }
        return(
            <div>
                <footer  style={styling} className="page-footer grey darken-2"></footer>
            </div>
        )
    }
}

export default Footer