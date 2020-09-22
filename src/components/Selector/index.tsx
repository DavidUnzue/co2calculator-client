import React from "react";

interface SelectorProps {
  origins: Array<any>;
  destinations: Array<any>;
  onSubmit: Function;
}

interface SelectorState {
  originId?: string;
  destinationId?: string;
}

class Selector extends React.Component<SelectorProps, SelectorState> {
  static defaultProps: Partial<SelectorProps> = {
    origins: [],
    destinations: [],
  };

  state = {
    originId: undefined,
    destinationId: undefined,
  };

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state.originId, this.state.destinationId);
  };

  render() {
    const { originId, destinationId } = this.state;
    const { origins, destinations } = this.props;

    return (
      <form className="Selector">
        <div className="Selector-dropdowns">
          <div className="Selector-origin">
            <label htmlFor="originId">From: </label>

            <select
              name="originId"
              id="originId"
              defaultValue="default"
              onChange={this.handleChange}
            >
              <option value="default" disabled>
                -- Origin --
              </option>
              {origins.map((origin: any) => (
                <option
                  key={origin.id}
                  value={origin.id}
                  disabled={origin.id === destinationId}
                >
                  {origin.label}
                </option>
              ))}
            </select>
          </div>
          <div className="Selector-destination">
            <label htmlFor="destinationId">To: </label>

            <select
              name="destinationId"
              id="destinationId"
              defaultValue="default"
              onChange={this.handleChange}
            >
              <option value="default" disabled>
                -- Destination --
              </option>
              {destinations.map((destination: any) => (
                <option
                  key={destination.id}
                  value={destination.id}
                  disabled={destination.id === originId}
                >
                  {destination.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="button"
          className="Selector-button"
          onClick={this.handleSubmit}
          disabled={!originId || !destinationId}
        >
          Calculate
        </button>
      </form>
    );
  }
}

export default Selector;
