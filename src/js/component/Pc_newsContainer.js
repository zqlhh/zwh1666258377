import React, { Component } from "react";
import Pc_newsBlock from './Pc_newsBlock';
import { Row, Col } from 'antd';
import {Tabs,Carousel } from 'antd';
import Pc_newsImgBlock from './Pc_newsImgBlock';
const TabPane = Tabs.TabPane;
export default class Pc_newsContainer extends Component{
    render(){
        const settings={
            dots:true,
            infinite:true,
            speed: 500,
            slidesToShow:1,
            aotoplay:true
        }

        return(
            <div>
				<Row>
					<Col span={2}></Col>
					<Col span={20} className="container">
            <div className="leftContainer">
              <div className="carousel">
                <Carousel {...settings}>
                  <div><img src="https://i.ooxx.ooo/2018/03/27/56984923bf754db8f759869398648a40.jpg"/></div>
                  <div><img src="https://i.ooxx.ooo/2018/03/27/06b85c855b127b984f26e954953302c3.jpg"/></div>
                  <div><img src="https://i.ooxx.ooo/2018/03/27/06b85c855b127b984f26e954953302c3.jpg"/></div>
                  <div><img src="https://i.ooxx.ooo/2018/03/27/06b90f8aaa42a9967e7a8e96a15f0db9.jpg"/></div>
                </Carousel>
              </div>
            </div>
						<Tabs className="tabs_news">
							<TabPane tab="头条新闻" key="1">
								<Pc_newsBlock count={11} type="top" width="100%" bordered="false" />
							</TabPane>
							<TabPane tab="国际" key="2">
								<Pc_newsBlock count={11} type="guoji" width="100%" bordered="false" />
							</TabPane>
						</Tabs>
						<div>
							<Pc_newsImgBlock count={6} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px"/>
							<Pc_newsImgBlock count={10} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px"/>
						</div>
          </Col>
					<Col span={2}></Col>
				</Row>
			</div>
        )
    }
}