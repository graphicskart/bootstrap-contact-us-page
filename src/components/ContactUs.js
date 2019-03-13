import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { AddressItem } from "../components";

const addresses = [
  {
    title: "23, Avenue de Paris 75012 Paris",
    icon: <i className="fas fa-map-marker-alt" />
  },
  {
    title: "hello@mikechemardin.com",
    icon: <i className="far fa-envelope" />
  },
  {
    title: "mike.chemardin",
    icon: <i className="fab fa-skype" />
  },
  {
    title: "+33619530144",
    icon: <i className="fas fa-mobile-alt" />
  }
];

const initialContact = {
  name: "",
  email: "",
  messag: ""
};
export default class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: { ...initialContact }
    };
  }

  onChange = e => {
    this.setState({
      contact: {
        ...this.state.contact,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      contact: { ...initialContact }
    });
    alert("Submitted successfuly!");
  };

  render() {
    return (
      <Col xs={12}>
        <Row className="main">
          <Col xs={8}>
            <Row>
              <Col xs={12} sm={{ span: 10, offset: 1 }}>
                <Row>
                  <Col xs={12} className="content">
                    <Row>
                      <Col xs={6} />
                      <Col xs={6} className="form">
                        <h3>Get in Touch</h3>
                        <p className="text">
                          Feel free to drop us a line below!
                        </p>
                        <Form onSubmit={this.onSubmit}>
                          <Form.Group>
                            <Form.Control
                              placeholder="Your name"
                              value={this.state.contact.name}
                              onChange={this.onChange}
                              name="name"
                              required
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Control
                              placeholder="Your email"
                              value={this.state.contact.email}
                              onChange={this.onChange}
                              name="email"
                              type="email"
                              required
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Control
                              as="textarea"
                              rows={4}
                              placeholder="Type your message here"
                              value={this.state.contact.message}
                              onChange={this.onChange}
                              name="message"
                              required
                            />
                          </Form.Group>
                          <Form.Group>
                            <Button variant="primary" type="submit">
                              SEND
                            </Button>
                          </Form.Group>
                        </Form>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={5} className="contact-info">
                <Row>
                  <Col xs={12}>
                    <h3>Contact Us</h3>
                    {addresses.map((address, key) => (
                      <AddressItem key={key} {...address} />
                    ))}
                  </Col>
                  <Col xs={12} className="social">
                    <i className="fab fa-instagram" />
                    <i className="fab fa-twitter" />
                    <i className="fab fa-linkedin" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
}
