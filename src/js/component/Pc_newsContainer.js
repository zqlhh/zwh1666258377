import React, { Component } from "react";
import Pc_newsBlock from './Pc_newsBlock';
import { Row, Col,Tabs,Carousel } from 'antd';
import Pc_newsImgBlock from './Pc_newsImgBlock';
const TabPane = Tabs.TabPane;
export default class Pc_newsContainer extends Component{
    render(){
        const settings={
            dots:true,//是否显示面板指示点	
            infinite:true,//无限循环播放
            speed: 500,//动画速度
            slidesToShow:1,//在一张幻灯片中显示几张图片
            aotoplay:true  //是否自动播放
        }
        const leftImgBlock={
          display:"inline-block",
          marginTop:"10px"
        }

        return(
            <div>
				<Row >
					<Col span={2}></Col>
					<Col span={20} className="container">
            <div className="leftContainer">
              <div className="carousel">
                <Carousel {...settings}>
                  <div><img src={require('../../images/imgblock_1.png')}/></div>
                  <div><img src={require('../../images/imgblock_2.png')}/></div>
                  <div><img src={require('../../images/imgblock_3.png')}/></div>
                  <div><img src={require('../../images/imgblock_4.png')}/></div>
                </Carousel>
              </div>
              <div style={leftImgBlock}>
                <Pc_newsImgBlock count={4} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="162px"/>
              </div>
            </div>

            {/* 中间的新闻块内容, Pc_newsBlock 为新闻块中新闻内容,Li标签形式呈现  */}
						<Tabs className="tabs_news">
							<TabPane tab="头条" key="1">
								<Pc_newsBlock count={17} type="top" width="100%" bordered="false" />
							</TabPane>
							<TabPane tab="国际" key="2">
								<Pc_newsBlock count={17} type="guoji" width="100%" bordered="false" />
							</TabPane>
							<TabPane tab="娱乐" key="3">
								<Pc_newsBlock count={17} type="yule" width="100%" bordered="false" />
							</TabPane>
						</Tabs>



						<div style={{marginTop:"15px"}}>
							<Pc_newsImgBlock count={6} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="155px"/>
              <div style={{marginTop:"15px"}}></div>
							<Pc_newsImgBlock count={10} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="155px"/>
						</div>
          </Col>
					<Col span={2}></Col>
				</Row>
			</div>
        )
    }
}