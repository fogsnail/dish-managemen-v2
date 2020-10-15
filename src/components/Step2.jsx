import React, { Component } from "react";
import { data } from "../data/dishes";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@material-ui/core";

class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = (event) => {
    this.setState(
      {
        restaurant: event.target.value,
      },
      function () {
        this.props.onUpdateStep2(this.state);
      }
    );
  };
  getRestaurantsByMealCategory = () => {
    var mealSelected = this.props.mealCategory;
    // console.log(mealSelected)
    var restaurantsTemp = [];
    data.dishes.map((value) => {
      var index1 = value.availableMeals.indexOf(mealSelected);
      if (index1 !== -1) {
        restaurantsTemp.push(value.restaurant);
      }
    });
    var restaurant = [];
    restaurantsTemp.map((value) => {
      var index2 = restaurant.indexOf(value);
      if (index2 === -1) {
        restaurant.push(value);
      }
    });
    return restaurant;
  };

  render() {
    return (
      <div>
        <h1>
          <br />
        </h1>
        <Grid container spacing={2}>
          <Grid item md={3} sm={6} xs={12} className="ml-16 App">
            <FormControl margin="dense" style={{ width: "300px" }}>
              <InputLabel htmlFor="my-input">
                Please Select Restaurants
              </InputLabel>
              <Select
                defaultValue={this.props.restaurant}
                onChange={(event) => this.handleChange(event)}
              >
                {this.getRestaurantsByMealCategory().map((item) => {
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

export default Step2;
