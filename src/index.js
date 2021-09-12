import React from 'react';
import ReactDOM  from 'react-dom';
// functional component

// const App = () => {
  // window.navigator.geolocation.getCurrentPosition(
    // (position) => console.log(position),
    // (err) => console.log(err)
  // );
// 
  // return <div>Latitude: </div>;
// };

// class component
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={ lat: null, errorMessage: '' }

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude})
      },
      err => {
        this.setState({ errorMessage: err.message })
      }
    );
  };

  render () {
    if(!this.state.lat && this.state.errorMessage) {
      return <div> error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }

    return <div>Loading</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))