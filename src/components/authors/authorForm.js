import React from 'react';
import PropTypes from 'prop-types';
import Input from '../common/textInput';
import {Prompt} from 'react-router-dom';
export default class AuthorForm extends React.Component{
    render(){
          return(
            <form>
				<h1>Manage Author</h1>
               	<Input
					name="firstName"
                    label="First Name"
                    placeholder="First Name"
					value={this.props.author.firstName}
			        onChange={this.props.onChange}
                    error={this.props.errors.firstName}
					/>
                    <br />
                    
				<Input
					name="lastName"
                    label="Last Name"
					value={this.props.author.lastName}
                    onChange={this.props.onChange}
                     error={this.props.errors.lastName}
                    />
                    <br />

				<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
                <Prompt
          when={this.props.isBlocking}
          message={location => (
            `Are you sure you want to go to ${location.pathname}`
          )}
        />
			</form>
        )
    }
}
AuthorForm.propTypes={
    author:PropTypes.object.isRequired,
    onChange:PropTypes.func.isRequired,
    onSave:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired

}