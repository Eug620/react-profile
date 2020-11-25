/*
 * @Author: yeyuhang
 * @Date: 2020-11-25 12:00:42
 * @LastEditTime: 2020-11-25 15:20:03
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import './index.scss'
function Login() {
    let timer = new Date().toLocaleTimeString()
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
            <div class="g-container">
                <div class="g-number">{timer}</div>
                <div class="g-contrast">
                    <div class="g-circle"></div>
                    <ul class="g-bubbles">
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