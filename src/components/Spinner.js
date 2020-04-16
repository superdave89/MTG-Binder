import React from "react";

class Spinner extends React.Component {
  state = { isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });

    this.render() {
        return(<div>Loading..</div>);
            
        
    }
  }
}

export default Spinner;
