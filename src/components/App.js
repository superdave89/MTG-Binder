import React from "react";
import scryfall from "../api/Scryfall";
import SearchBar from "./SearchBar";
import CardInfo from "./CardInfo";
import CardDisplay from "./CardDisplay";

class App extends React.Component {
  state = { card: {}, isLoading: false };

  onSearchSubmit = async (name) => {
    const response = await scryfall.get("/cards/named", {
      params: { fuzzy: name },
    });

    this.setState({ card: response.data });
    this.setState({ isLoading: true });
  };

  render() {
    // let isLoading = this.state.isLoading;

    // if (isLoading) {
    //   return (
    //     <div>
    //       <SearchBar />
    //       <h1>Loading..</h1> <div>Found: {this.state.card.name}</div>
    //       <div>Artist: {this.state.card.artist}</div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    // <SearchBar onSubmit={this.onSearchSubmit} />
    //       <CardInfo />
    //     </div>
    //   );
    // }

    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />

        {/* <div>
          {!this.state.card.image_uris ? null : (
            <img
              src={this.state.card.image_uris.normal}
              alt={this.state.card.name}
            />
          )}
        </div> */}

        <CardDisplay card={this.state.card} />

        <CardInfo card={this.state.card} />
      </div>
    );
  }
}

export default App;
