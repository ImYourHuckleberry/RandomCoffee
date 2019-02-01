import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import {
  ButtonGroup,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "" };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { dispatch,data } = this.props;
    const noAdmin = data.filter(data => data.name != "admin");
    const person = {
      email: this.state.email,
      name: this.state.name
    };
    const admin = {
      email: "admin",
      name: "admin"
    };
    console.log(data.indexOf(admin))
    if ((data.filter(data=>data.name==="admin").length>0)){
      console.log("remove admin")
      dispatch({
        type: "REMOVE_ADMIN",
        payload: noAdmin
      });
      dispatch({
        type: "ADD_PERSON",
        payload: person
      })
  
  }
    else {
      dispatch({
        type: "ADD_PERSON",
        payload: person
      })
      console.log(data.includes({email:admin}))
      console.log("add admin")
      console.log(data)
      dispatch({
        type: "ADD_PERSON",
        payload: admin
      })
  
  }
    
    this.state.email = "";
    this.state.name = "";
  }
  // doSomething = () => {
  //   const { dispatch, people, people2, data } = this.props;
  //   let increment = 0;
    

  //    {
  //     console.log(data)
  //     if (data.includes(admin)) {
  //       console.log("data includes admin");
        
  //       console.log(noAdmin);
        
  //     } else {
  //       console.log("add admin");
  //       dispatch({
  //         type: "ADD_PERSON",
  //         payload: admin
  //       });
  //     }
  //     this.makePairs();
  //   }
  //   if (data.length % 2 === 0) {
  //     this.makePairs();
  //   }
  // };

  doSomething = () => {
    const { dispatch, people, people2, people3, people4,people5,people6,data } = this.props;
    //make it so on odd it pushes an admin to the data
    //maybe make a checkOdd function
    var finalArray1 = [];
    var finalArray2 = [];

    const data1 = data.map(data => data.name);

    var arr1 = data1.slice();
    var arr2 = data1.slice();

    arr1.sort(function() {
      return 0.5 - Math.random();
    });
    arr2.sort(function() {
      return 0.5 - Math.random();
    });

    while (arr1.length) {
      var name1 = arr1[0];

      if (arr2.includes(name1)) {
        arr2 = arr2.filter(name => name != name1);
      }
const nameSet = (name1+" and "+arr2[0])
      if (
        !people.includes(nameSet) ||
        !people2.includes(nameSet) ||
        !people3.includes(nameSet) ||
        !people4.includes(nameSet) ||
        !people5.includes(nameSet) ||
        !people6.includes(nameSet)
        
      ) {
        var name2 = arr2.shift();
        var name1 = arr1.shift();
        if (arr1.includes(name2)) {
          arr1 = arr1.filter(name => name != name2);
        }

        finalArray1.push(name1 + " and " + name2);
        finalArray2.push(name2 + " and " + name1);
      }
    }
    dispatch({
      type: "LOAD_PEOPLE6",
      payload: people4
    });
    dispatch({
      type: "LOAD_PEOPLE5",
      payload: people3
    });
    dispatch({
      type: "LOAD_PEOPLE4",
      payload: people2
    });
    dispatch({
      type: "LOAD_PEOPLE3",
      payload: people
    });
    dispatch({
      type: "LOAD_PEOPLE2",
      payload: finalArray1
    });
    dispatch({
      type: "LOAD_PEOPLE",
      payload: finalArray2
    });
  };
  render() {
    const { people, data } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <div>RandomCoffee SignUp</div>
          <div style={{ "font-size": "36px" }}>RandomCoffee</div>
          <div>Daugherty Business Solutions</div>
        </header>

        <div className="App-body">
          <div className="blurbAndForm">
            <div className="blurb">
              <h1>Random Coffee</h1>
              <h1>Makes the Workplace</h1>
              <h1>Less Random</h1>
            </div>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup className="formGroup">
                <FormGroup>
                  <Label for="exampleEmail">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="exampleName"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    placeholder="Enter your Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    placeholder="Enter your Email"
                  />
                </FormGroup>
              </FormGroup>
              <ButtonGroup>
                <Button type="submit" value="Submit">
                  Submit
                </Button>{" "}
                <Button onClick={() => this.doSomething(data)}>
                  Make Pairs
                </Button>
              </ButtonGroup>
            </Form>
          </div>

          <div className="results">
            <a className="App-link" target="_blank" rel="noopener noreferrer">
              {people.map(people => (
                <div>{people}</div>
              ))}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
const mapStatetoProps = state => ({
  people: state.people,
  people2: state.people2,
  people3: state.people3,
  people4: state.people4,
  people5: state.people5,
  people6: state.people6,
 
  data: state.data
});

export default connect(mapStatetoProps)(App);
