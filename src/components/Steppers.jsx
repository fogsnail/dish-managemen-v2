import Button from "@material-ui/core/Button";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { actShowOrder } from "../actions/index";
import NotFound from "./NotFound";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});
const steps = ["Step 1", "Step 2", "Step 3", "Review"];
class Steppers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mealCategory: "",
      numberOfPeople: "",
      restaurant: "",
      activeStep: 0,
      items: [],
    };
  }

  handleBack = () => {
    var { history, match, location } = this.props;
    history.goBack();
  };
  validator = () => {
    var { history, match, location } = this.props;
    if (location.pathname === `${match.url}/step1`) {
      if (!this.state.mealCategory) {
        toast.warning("Please select Meal Category!");
        return 0;
      }
    }
    if (location.pathname === `${match.url}/step1`) {
      if (!this.state.numberOfPeople) {
        toast.warning("Please select Number Of People !");
        return 0;
      }
    }
    if (location.pathname === `${match.url}/step2`) {
      if (this.state.restaurant == "") {
        toast.warning("Please select Restaurant !");
        return 0;
      }
    }
    if (location.pathname === `${match.url}/step3`) {
      var { items } = this.state;
      // console.log(items);
      if (items == "") {
        items = [];
      }
      // console.log(items);
      var total = 0;
      items.map((value) => {
        total += value.numberOfServings;
      });
      if (this.state.numberOfPeople > total) {
        toast.warning("Please add Dish or Servings!");
        return 0;
      }
      return 1;
    }
    return 1;
  };
  handleNext = () => {
    // history.push('/new-location')
    // console.log(this.state);
    var { history, match, location } = this.props;
    var stepUrl = "/";
    // var activeStep = this.state.activeStep + 1;
    var result = this.validator();
    if (result === 1) {
      if (location.pathname === `${match.url}`) {
        stepUrl = "/step1";
      } else if (location.pathname === `${match.url}/step1`) {
        stepUrl = "/step2";
      } else if (location.pathname === `${match.url}/step2`) {
        stepUrl = "/step3";
      } else if (location.pathname === `${match.url}/step3`) {
        stepUrl = "/review";
      }
      history.push(`${match.url}${stepUrl}`);
    }
  };

  handleReset = () => {
    var { history } = this.props;
    history.push("/dish-management/step1");

    this.setState({
      activeStep: 0,
      mealCategory: "",
      numberOfPeople: "",
      restaurant: "",
      activeStep: 0,
      items: [],
    });
  };

  checkStep = (activeStep) => {
    // var { activeStep } = this.state;
    switch (activeStep) {
      case 0:
        return "Select meal category and number of people";
      case 1:
        return "Select Restaurants";
      case 2:
        return "Select Dish and Servings";
      default:
        return "Over view";
    }
  };

  onUpdateStep1 = (data) => {
    this.setState(
      {
        mealCategory: data.mealCategory,
        numberOfPeople: data.numberOfPeople,
      },
      function () {
        // console.log(this.state);
      }
    );
  };

  onUpdateStep2 = (data) => {
    this.setState(
      {
        restaurant: data.restaurant,
      },
      function () {
        // console.log(this.state);
      }
    );
  };
  onUpdateStep3 = (data) => {
    // console.log(data);
    this.setState(
      {
        items: data,
      },
      function () {
        this.props.showOrder(this.state);
        // console.log(this.state);
      }
    );
  };

  render() {
    var { activeStep, mealCategory, restaurant } = this.state;
    // console.log(this.props.match);
    var { history, match, location } = this.props;
    // console.log(location.pathname);
    console.log("renderrrrrrrrrrrrrrrrrrrrrrr");

    if (location.pathname == "/dish-management/step1") {
      activeStep = 0;
    } else if (location.pathname == "/dish-management/step2") {
      activeStep = 1;
    } else if (location.pathname == "/dish-management/step3") {
      activeStep = 2;
    } else if (location.pathname == "/dish-management/review") {
      activeStep = 3;
    }

    return (
      <div className="app">
        <div className="Steppers">
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length - 1 ? (
              <div>
                <Button
                  onClick={this.handleReset}
                  variant="contained"
                  color="primary"
                >
                  Finish
                </Button>
              </div>
            ) : (
              <div>
                <h1>
                  <Typography
                    align="center"
                    variant="h5"
                    color="primary"

                    //   className={classes.instructions}
                  >
                    {this.checkStep(activeStep)}
                  </Typography>
                </h1>

                <div>
                  <Button disabled={activeStep === 0} onClick={this.handleBack}>
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Submit" : "Next"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        <hr />
        <div className="container">
          <Switch>
            <Route
              path="/dish-management/step1"
              render={() => (
                <Step1
                  onUpdateStep1={this.onUpdateStep1}
                  listSelected={this.state}
                />
              )}
            />

            <Route
              path="/dish-management/step2"
              render={() => (
                <Step2
                  onUpdateStep2={this.onUpdateStep2}
                  mealCategory={mealCategory}
                  restaurant={restaurant}
                  listSelected={this.state}
                />
              )}
            />

            <Route
              path="/dish-management/step3"
              render={() => (
                <Step3
                  onUpdateStep3={this.onUpdateStep3}
                  mealCategory={mealCategory}
                  restaurant={restaurant}
                  listSelected={this.state}
                />
              )}
            />
            <Route path="/dish-management/review" component={Step4} />
            {/* <Route path="/" component={NotFound} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showOrder: (order) => {
      dispatch(actShowOrder(order));
    },
  };
};
const mapStateToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(Steppers);
