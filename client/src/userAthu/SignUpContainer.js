import React from 'react';
import SignUp from './SignUpForm';


class SignUpContainer extends Component {
  state = {
    email: undefined,
    password: undefined
  }
  updateField = this.updateField.bind(this);
  updateField(field, value) {
    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }
  handleSubmit = this.handleSubmit.bind(this);
  handleSubmit(event){
    event.preventDefault();
    console.log("state is now:", this.state);
    const local = {email: this.state.email, password: this.state.password};
    $.ajax({
      url: '/api/signup',
      method: 'POST',
      data: local
    }).done((response) => (response._id) ? browserHistory.push('/login')
      : browserHistory.push(`/error/${response.message}`));
  }
  render() {
    return(
      <SignUpForm
        updateField = {this.updateField}
        handleSubmit = {this.handleSubmit}
      />
    )
  }
}

export default SignUpContainer
