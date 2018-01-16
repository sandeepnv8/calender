import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount = {};

  render() {
    const weeks = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];
    const time = [];
    for (let i = 1; i <= 24; i++) {
      time.push(i+':00');
    }
    //  console.log(time)
    return (
      <div className="App">
        <div>
          <table id="calender">
            <tr>
              <th />
              {weeks.map(week => {
                return <th>{week}</th>;
              })}
            </tr>
            {time.map(t => {
              return (
                <tr>
                  <td>{t}</td>{" "}
                  {weeks.map(week => {
                    return <td>{}</td>;
                  })}{" "}
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
