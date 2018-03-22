import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Pc_index from './js/component/Pc_index';
import Mobile_index from './js/component/Mobile_index';
 
class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <Pc_index/>
        </MediaQuery>

        <MediaQuery query='(max-device-width: 1224px)'>
          <Mobile_index/>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
