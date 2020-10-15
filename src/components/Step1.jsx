import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { Component } from "react";
const mealCategory = ["breakfast", "dinner", "lunch"];
const numberOfPeople = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = (event, type) => {
    if (type === "meal") {
      this.setState(
        {
          mealCategory: event.target.value,
        },
        function () {
          this.props.onUpdateStep1(this.state);
        }
      );
    }
    if (type === "numberOfPeople") {
      this.setState(
        {
          numberOfPeople: event.target.value,
        },
        function () {
          this.props.onUpdateStep1(this.state);
        }
      );
    }
  };
  render() {
    return (
      <div>
        <h1>
          <br />
        </h1>
        <Grid container spacing={1} className="App">
          <Grid item md={3} sm={6} xs={12} className="ml-16">
            <FormControl margin="dense" style={{ width: "300px" }}>
              <InputLabel htmlFor="my-input">Please Select a Meal</InputLabel>
              <Select
                defaultValue={this.props.listSelected.mealCategory}
                onChange={(event) => this.handleChange(event, "meal")}
              >
                {mealCategory.map((item) => {
                  return (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>

          <Grid item md={3} sm={6} xs={12} className="ml-16">
            <FormControl margin="dense" style={{ width: "300px" }}>
              <InputLabel htmlFor="my-input">
                Please Select number of People
              </InputLabel>
              <Select
                defaultValue={this.props.listSelected.numberOfPeople}
                onChange={(event) => this.handleChange(event, "numberOfPeople")}
              >
                {numberOfPeople.map((item) => {
                  return (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Step1;
