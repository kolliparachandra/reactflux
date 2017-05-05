import React from 'react';
import Header from './common/Header';
import {RouteHandler} from 'react-router-dom'
export default class App extends React.Component{
  
    render(){
           return(
            <div>
              <Header location={this.props.location}/>
              <div className='container-fluid'>
                {this.props.children}
              </div>
            </div>
        )
        
    }

}
