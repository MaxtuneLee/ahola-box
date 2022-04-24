import { Row, Col } from "@douyinfe/semi-ui";
import "./Footer.sass";

export default function Footer(props) {
  const { content } = props;
  return (
    <Row className="footer" type="flex" justify="center" align="middle">
      <Col>
          <span className="copyright">{content}</span>
      </Col>
    </Row>
  );
}
