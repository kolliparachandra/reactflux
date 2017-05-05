import React from 'react';
import {withRouter} from 'react-router-dom';
import AuthorForm from './authorForm'
import AuthorApi from '../../api/authorApi'
import toastr from 'toastr'
class AddAuthor extends React.Component{
  constructor(){
      super();
      this.state = {author:{id:'',firstName:'',lastName:''},errors:{firstName:'',lastName:''},isBlocking:false}
      this.setAuthorState = this.setAuthorState.bind(this);
      this.saveAuthor = this.saveAuthor.bind(this);
  }
  
  authorFormIsValid(){
      let formValid = true;
      this.state.errors = {};
      if(this.state.author.firstName === ""){
       this.state.errors.firstName='First name should contain value';
       formValid = false;
      }
       
      if(this.state.author.lastName === ""){
       this.state.errors.lastName='Last name should contain value';
       formValid = false;
      }

       this.setState({errors:this.state.errors})
  }

  saveAuthor(event){
      event.preventDefault();
      if(!this.authorFormIsValid())
      return;
      AuthorApi.saveAuthor(this.state.author);
      toastr.success('Author saved');
      this.setState({
            isBlocking: false
          })
      this.props.history.push('/authors');
      
  }
  setAuthorState(event){
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    this.setState({
                isBlocking: event.target.value.length > 0
              })
    return this.setState({author:this.state.author});
  }
    render(){
        return(
            <AuthorForm author={this.state.author} onChange={this.setAuthorState} onSave={this.saveAuthor} errors={this.state.errors} isBlocking={this.state.isBlocking}/>
        )
    }
}
export default withRouter(AddAuthor);