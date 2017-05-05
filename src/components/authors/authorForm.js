import React from 'react';
import Input from '../common/textInput'
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
					/>
                    <br />
                    
				<Input
					name="lastName"
                    label="Last Name"
					value={this.props.author.lastName}
                    onChange={this.props.onChange}
                    />
                    <br />

				<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
			</form>
        )
    }
}
