import React,{Component} from 'react';
import { Row, Col} from 'antd';

export default class Mobile_footer extends Component{
    render(){
        const style={
            border:"1px solid black"
        }
        return(
            <footer>
                <Row style={{marginTop:"5px"}}>
                    <Col span={2}></Col>
                    <Col span={20} className="footer">
                        &nbsp;&nbsp;2018 ReactNews. All Rights Reserved
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        )
    }
}