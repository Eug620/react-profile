/*
 * @Author: yeyuhang
 * @Date: 2020-11-25 11:35:03
 * @LastEditTime: 2020-11-25 11:42:05
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import Page1 from '../reviews/page1.js';
import Page2 from '../reviews/page2.js';
import React from 'react';
import {Router,Route,Switch,Redirect} from 'react-router';
import { createHashHistory } from "history";
const history = createHashHistory();

class RouterConfig extends React.Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path='/' exact render={()=>(
                        <Redirect to='/Page1'/>
                    )}/>
                    <Route path='/Page1' component={Page1}/>
                    <Route path='/Page2' component={Page2}/>
                </Switch>
            </Router>
        )
    }
}
export default RouterConfig;
