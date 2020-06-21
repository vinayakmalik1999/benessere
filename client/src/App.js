import React, { Component } from 'react'
import logo from './logo.svg';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'


import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
       formValue:''
     }
     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event){
   this.setState({formValue:event.target.value})
  }
  handleSubmit(event){
    event.preventDefault();
    if(this.state.formValue === ''){
      alert("please enter a value")
      return;
    }
    axios.post("http://localhost:3001/api/putData",{
      URL:this.state.formValue
    }).then(res => {
      console.log(res)
      this.setState({formValue:''}) 
    })
    .catch(err => {
      alert(err)
      return;
    })

}


  render(){
    return (
      <div className="App">
        <p>
        Shorten URL's
        </p>
        <header className="App-header">
        <form onSubmit = {this.handleSubmit}>
        <InputGroup>
        <InputGroup.Prepend>
        <InputGroup.Text>Enter your URL</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl type = 'text'placeholder="Enter URL" aria-label="With textarea" value={this.state.formValue} onChange={this.handleChange}/>
        <InputGroup.Append>
       <Button type='submit' variant="outline-dark" >Submit</Button>
   </InputGroup.Append>
        </InputGroup>

        </form>
        </header>
      </div>
    );
  }

}

export default App;
