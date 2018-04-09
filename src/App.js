import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Pc_index from './js/component/Pc_index';
import Pc_details from './js/component/Pc_details';
import Pc_usercenter from './js/component/Pc_usercenter';
import Mobile_usercenter from './js/component/Mobile_usercenter';
import Mobile_index from './js/component/Mobile_index';
import Mobile_newsDetails from './js/component/Mobile_newsDetails';
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
              <Route path="/Pc_usercenter" component={Pc_usercenter}/>
            </div>
          </BrowserRouter>
          {/* <Pc_index/> */}
        </MediaQuery>

        <MediaQuery query='(max-device-width: 1224px)'>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Mobile_index}/>
              <Route path="/details/:uniquekey" component={Mobile_newsDetails}/>
              <Route path="/Mobile_usercenter" component={Mobile_usercenter}/>
            </div>
          </BrowserRouter>
          {/* <Mobile_index/> */}
        </MediaQuery>
      </div>
    );
  }
}

export default App;
