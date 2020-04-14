import React from "react";
import scryfall from "../api/Scryfall";
import SearchBar from "./SearchBar";
import CardInfo from "./CardInfo";
import CardDisplay from "./CardDisplay";

class App extends React.Component {
  state = { card: {} };

  onSearchSubmit = async (name) => {
    const response = await scryfall.get("/cards/named", {
      params: { fuzzy: name },
    });

    this.setState({ card: response.data });
    console.log(response.data);
    console.log(response.data.prices.usd);
    console.log(response.data.image_uris.normal);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div>Found: {this.state.card.name}</div>
        <div>Artist: {this.state.card.artist}</div>
        <div>Price: {this.state.card.prices.usd}</div>
        {/* <img
          src={this.state.card.image_uris.normal}
          alt={this.state.card.name}
        /> */}
        <CardDisplay card={this.state.card} />

        <CardInfo card={this.state.card} />
      </div>
    );
  }
}

export default App;
