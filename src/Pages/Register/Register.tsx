import { Button, Col, Input, Row, Typography } from "@douyinfe/semi-ui";
import { Fragment } from "react";
import "./Register.sass";
import Footer from "../../Component/Layout/Footer";
import Header from "../../Component/Layout/Header";
import { IconKey, IconKeyStroked, IconMailStroked, IconUserStroked } from "@douyinfe/semi-icons";
import registerImg from "../../Images/register.png";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form } from "@douyinfe/semi-ui";
import RegisterApi from "../../Api/Register";
import { Notification } from "@douyinfe/semi-ui";

export default function Login() {
    const navigate = useNavigate();
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [inputError, setInputError] = useState(false);
    const { Title } = Typography;

    function handleNavigatetoLogin() {
        navigate('/login')
    }
    function handleRegister(values){
        setLoading(true)
        setInputError(false)
        console.log(values)
        let username = values.username;
        let password = values.password;
        let email = values.email;
        let position:any = 'top'
        let theme:any = 'light'
        let userExist = {
            title: '😭️ 用户已存在',
            content: '换一个用户名再试试吧',
            duration: 4,
            position: position,
            theme: theme,
        }
        let registerSuccess = {
            title: '😁 注册成功',
            content: '欢迎加入Ahola Box',
            duration: 4,
            position: position,
            theme: theme,
        }
        RegisterApi(username, password, email).then(res => {
            if(res.data.status === 200){
                Notification.success(registerSuccess)
                setTimeout(() => {
                    setLoading(false)
                    setRegisterSuccess(true)
                    navigate('/login')
                },2000)
            }
        }).catch(res => {
            if(res=='Error: Request failed with status code 409'){
                Notification.error(userExist)
                setInputError(true);
            }
            setLoading(false);
        })
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
                            <Form render={({ values }) => (
                                <>
                                    <Form.Input
                                        prefix={<IconUserStroked />}
                                        placeholder="请输入用户名"
                                        className="spacing"
                                        field="username"
                                        noLabel
                                        size="large"
                                        required
                                        disabled = {loading}
                                        validateStatus={inputError ? "error" : registerSuccess ? "success" : "default"}
                                    />
                                    <Form.Input
                                        prefix={<IconMailStroked />}
                                        placeholder="请输入邮箱"
                                        noLabel
                                        field="email"
                                        size="large"
                                        type="email"
                                        required
                                        validateStatus={registerSuccess ? "success" : "default"}
                                        disabled = {loading}
                                    />
                                    <Form.Input
                                        prefix={<IconKeyStroked />}
                                        placeholder="请输入密码"
                                        size="large"
                                        noLabel
                                        type="password"
                                        field="password"
                                        validateStatus={registerSuccess ? "success" : "default"}
                                        required
                                        disabled = {loading}
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
                                </>
                            )} onSubmit={values=>handleRegister(values)}></Form>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
}
