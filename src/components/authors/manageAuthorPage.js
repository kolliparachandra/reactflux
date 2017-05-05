import React from 'react';
import {withRouter} from 'react-router-dom';
import AuthorForm from './authorForm'
import AuthorApi from '../../api/authorApi'
class AddAuthor extends React.Component{
  constructor(){
      super();
      this.state = {author:{id:'',firstName:'',lastName:''}}
      this.setAuthorState = this.setAuthorState.bind(this);
      this.saveAuthor = this.saveAuthor.bind(this);
  }
  saveAuthor(event){
      event.preventDefault();
      AuthorApi.saveAuthor(this.state.author);
      this.props.history.push('/authors');
  }
  setAuthorState(event){
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author:this.state.author});
  }
    render(){
        return(
            <AuthorForm author={this.state.author} onChange={this.setAuthorState} onSave={this.saveAuthor}/>
        )
    }
}
export default withRouter(AddAuthor);