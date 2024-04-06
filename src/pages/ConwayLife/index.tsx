import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import ContentScore from "./components/ContentScore";
import ContentTop from "./components/ContentTop";
import ContentMiddle from "./components/ContentMiddle";
import ContentBottom from "./components/ContentBottom";
import styles from "./index.module.css";

const ConwayLife = () => {
  const navigate = useNavigate();

  const handleRule = () => {
    navigate("/ruleDesc");
  };
  const handleCredit = () => {
    navigate("/creditsLink");
  };

  return (
    <>
      <div className={styles.conwayLife}>
        <div className={styles.navigate}>
          <Button type="link" onClick={handleRule}>
            <ArrowLeftOutlined />
            Back To Rules
          </Button>
          <Button type="link" onClick={handleCredit}>
            Go To Credits
            <ArrowRightOutlined />
          </Button>
        </div>
        <ContentTop />
        <ContentScore />
        <ContentMiddle />
        <ContentBottom />
      </div>
    </>
  );
};

export default ConwayLife;
