import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Pc_index from './js/component/Pc_index';
import Pc_details from './js/component/Pc_details';
import Mobile_index from './js/component/Mobile_index';
import {Route, BrowserRouter} from 'react-router-dom';
 
class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Pc_index}/>
              <Route path="/details/:uniquekey" component={Pc_details}/>
            </div>
          </BrowserRouter>
          {/* <Pc_index/> */}
        </MediaQuery>

        <MediaQuery query='(max-device-width: 1224px)'>
          <Mobile_index/>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
