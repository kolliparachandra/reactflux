import React from 'react';
import {Link} from 'react-router-dom';
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
            <Link to="addAuthor" className="btn btn-default">Add Author</Link>
            <AuthorList authors={this.state.authors} />
            </div>
        )
    }
}