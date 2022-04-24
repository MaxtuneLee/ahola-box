import { Col, Row } from "@douyinfe/semi-ui";
import { Fragment } from "react";
import "./App.css";
import Footer from "./Component/Layout/Footer";
import Header from "./Component/Layout/Header";

function App() {
  return (
    // // 这个模板每个页面都可使用
    // 还需要做的事情：
    //  - 🔑️写登录界面
    //  - 📱️写登陆后的界面
    //  - 🌏️用路由(react-router-dom)把所有界面都连接起来
    <Fragment>
      {/* 我这边给Header和Footer单独写了组件，详细看 📁️Component/Layout */}
      <Header title="图书管理系统" />
      <Row  type="flex" justify="center">
        <Col span={20}>
          {/* 把内容放在这里 */}
        </Col>
      </Row>
      <Footer content='&copy;2022 🐟CXY621 Powered by 😸️MaxDesign.'/>
    </Fragment>
  );
}

export default App;
