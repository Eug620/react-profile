/*
 * @Author: yeyuhang
 * @Date: 2020-11-25 12:00:42
 * @LastEditTime: 2020-11-27 16:05:53
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import './index.scss'
function Login() {
    let timer = new Date().toTimeString().substring(0,8)
    setInterval(()=>{
        timer = new Date().toTimeString().substring(0,8)
    })
    return (
        <div className="App">
            {/* bg */}
            <div className="container">
                <div className="window">
                    <div className="moon"></div>
                </div>
                <div className="floor"></div>
                <div className="door"></div>
            </div>
            {/* 时间 */}
            <div className="g-container">
                <div className="g-number">{timer}</div>
                <div className="g-contrast">
                    <div className="g-circle"></div>
                    <ul className="g-bubbles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Login;