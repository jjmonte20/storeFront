import React, { Component } from "react";
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
            </Container>
        )
    }
}

export default Home;   