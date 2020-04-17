import React from "react";

class SearchBar extends React.Component {
  state = { name: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.props);

    this.props.onSubmit(this.state.name);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Card Search</label>
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
