import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: "",
      rupees: "",
      euros: null,
    };
  }

  // Method to increment counter
  increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  // Method to say hello with static message
  sayHello = () => {
    alert("Hello! Welcome to React Events Lab");
  };

  // Increase button handler invoking multiple methods
  handleIncreaseClick = () => {
    this.increment();
    this.sayHello();
  };

  // Method to decrement counter
  decrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  // Say welcome method taking argument
  sayWelcome = (msg) => {
    alert(msg);
  };

  // Synthetic event handler for OnPress (using onClick here)
  handlePress = (event) => {
    // event is SyntheticEvent here
    this.setState({ message: "I was clicked" });
  };

  // Currency converter input handler
  handleRupeesChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  // Handle submit to convert rupees to euros
  handleSubmit = (e) => {
    e.preventDefault();
    const { rupees } = this.state;
    // Conversion rate approx: 1 INR = 0.011 EUR (example)
    const euros = rupees ? (parseFloat(rupees) * 0.011).toFixed(2) : null;
    this.setState({ euros });
  };

  render() {
    const { counter, message, rupees, euros } = this.state;
    return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>React Event Handling Examples</h1>

        {/* Counter Buttons */}
        <div>
          <h2>Counter: {counter}</h2>
          <button onClick={this.handleIncreaseClick}>Increment</button>
          <button onClick={this.decrement} style={{ marginLeft: "10px" }}>
            Decrement
          </button>
        </div>

        {/* Say Welcome Button */}
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>
        </div>

        {/* Synthetic event button */}
        <div style={{ marginTop: "20px" }}>
          <button onClick={this.handlePress}>OnPress Button</button>
          {message && <p>{message}</p>}
        </div>

        {/* Currency Convertor */}
        <div style={{ marginTop: "30px" }}>
          <h2>Currency Converter (INR to EUR)</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter Rupees:{" "}
              <input
                type="number"
                value={rupees}
                onChange={this.handleRupeesChange}
                required
              />
            </label>
            <button type="submit" style={{ marginLeft: "10px" }}>
              Convert
            </button>
          </form>
          {euros && (
            <p>
              ₹{rupees} = €{euros}
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
