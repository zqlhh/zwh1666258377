import React, { Component } from "react";
import { Row,Col} from 'antd';
import {Link, BrowserRouter} from 'react-router-dom';



// 新闻块,内容是由Li标签包围的新闻标题,被引入newsContainer的新闻Tabs中


export default class Mobile_list extends Component{
    constructor() {
		super();
		this.state = {
			news: ''
		};
	}
	componentWillMount() {
		var myFetchOptions = {
			method: 'GET'
		};
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" 
        + this.props.type 
        + "&count="+ this.props.count, myFetchOptions)
		// 这里的this.props.type获得父组件调用此组件时传来的 [新闻调取类型]
		// 这里的this.props.count获得父组件调用此组件时传来的 [新闻调取条数]
		.then(response => response.json())
		.then(json => this.setState({news: json}));
	};

    render(){
		const {news} = this.state;
		const liStyle={
			width:"360px",
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis",
			marginBottom:"4px"
		}
		const newsList = news.length
			? news.map((newsItem, index) => (
				<section key={index} className="m_article list-item special-section clearfix">
                    <BrowserRouter>
                        <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                            <div className="m_article_img">
                                <img src={newsItem.thumbnail_pic_s} alt={newsItem.title}/>
                            </div>
                            <div className="m_article_info">
                                <div className="m_article_title">
                                    <span>{newsItem.title}</span>
                                </div>
                                <div className="m_article_desc clearfix">
                                    <div className="m_article_desc_l">
                                        <span className="m_article_channel">{newsItem.realtype}</span>
                                        <span className="m_article_time">{newsItem.date}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </BrowserRouter>
                </section>
			))
			: '没有加载到任何新闻';
		return (
			<div>
				<Row>
                    <Col span={24}>
                        {newsList}
                    </Col>
                </Row>
			</div>
		);
    }
}