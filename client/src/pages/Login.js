import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";

class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            user: ''
        }
    }

handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
}

handleFormSubmit = e => {
    e.preventDefault();
    if (this.state.email && this.state.password){
        API.login({
            email: this.state.email,
            password: this.state.password
        })
            .then(user => {
                this.setState({user:user.data});
            })
            .catch(err => alert(err));
    }
}

render(){
    // If user is logged in, redirect to the orders page unless specified
    if (this.state.user) {
        return <Redirect to={"/orders/" + this.state.user._id} user={this.state.user}/>
    } else {
    // Login info
    return (
        <Container fluid>
            <Row>
                <Col size="col-md-12">
                    <h1>Login</h1>
                </Col>
            </Row>
            <Row>
                <Col size="col-md-6">
                    <Input
                        value={this.state.email}
                        onChange={this.handleUserInput}
                        name="email"
                        placeholder="johnDoe@test.com"
                    />
                    <Input
                        value={this.state.password}
                        onChange={this.handleUserInput}
                        name="password"
                        placeholder="password"
                    />
                    <FormBtn
                        disabled={!(this.state.email && this.state.password)}
                        onClick={this.handleFormSubmit}
                    >
                    Submit
                    </FormBtn>
                </Col>
            </Row>
        </Container>
        )}
    }
}

export default Login;