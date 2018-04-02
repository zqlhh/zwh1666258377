import React,{Component} from 'react';
import { Row, Col} from 'antd';
import {Link, BrowserRouter} from 'react-router-dom';
import { Menu, Icon, Tabs, message, Form,Input,Button,CheckBox,Modal} from 'antd';
const TabPane = Tabs.TabPane;
const FormItem=Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Pc_header extends Component{
    constructor() {
		super();
		this.state = {
			current: 'top',
			modalVisible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userid: 0
		};
	};

	componentWillMount(){
		if (localStorage.userid!='') {
            this.setState({hasLogined:true});
            //组建加载前读取本地缓存 setState
            this.setState({userNickName:localStorage.userNickName,userid:localStorage.userid});
            console.log(localStorage.userNickName)
            console.log(localStorage.userid)
		}
	};

	setModalVisible(value)
	{
		this.setState({modalVisible: value});
	};
	handleClick(e) {
		if (e.key == "register") {
			this.setState({current: 'register'});
			this.setModalVisible(true);
		} else {
			{
				this.setState({current: e.key});
			}
		}
	};
	handleSubmit(e)
	{
		//页面开始向 API 进行提交数据
		e.preventDefault();
		var myFetchOptions = {
			method: 'GET'
		};
		var formData = this.props.form.getFieldsValue();
		console.log(formData);//返回表单输入内容
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
		+ "&username="+formData.userName+"&password="+formData.password
		+"&r_userName=" + formData.r_userName + "&r_password="
		+ formData.r_password + "&r_confirmPassword="
		+ formData.r_confirmPassword, myFetchOptions)
		.then(response => response.json())
		.then(json => {
            console.log(json)//返回返回的json内容
			this.setState({userNickName: json.UserId, userid: json.UserId});
            localStorage.userid= json.UserId;
			localStorage.userNickName = json.UserId;
		});
		if (this.state.action=="login") {
			this.setState({hasLogined:true});
		}
		message.success("请求成功！");
		this.setModalVisible(false);
	};
	callback(key) {
		if (key == 1) {
			this.setState({action: 'login'});
		} else if (key == 2) {
			this.setState({action: 'register'});
		}
	};
	logout(){
		localStorage.userid= '';
		localStorage.userNickName = '';
		this.setState({hasLogined:false});
	};
    render(){
        let {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogined
			? <Menu.Item key="logout" class="register">
					<Button type="primary" htmlType="button">{this.state.userNickName}</Button>
					&nbsp;&nbsp;
					{/* <Link target="_blank"> */}
						<Button type="dashed" htmlType="button"><a href="#" target="_blank">个人中心</a></Button>
					{/* </Link> */}
					&nbsp;&nbsp;
					<Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>退出</Button>
				</Menu.Item>
			: <Menu.Item key="register" class="register">
				<Icon type="appstore"/>注册/登录
			</Menu.Item>;

        const style={
            border:"1px solid black"
        }
        return(
            <header>
                <Row style={{marginTop:"5px"}}>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src="https://i.ooxx.ooo/2018/03/22/21ddd981bb3ac0f5558f71c01cda3af5.png" alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Row >
                            <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}  style={{borderBottom:"none"}}>
                                <Menu.Item key="top">
                                    <Icon type="appstore"/>头条
                                </Menu.Item>
                                <Menu.Item key="shehui">
                                    <Icon type="appstore"/>社会
                                </Menu.Item>
                                <Menu.Item key="guonei">
                                    <Icon type="appstore"/>国内
                                </Menu.Item>
                                <Menu.Item key="guoji">
                                    <Icon type="appstore"/>国际
                                </Menu.Item>
                                <Menu.Item key="yule">
                                    <Icon type="appstore"/>娱乐
                                </Menu.Item>
                                <Menu.Item key="tiyu">
                                    <Icon type="appstore"/>体育
                                </Menu.Item>
                                <Menu.Item key="keji">
                                    <Icon type="appstore"/>科技
                                </Menu.Item>
                                {/* <Menu.Item key="shishang">
                                    <Icon type="appstore"/>时尚
                                </Menu.Item> */}
                                {userShow}
                            </Menu>

                            <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText = "关闭">
                                <Tabs type="card" onChange={this.callback.bind(this)}>
                                    <TabPane tab="登录" key="1">
                                        <Form layout='horizontal' onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                            {getFieldDecorator('r_userName')(
                                                <Input placeholder="请输入您的账号" />
                                            )}
                                            </FormItem>
                                            <FormItem label="密码">
                                            {getFieldDecorator('r_password')(
                                                <Input placeholder="请输入您的密码" />
                                            )}
                                            </FormItem>
                                            <Button type="primary" htmlType="submit">登录</Button>
                                        </Form>
                                    </TabPane>
                                    <TabPane tab="注册" key="2">
                                        <Form layout='horizontal' onSubmit={this.handleSubmit.bind(this)}>
                                            <FormItem label="账户">
                                            {getFieldDecorator('r_userName')(
                                                <Input placeholder="请输入您的账号" />
                                            )}
                                            </FormItem>
                                            <FormItem label="密码">
                                            {getFieldDecorator('r_password')(
                                                <Input placeholder="请输入您的密码" />
                                            )}
                                            </FormItem>
                                            <FormItem label="确认密码">
                                            {getFieldDecorator('r_confirmPassword')(
                                                <Input placeholder="请再次输入您的密码" />
                                            )}
                                            </FormItem>
                                            <Button type="primary" htmlType="submit" >注册</Button>
                                        </Form>
                                    </TabPane>
                                </Tabs>
                            </Modal>




                        </Row>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
}
export default Pc_header = Form.create({})(Pc_header);