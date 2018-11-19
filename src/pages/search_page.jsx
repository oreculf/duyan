import React from "react";
import config from "../config";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=${
        config.alphaVantageAPIKey
      }`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error("Failed to retrieve data for some reason");
      })
      .then(({ "Time Series (Daily)": dailyStats }) => {
        this.setState({ data: dailyStats });
        // Time Series Daily: { 2018-11-02: { 1. open: "", 2. volume: "" } }
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.log("Errored out in retrieving!");
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>Search</h1>
        {data &&
          Object.keys(data).map(day => (
            <div key={day}>
              <h2>{day}</h2>
              {Object.keys(data[day]).map(dayKey => (
                <p key={dayKey}>
                  {dayKey}: {data[day][dayKey]}
                </p>
              ))}
            </div>
          ))}
      </div>
    );
  }
}

export default SearchPage;
