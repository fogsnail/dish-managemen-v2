import React, { Component } from "react";
// import "./App.css";
import Steppers from "./Steppers";
import CopyrightIcon from "@material-ui/icons/Copyright";
import { Route, Switch, Link } from "react-router-dom";

class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center ">
          <div>
            <h1 className="text-header header">
              Restaurants Management Software
            </h1>
          </div>
          <Switch>
            <Route
              // exact="true"
              path="/dish-management"
              component={({ history, match, location }) => (
                <Steppers match={match} history={history} location={location} />
              )}
            />
          </Switch>
        </div>
        <div>
          <h1 className="text-header footer">
            <div className="footer_icon">
              <CopyrightIcon />
            </div>
            Coppyright By Hoangtph
          </h1>
        </div>
      </div>
    );
  }
}

export default Container;
