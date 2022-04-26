import { Button } from "@douyinfe/semi-ui";
import { Row, Col } from "@douyinfe/semi-ui";
import React from "react";
import { Fragment } from "react";
import { useRecoilState } from "recoil";
import Header from "../../Component/Layout/Header";
import { userDataState } from "../../main";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@douyinfe/semi-ui";
import Meta from "@douyinfe/semi-ui/lib/es/card/meta";
import { Avatar, TextArea } from "@douyinfe/semi-ui";
import { useState } from "react";
import UserDataApi from "../../Api/UserData";
import { Skeleton } from "@douyinfe/semi-ui";
import Messages from "../../Api/Messages";
import { Collapsible } from "@douyinfe/semi-ui";
import "./index.sass";
import { Form } from "@douyinfe/semi-ui";
import { IconSend } from "@douyinfe/semi-icons";
import SendMessage from "../../Api/SendMessage";
import Footer from "../../Component/Layout/Footer";

export function handleLogout() {
  localStorage.removeItem("token");
  location.reload();
}

function Index() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [writeMessage, setWriteMessage] = useState(false);
  const [messagesUserData, setMessagesUserData] = useState([]);
  const [userData, setUserData] = useState({
    userID: -1,
    username: "",
    email: "",
    lastLogin: "",
    registerTime: "",
  });
  const [MessagesData, setMessagesData] = useState([]);
  let userDataTest = {
    username: "maxtune",
  };
  function handleAdd() {
    setWriteMessage((prev) => !prev);
  }
  function handleSendMessage(values) {
    if (values.message.length > 0) {
      SendMessage(values.message).then((res) => {
        console.log(res);
        location.reload();
      });
    }
  }
  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      navigate("/login");
    } else {
      let token = localStorage.getItem("token");
      let decoded = jwt_decode(token);
      UserDataApi(decoded.id).then(async (res) => {
        await setUserData({
          userID: res.data.data.id,
          username: res.data.data.username,
          email: res.data.data.email,
          lastLogin: res.data.data.last_login,
          registerTime: res.data.data.register_time,
        });
        // console.log(res.data.data.register_time);
      });
      Messages().then((res) => {
        setMessagesData(res.data.data);
      });
    }
  }, []);
  useEffect(() => {
    MessagesData.map((item) => {
      UserDataApi(item.user_id).then((res) => {
        let userData = {
          username: "",
        };
        userData.username = res.data.data.username;
        let newData = { ...item, ...userData };
        setMessagesUserData((pre) => {
          return [...pre, newData];
        });
        // console.log(newData);
      });
    });
  }, [MessagesData]);
  // console.log(messagesUserData);

  return (
    <Fragment>
      <Header title="Ahola Box 留言板" userdata={userDataTest} />
      <Row type="flex" justify="center" style={{marginBottom:80}}>
        <Col span={24}>
          <Row type="flex" justify="center">
            <Col
              span={20}
              style={{
                marginTop: 50,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Collapsible isOpen={writeMessage}>
                <Form
                  style={{ width: "100%" }}
                  render={({ values }) => (
                    <>
                      <Col style={{ marginBottom: 20 }}>
                        <span
                          style={{
                            fontSize: 20,
                            fontWeight: "bold",
                          }}
                        >
                          添加留言 Leave a message
                        </span>
                      </Col>
                      <Row type="flex" align="middle" style={{ width: "100%" }}>
                        <Form.TextArea
                          field="message"
                          noLabel
                          style={{ width: "100%" }}
                          placeholder="想要分享点什么？"
                        />
                      </Row>
                      <Button
                        icon={<IconSend />}
                        theme="solid"
                        htmlType="submit"
                        type="warning"
                        style={{ marginTop: 10, float: "right" }}
                      >
                        提交
                      </Button>
                    </>
                  )}
                  onSubmit={(values) => handleSendMessage(values)}
                />
              </Collapsible>
              {messagesUserData.map((item, index) => {
                // console.log(item)
                return (
                  <Card
                    key={index}
                    style={{
                      width: "100%",
                      marginTop: 20,
                      backgroundColor: "white",
                      boxShadow: "rgb(128 128 128 / 16%) 0px 3px 7px 0px",
                    }}
                    title={
                      <Meta
                        avatar={
                          <Avatar color="orange">
                            {item.username.substring(0, 2)}
                          </Avatar>
                        }
                        title={item.username}
                        description={item.time}
                      />
                    }
                  >
                    <span style={{ fontSize: 18 }}>{item.message}</span>
                  </Card>
                );
              })}
            </Col>
          </Row>
          <Button
            theme="solid"
            className="add-buttom add-buttom-origin"
            onClick={handleAdd}
          >
            +
          </Button>
        </Col>
      </Row>
      <Footer content="&copy;2022 😸️Maxtune"></Footer>
    </Fragment>
  );
}

export default Index;
