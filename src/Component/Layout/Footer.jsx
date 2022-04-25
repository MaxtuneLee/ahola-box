import { Row, Col } from "@douyinfe/semi-ui";
import "./Footer.sass";

export default function Footer(props) {
  const { content } = props;
  return (
    <div className="footer">
      <span className="copyright">{content}</span>
    </div>
  );
}
