import React, { Component } from "react";
import Pc_header from './Pc_header';
import Pc_footer from './Pc_footer';
import Pc_newsContainer from './Pc_newsContainer'
export default class Pc_index extends Component {
    render() {
        return (
            <div>
                <Pc_header>

                </Pc_header>

                <Pc_newsContainer/>

                <Pc_footer>

                </Pc_footer>
            </div>
        )
    }
}