import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

class Home extends Component {

    render(){
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <div>
                            <h1>Welcome!!!</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size="col-md-6 col-sm-12">
                        <div>
                            <Link to="/signup"><button>Signup</button></Link>
                        </div>
                    </Col>
                    <Col size="col-md-6 col-sm-12">
                        <div>
                            <Link to="/login"><button>Login</button></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;   