import { Tag } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import styles from "./index.module.css";

const ContentScore = () => {
  // redux
  const gridArr = useSelector((state: RootState) => state.gridArray.value);

  const countOnes = (arr: number[][]): number => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === 1) {
          count++;
        }
      }
    }
    return count;
  };

  return (
    <>
      <div className={styles.scoreContent}>
        <span>Current number of alive cells is: </span>
        <span>
          <Tag bordered={false} color="processing">
            {countOnes(gridArr)}
          </Tag>
        </span>
      </div>
    </>
  );
};

export default ContentScore;
