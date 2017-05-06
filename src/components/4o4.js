import React from 'react'
import {Link,BrowserRouter as Router}  from 'react-router-dom';
export default class NotFoundPage extends React.Component{
    render(){
        return(
            <div>
            <h1>Page not found</h1>
            <p><Link to='/'>Back to home</Link></p>
            </div>
        )
    }
}