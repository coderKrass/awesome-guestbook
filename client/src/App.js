import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state
  state = { data: [] }

  // Fetch passwords after first mount
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // Get the passwords and store them in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        {/* Render the passwords if we have them */}
        {data.length ? (
          <div>
            <h1>5 Passwords.</h1>
            <ul className="passwords">
              {/*
                Generally it's bad to use "index" as a key.
                It's ok for this example because there will always
                be the same number of passwords, and they never
                change positions in the array.
              */}
              {data.map((data, index) =>
                <li key={index}>
                  {data}
                </li>
              )}
            </ul>
            <button
              className="more"
              onClick={this.getData}>
              Get More
            </button>
          </div>
        ) : (
          // Render a helpful message otherwise
          <div>
            <h1>No passwords :(</h1>
            <button
              className="more"
              onClick={this.getData}>
              Try Again?
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;