import { Avatar } from "@douyinfe/semi-ui";
import { Dropdown } from "@douyinfe/semi-ui";
import { Row, Col } from "@douyinfe/semi-ui";
import { useEffect } from "react";
import { useState } from "react";
import { handleLogout } from "../../Pages/Index";
import "./Header.sass";

export default function Header(props) {
  function LoginItems() {
    if (localStorage.getItem("token") !== null && userdata !== undefined) {
      return (
        <Col>
          <Dropdown
            trigger="hover"
            position="bottomRight"
            render={
              <Dropdown.Menu>
                <Dropdown.Item>我的资料</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>登出</Dropdown.Item>
              </Dropdown.Menu>
            }
          >
            <Avatar color="orange" size="default">
              A
            </Avatar>
          </Dropdown>
        </Col>
      );
    } else {
      return <></>;
    }
  }
  const { title, userdata } = props;
  return (
    <Row className="header" type="flex" justify="center" align="middle">
      <Col span={20}>
        <Row type="flex" justify="space-between" align="middle">
          <Col>
            <span className="title">{title}</span>
          </Col>
          <LoginItems />
        </Row>
      </Col>
    </Row>
  );
}
