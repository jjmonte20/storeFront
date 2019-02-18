import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";

class Signup extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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
            API.createUser({
                email: this.state.email,
                password: this.state.password
            })
                .then(res => {
                    window.location.assign("/login");
                })
                .catch(err => console.log(err));
        }
    }

    render(){
        return (
            <Container fluid>
                <Row>
                    <Col size="col-md-12">
                        <h1>Signup</h1>
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
        )
    }
}

export default Signup;   