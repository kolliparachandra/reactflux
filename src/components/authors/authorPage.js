import React from 'react';
import AuthorApi from '../../api/authorApi';
import AuthorList from './authorList';
export default class Authors extends React.Component{
    constructor(){
        super();
        this.state = {authors:[]}
     }
    componentDidMount(){
         this.setState({authors:AuthorApi.getAllAuthors()})
    }
    render(){
        
        return(
            <div>
            <h1>Authors</h1>
            <AuthorList authors={this.state.authors} />
            </div>
        )
    }
}