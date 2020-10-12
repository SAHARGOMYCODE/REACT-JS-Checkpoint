import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "react-bootstrap/Form";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#deets">About Me</Nav.Link>
            <Nav.Link href="#deets">Project</Nav.Link>

            <Nav.Link eventKey={2} href="#memes">
              Contact Me{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="formulaire">
        <div class="col-xl-15">
          <Form className="Form">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="Form">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
          <Form className="Form">
            {["checkbox"].map((type) => (
              <div key={`custom-inline-${type}`} className="mb-3">
                AGE{" "}
                <Form.Check
                  custom
                  inline
                  label="20"
                  type={type}
                  id={`custom-inline-${type}-1`}
                />
                <Form.Check
                  custom
                  inline
                  label="27"
                  type={type}
                  id={`custom-inline-${type}-2`}
                />
              </div>
            ))}
          </Form>
          <Form className="Form">
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Form.Label>Nationnalité</Form.Label>
              <Form.Control as="select" size="sm" custom>
                <option>Tunisienne</option>
                <option>Marocaine</option>
                <option>Algérienne</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <Form className="Form">
            Share your CV{" "}
            <Form.File
              id="custom-file-translate-html"
              label="CV "
              data-browse="SUBMIT"
              custom
            />
          </Form>
        </div>
        <Button variant="success" className="envoyer">
          Envoyer
        </Button>{" "}
      </div>
    </div>
  );
}

export default App;
