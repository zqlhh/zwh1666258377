import React,{Component} from 'react';
import { Row, Col} from 'antd';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Pc_header extends Component{
    constructor(){
        super()
        this.state={
            current:'top',
        }
    }
    handleClick = (e) =>{
        console.log(e)
        this.setState({
            current:e.key,
        })
    }
    render(){
        const style={
            border:"1px solid black"
        }
        return(
            <div>
                <Row style={{marginTop:"5px"}}>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src="https://i.ooxx.ooo/2018/03/22/21ddd981bb3ac0f5558f71c01cda3af5.png" alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Row type="flex" justify="end">
                            <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick} style={{borderBottom:"none"}}>
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
                                <Menu.Item key="shishang">
                                    <Icon type="appstore"/>时尚
                                </Menu.Item>
                            </Menu>
                        </Row>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}