import React from "react";
import scryfall from "../api/Scryfall";
import SearchBar from "./SearchBar";
// import CardDisplay from "./CardDisplay";

class App extends React.Component {
  state = { card: {} };

  onSearchSubmit = async (name) => {
    const response = await scryfall.get("/cards/named", {
      params: { fuzzy: name },
    });

    this.setState({ card: response.data });
    console.log(response.data);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div>Found: {this.state.card.name}</div>
        <div>Artist: {this.state.card.artist}</div>
        {/* <img
          src={this.state.card.image_uris.normal}
          alt={this.state.card.name}
        /> */}
        {/* <CardDisplay card={this.state.card.image_uris.normal} /> */}
      </div>
    );
  }
}

export default App;
