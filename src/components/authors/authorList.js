import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
export default class AuthorList extends React.Component{
     createAuthorRow(author){
            return(
                <tr key={author.id}>
                <td><Link to={`/authors/${author.id}`}>{author.id}</Link></td>
                <td>{author.firstName} {author.lastName}</td>
                </tr>
            )
        }
    render(){
          return(
             <table className='table'>
            <thead>
            <th>ID</th>
            <th>Name</th>
            </thead>
            <tbody>
                {this.props.authors.map(this.createAuthorRow,this)}
            </tbody>
            </table>
         )
    }
}
AuthorList.propTypes={
    authors:PropTypes.array.isRequired
}