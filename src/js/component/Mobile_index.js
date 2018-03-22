import React,{Component} from "react";
import Mobile_header from './Mobile_header';
import Mobile_footer from './Mobile_footer';
export default class Mobile_index extends Component{
    render(){
        return(
            <div>
                <Mobile_header></Mobile_header>
                <Mobile_footer></Mobile_footer>
            </div>
        )
    }
}