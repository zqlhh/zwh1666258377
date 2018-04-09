import React, { Component } from 'react';
import {Row,Col,BackTop} from 'antd';
import Mobile_header from './Mobile_header';
import Mobile_footer from './Mobile_footer';
import Pc_newsImgBlock from './Pc_newsImgBlock';
import CommonComments from './common_comments';

export default class Mobile_newsDetails extends Component{    
	constructor() {
		super();
		this.state = {
			newsItem: ''
		};
	};
	componentDidMount() {
		var myFetchOptions = {
			method: 'GET'
		};
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, myFetchOptions)
        .then(response => response.json())
        .then(json => {
            this.setState({newsItem: json});
			document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
		})
	};
	createMarkup() {
		return {__html: this.state.newsItem.pagecontent};
	};
	render() {
		return (
			<div id="mobileDetailsContainer">
                <Mobile_header/>
                <div class="ucmobileList">
				<Row>
					<Col span={24} className="container">
						<div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
						<hr/>
						<CommonComments uniquekey={this.props.match.params.uniquekey}/>
					</Col>
				</Row>
                <Mobile_footer/>
                <BackTop/>
                </div>
			</div>
		);
	};
}