import React, { Component } from "react";
import Mobile_header from './Mobile_header';
import Mobile_footer from './Mobile_footer';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
export default class Mobile_index extends Component {
    render() {
        return (
            <div>
                <Mobile_header></Mobile_header>
                <Tabs>
                    <TabPane tab="头条" key="1"></TabPane>
                    <TabPane tab="社会" key="2"></TabPane>
                    <TabPane tab="国内" key="3"></TabPane>
                    <TabPane tab="国际" key="4"></TabPane>
                    <TabPane tab="娱乐" key="5"></TabPane>
                </Tabs>
                <Mobile_footer></Mobile_footer>
            </div>
        )
    }
}