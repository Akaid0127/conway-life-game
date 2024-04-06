import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, InputNumber, message } from "antd";
import { gridArraySet, heatArrReset } from "../../../../store/modules/gridArray";
import { getInitArr } from "../../../../utils/getInitArr";
import styles from "./index.module.css";

const ContentTop = () => {
  const [gridWidth, setGridWidth] = useState<number>(20);
  const [gridHeight, setGridHeight] = useState<number>(20);

  const dispatch = useDispatch();

  const handleChangeWidth = (value: number | null) => {
    if (value === null) {
      return;
    } else {
      setGridWidth(value);
    }
  };

  const handleChangeHeight = (value: number | null) => {
    if (value === null) {
      return;
    } else {
      setGridHeight(value);
    }
  };

  const handleSubmitSize = () => {
    if (gridWidth < 3 || gridWidth > 40 || gridHeight < 3 || gridHeight > 40) {
      message.error("The width and height should be between 3 and 40");
    } else {
      dispatch(gridArraySet(getInitArr(gridWidth, gridHeight)));
      dispatch(heatArrReset());
    }
  };

  return (
    <>
      <div className={styles.topContent}>
        <div className={styles.optInp}>
          <div className={styles.inpItem}>
            Row: <InputNumber defaultValue={20} onChange={handleChangeWidth} value={gridWidth} />
          </div>
          <div className={styles.inpItem}>
            Col: <InputNumber defaultValue={20} onChange={handleChangeHeight} value={gridHeight} />
          </div>
        </div>
        <Button type="primary" onClick={handleSubmitSize}>
          Change Size
        </Button>
      </div>
    </>
  );
};

export default ContentTop;
