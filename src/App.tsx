import React from "react";
import config from "./config";
import "./App.css";
import Selector from "./components/Selector";
import Chart from "./components/Chart";
import { Route } from "./interfaces/route.interface";

class App extends React.Component {
  state: {
    origins: Array<any>;
    destinations: Array<any>;
    routes: Array<Route>;
    isLoading: boolean;
    error: boolean;
  } = {
    origins: [],
    destinations: [],
    routes: [],
    isLoading: false,
    error: false,
  };

  async componentDidMount() {
    const res = await fetch(config.apiRoot + "places");
    const places = await res.json();
    this.setState({
      origins: places,
      destinations: places,
    });
  }

  fetchRoutes = async (
    selectedOriginId: string,
    selectedDestinationId: string
  ) => {
    let routes = [];
    try {
      const res = await fetch(
        `${config.apiRoot}routes/?origin=${selectedOriginId}&destination=${selectedDestinationId}`
      );
      routes = await res.json();
    } catch (e) {
      this.setState({
        error: true,
      });
    } finally {
      this.setState({
        routes,
        isLoading: false,
      });
    }
  };

  handleSubmit = (selectedOriginId: string, selectedDestinationId: string) => {
    this.setState(
      {
        error: false,
        isLoading: true,
      },
      () => this.fetchRoutes(selectedOriginId, selectedDestinationId)
    );
  };

  render() {
    const { origins, destinations, isLoading, routes, error } = this.state;

    return (
      <div className="App">
        <h1>Calculate your CO2e footprint</h1>
        <Selector
          origins={origins}
          destinations={destinations}
          onSubmit={this.handleSubmit}
        />
        <div className="Chart">
          {error ? (
            <p className="Alert">
              Error: Unable to retrieve the footprint data. Try again.
            </p>
          ) : isLoading ? (
            <p>Loading...</p>
          ) : routes.length <= 0 ? (
            <p>Select a route first</p>
          ) : (
            <Chart routes={routes} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
