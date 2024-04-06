import { Button } from "antd";
import { ArrowLeftOutlined, GithubOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

const CreditsLink = () => {
  const navigate = useNavigate();

  const handleConway = () => {
    navigate("/conwayLife");
  };

  return (
    <>
      <div className={styles.creditsLink}>
        <div className={styles.navigate}>
          <Button type="link" onClick={handleConway}>
            <ArrowLeftOutlined />
            Back To Conway Life
          </Button>
          <div></div>
        </div>
        <div className={styles.creditsContent}>
          <GithubOutlined style={{ fontSize: "46px", marginBottom: "24px" }} />
          <p>Name: Zhiyuan Lei</p>
          <p>
            Github: <a href="https://github.com/Akaid0127">https://github.com/Akaid0127</a>
          </p>
          <p>Other: Unmarried ~ </p>
        </div>
      </div>
    </>
  );
};

export default CreditsLink;
