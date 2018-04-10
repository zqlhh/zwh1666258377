import React, { Component } from 'react';
import {Row,Col,BackTop} from 'antd';
import Pc_header from './Pc_header';
import Pc_footer from './Pc_footer';
import Pc_newsImgBlock from './Pc_newsImgBlock';
import CommonComments from './Common_comments';

export default class Pc_details extends Component{    
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
			<div>
                <Pc_header/>
				<Row>
					<Col span={2}></Col>
					<Col span={14} className="container">
						<div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
						<hr/>
						<CommonComments uniquekey={this.props.match.params.uniquekey}/>
					</Col>
					<Col span={6}>
                        <Pc_newsImgBlock count={40} type="top" width="100%" cardTitle="相关新闻" imageWidth="150px"/>
                    </Col>
					<Col span={2}></Col>
				</Row>
                <Pc_footer/>
                <BackTop/>
			</div>
		);
	};
}