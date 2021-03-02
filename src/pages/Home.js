import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMachines } from "../actions";
import { setMachineId } from "../actions";
import "../App.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = (props) => {
  useEffect(() => {
    props.getMachines();
  }, []);
  // console.log(props);
  return (
    <div className="App">
      <div className="row">
        {props.machines.map((machine) => {
          return (
            <Card
              key={machine.name}
              style={{
                width: "10rem",
                marginLeft: "20rem",
                marginTop: "1rem",
              }}
            >
              {/* <Card.Img variant="top" src={country.flag} /> */}
              <Link to="/machinestatus">
                <Card.Body onClick={() => props.setMachineId(machine)}>
                  <Card.Title>{machine.id}</Card.Title>
                  <Card.Text>{machine.family}</Card.Text>
                  <Card.Text>{machine.name}</Card.Text>
                  <Card.Text>{machine.serialNumber}</Card.Text>
                </Card.Body>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const mapStoreToProps = (state) => {
  return {
    machines: state.machines,
  };
};

const mapActionsToProps = { setMachineId };

export default connect(mapStoreToProps, { getMachines, setMachineId })(Home);
