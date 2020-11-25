/*
 * @Author: yeyuhang
 * @Date: 2020-11-25 11:35:03
 * @LastEditTime: 2020-11-25 12:05:06
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import Login from '../pages/login/index';
import Dashboard from '../pages/dashboard/index';
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
                        <Redirect to='/login'/>
                    )}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/dashboard' component={Dashboard}/>
                </Switch>
            </Router>
        )
    }
}
export default RouterConfig;
