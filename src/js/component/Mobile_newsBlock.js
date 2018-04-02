import React, { Component } from "react";
import { Card} from 'antd';
import {Link, BrowserRouter} from 'react-router-dom';

// 新闻块,内容是由Li标签包围的新闻标题,被引入newsContainer的新闻Tabs中

export default class Pc_newsBlock extends Component{
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
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
		// 这里的this.props.type获得父组件调用此组件时传来的 [新闻调取类型]
		// 这里的this.props.count获得父组件调用此组件时传来的 [新闻调取条数]
		.then(response => response.json())
		.then(json => this.setState({news: json}));
	};

    render(){
        const {news} = this.state;
		const liStyle={
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis",
            marginBottom:"4px"
		}
		const newsList = news.length
			? news.map((newsItem, index) => (
				<li key={index} className="Mobile_newsBlock_li" style={liStyle}>
                    <BrowserRouter>
                        <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                            {newsItem.title}
                        </Link>
                    </BrowserRouter>
				</li>
			))
			: '没有加载到任何新闻';
		return (
			<div className="Mobile_topNewsList">
				<Card>
					<ul className="Mobile_newsBlock_ul">
						{newsList}
					</ul>
				</Card>
			</div>
		);
    }
}