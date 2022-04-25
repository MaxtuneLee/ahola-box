import { Row, Col } from "@douyinfe/semi-ui";
import "./Header.sass";

export default function Header(props) {
  const { title } = props;
  return (
    <Row className="header" type="flex" justify="center" align="middle">
      <Col span={20}>
        <Col>
          <span className="title">{title}</span>
        </Col>
      </Col>
    </Row>
  );
}
