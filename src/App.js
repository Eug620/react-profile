/*
 * @Author: yeyuhang
 * @Date: 2020-11-25 11:14:13
 * @LastEditTime: 2020-11-25 11:27:49
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
// import logo from './logo.svg';
import './App.css';
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>antd version: {version}</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
      </header>
    </div>
  );
}

export default App;
