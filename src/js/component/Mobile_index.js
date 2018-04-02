import React, { Component } from "react";
import Mobile_header from './Mobile_header';
import Mobile_footer from './Mobile_footer';
import Mobile_newsBlock from './Mobile_newsBlock';
import Mobile_list from './Mobile_list';
import { Tabs,Carousel } from 'antd';
const TabPane = Tabs.TabPane;
export default class Mobile_index extends Component {
    render() {
        const settings={
            dots:true,//是否显示面板指示点	
            infinite:true,//无限循环播放
            speed: 500,//动画速度
            slidesToShow:1,//在一张幻灯片中显示几张图片
            aotoplay:true  //是否自动播放
        }
        return (
            <div>
                <Mobile_header></Mobile_header>
                <Tabs className="Mobile_NewsBlockTabs">
                    <TabPane tab="头条" key="1">
                        <div className="carousel" style={{marginTop:"-10px"}}>
                            <Carousel {...settings}>
                            <div><img src={require('../../images/imgblock_1.png')} style={{width:"100%"}}/></div>
                            <div><img src={require('../../images/imgblock_2.png')} style={{width:"100%"}}/></div>
                            <div><img src={require('../../images/imgblock_3.png')} style={{width:"100%"}}/></div>
                            <div><img src={require('../../images/imgblock_4.png')} style={{width:"100%"}}/></div>
                            </Carousel>
                        </div>
                        {/* <Mobile_newsBlock count="12" type="top" width="100%" bordered="false"/> */}
                        <Mobile_list count="20" type="top"/>
                    </TabPane>
                    <TabPane tab="社会" key="2">
                        {/* <Mobile_newsBlock count="12" type="shehui" width="100%" bordered="false"/>   */}
                        <Mobile_list count="20" type="shehui"/>
                    </TabPane>
                    <TabPane tab="国内" key="3">
                        {/* <Mobile_newsBlock count="12" type="guonei" width="100%" bordered="false"/>    */}
                        <Mobile_list count="20" type="guonei"/>
                    </TabPane>
                    <TabPane tab="国际" key="4">
                        {/* <Mobile_newsBlock count="12" type="guoji" width="100%" bordered="false"/>    */}
                        <Mobile_list count="20" type="guoji"/>
                    </TabPane>
                    <TabPane tab="娱乐" key="5">
                        {/* <Mobile_newsBlock count="12" type="yule" width="100%" bordered="false"/>    */}
                        <Mobile_list count="20" type="yule"/>
                    </TabPane>
                </Tabs>
                <Mobile_footer></Mobile_footer>
            </div>
        )
    }
}