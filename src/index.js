/*
 * @Author: yeyuhang
 * @Date: 2020-11-25 11:14:13
 * @LastEditTime: 2020-11-25 11:45:16
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouterConfig from './Router/index'

ReactDOM.render(
  <RouterConfig/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
