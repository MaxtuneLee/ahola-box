import { Button, Col, Input, Row, Typography } from "@douyinfe/semi-ui";
import { Fragment } from "react";
import "./Register.sass";
import Footer from "../../Component/Layout/Footer";
import Header from "../../Component/Layout/Header";
import { IconKey, IconKeyStroked, IconMailStroked, IconUserStroked } from "@douyinfe/semi-icons";
import registerImg from "../../Images/register.png";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const { Title } = Typography;

    function handleNavigatetoLogin() {
        navigate('/login')
    }
    return (
        <Fragment>
            {/* 我这边给Header和Footer单独写了组件，详细看 📁️Component/Layout */}
            <Header title="Ahola Box 留言板" />
            <Row type="flex" justify="center" className="registerBody" align="middle">
                <Col span={20}>
                    <Row
                        type="flex"
                        justify="center"
                        align="middle"
                        style={{ marginTop: 30 }}
                    >
                        <img src={registerImg} height="250" className="registerImg" />
                        <Col>
                            <Title heading={2} className="title">
                                注册 Register
                            </Title>
                            <Input
                                prefix={<IconUserStroked />}
                                showClear={true}
                                placeholder="请输入用户名"
                                className="spacing"
                                size="large"
                            />
                            <Input
                                prefix={<IconMailStroked />}
                                showClear={true}
                                placeholder="请输入邮箱"
                                className="spacing"
                                size="large"
                            />
                            <Input
                                prefix={<IconKeyStroked />}
                                showClear={true}
                                placeholder="请输入密码"
                                size="large"
                                className="spacing"
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
                                    >
                                        注册
                                    </Button>
                                </Col>
                                <Col style={{ display: "flex", alignItems: "center" }}>
                                    <Button
                                        theme="borderless"
                                        type="tertiary"
                                        style={{ marginRight: 8 }}
                                        onClick={handleNavigatetoLogin}
                                    >
                                        返回登录 👉🏻️
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
}
