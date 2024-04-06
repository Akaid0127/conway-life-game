import { Button, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

const RuleDesc = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/conwayLife");
  };

  return (
    <>
      <div className={styles.ruleDesc}>
        <div className={styles.headerTitle}>Welcome Conway Game of Life</div>
        <div>
          <Button type="primary" ghost onClick={handleNavigate}>
            Click Here To Enter The Game ~
          </Button>
        </div>
        <div className={styles.content}>
          <Divider>Game Rule</Divider>
          <div className={styles.txt}>
            <p>
              The board is made up of an m x n grid of cells, where each cell has an initial
              state: live represented by a black or dead represented by a white. Each cell interacts
              with its eight neighbors: horizontal, vertical, diagonal, using the following four
              rules:
            </p>
            <p>
              1. Any live cell with fewer than two live neighbors dies as if caused by
              under-population.
            </p>
            <p>
              2. Any live cell with two or three live neighbors lives on to the next generation.
            </p>
            <p>
              3. Any live cell with more than three live neighbors dies, as if by over-population.
            </p>
            <p>
              4. Any dead cell with exactly three live neighbors becomes a live cell, as if by
              reproduction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RuleDesc;
