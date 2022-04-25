import { Button, Col, Form, Input, Row, Typography } from "@douyinfe/semi-ui";
import { Fragment, useState } from "react";
import "./Login.sass";
import Footer from "../../Component/Layout/Footer";
import Header from "../../Component/Layout/Header";
import { IconKey, IconKeyStroked, IconUserStroked } from "@douyinfe/semi-icons";
import loginImg from "../../Images/login.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginApi from "../../Api/Login";
import { useEffect } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState(false);

  const { Title } = Typography;
  function handleNavigatetoRegister() {
    navigate("/register");
  }
  function handleLogin(values) {
    setLoading(true);
    setInputError(false);
    let username = values.username;
    let password = values.password;
    LoginApi(username, password).then(res => {
      if (res.data.status === 200) {
        setTimeout(() => {
          localStorage.setItem("token", res.data.access_token);
          setLoading(false);
          navigate("/");
        }, 2000)
      }
    }).catch(res => {
      setInputError(true);
      console.log(res)
      setLoading(false);
    })
  }
  useEffect(() => {
    axios({
      method: 'get',
      url: '/api/'
    }).then(res => {
      console.log(res)
    })
  }, [])
  console.log(inputError)
  return (
    <Fragment>
      {/* 我这边给Header和Footer单独写了组件，详细看 📁️Component/Layout */}
      <Header title="Ahola Box 留言板" />
      <Row type="flex" justify="center" className="loginBody" align="middle">
        <Col span={20}>
          <Row
            type="flex"
            justify="center"
            align="middle"
            style={{ marginTop: 30 }}
          >
            <img src={loginImg} height="250" className="loginImg" />
            <Col>
              <Title heading={2} className="title">
                登录 Login
              </Title>
              <Form render={({ values }) => (
                <>
                  <Form.Input
                    prefix={<IconUserStroked />}
                    placeholder="请输入用户名"
                    id="username"
                    noLabel
                    required
                    field="username"
                    validateStatus={inputError ? "error" : "default"}
                    className="spacing"
                    size="large"
                    disabled={loading}
                  />
                  <Form.Input
                    prefix={<IconKeyStroked />}
                    placeholder="请输入密码"
                    noLabel
                    id="password"
                    validateStatus={inputError ? "error" : "default"}
                    field="password"
                    required
                    size="large"
                    disabled={loading}
                  />
                  <Row
                    type="flex"
                    justify="space-between"
                    align="middle"
                    style={{ marginTop: 30 }}
                  >
                    <Col>
                      <Button
                        theme="solid"
                        type="primary"
                        style={{ marginRight: 8, width: 120 }}
                        htmlType='submit'
                        loading={loading}
                      >
                        登录
                      </Button>
                    </Col>
                    <Col style={{ display: "flex", alignItems: "center" }}>
                      <Button
                        theme="borderless"
                        type="tertiary"
                        style={{ marginRight: 8 }}
                        onClick={handleNavigatetoRegister}
                      >
                        还没有帐号？
                      </Button>
                    </Col>
                  </Row>
                </>
              )} onSubmit={values => { handleLogin(values) }}>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
}
