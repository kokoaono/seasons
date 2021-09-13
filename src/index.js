import React from 'react';
import ReactDOM  from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


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
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render () {
    if(!this.state.lat && this.state.errorMessage) {
      return <div> error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }

    return <Spinner message="Please accept location request"/>;
   }
}

ReactDOM.render(<App />, document.querySelector('#root'))

