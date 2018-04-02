import React, { Component } from "react";
import Mobile_header from './Mobile_header';
import Mobile_footer from './Mobile_footer';
import Mobile_newsBlock from './Mobile_newsBlock';
import Mobile_list from './Mobile_list';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
export default class Mobile_index extends Component {
    render() {
        return (
            <div>
                <Mobile_header></Mobile_header>
                <Tabs className="Mobile_NewsBlockTabs">
                    <TabPane tab="头条" key="1">
                        {/* <Mobile_newsBlock count="12" type="top" width="100%" bordered="false"/> */}
                        <Mobile_list count="20" type="top"/>
                    </TabPane>
                    <TabPane tab="社会" key="2">
                        {/* <Mobile_newsBlock count="12" type="shehui" width="100%" bordered="false"/>   */}
                    </TabPane>
                    <TabPane tab="国内" key="3">
                        {/* <Mobile_newsBlock count="12" type="guonei" width="100%" bordered="false"/>    */}
                    </TabPane>
                    <TabPane tab="国际" key="4">
                        {/* <Mobile_newsBlock count="12" type="guoji" width="100%" bordered="false"/>    */}
                    </TabPane>
                    <TabPane tab="娱乐" key="5">
                        {/* <Mobile_newsBlock count="12" type="yule" width="100%" bordered="false"/>    */}
                    </TabPane>
                </Tabs>
                <Mobile_footer></Mobile_footer>
            </div>
        )
    }
}