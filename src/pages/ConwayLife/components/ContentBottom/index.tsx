import { useEffect, useState } from "react";
import { Button, message } from "antd";
import {
  FireOutlined,
  RetweetOutlined,
  ArrowRightOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { gridModeSet } from "../../../../store/modules/gridMode";
import { gridArraySet, heatArrIterate, heatArrReset } from "../../../../store/modules/gridArray";
import { getInitArr } from "../../../../utils/getInitArr";
import { getLifeStatus } from "../../../../utils/getLifeStatus";

import styles from "./index.module.css";

const ContentScore = () => {
  const [autoPlay, setAutoPlay] = useState<boolean>(false);

  // redux
  const gridArr = useSelector((state: RootState) => state.gridArray.value);
  const gridMode = useSelector((state: RootState) => state.gridMode.value);
  const dispatch = useDispatch();

  const handleHeat = () => {
    dispatch(gridModeSet(gridMode === "normal" ? "heatmap" : "normal"));
    message.success("mode change success");
  };

  const handleReset = () => {
    const changeArr: number[][] = getInitArr(20, 20);
    dispatch(gridArraySet(changeArr));
    dispatch(heatArrReset());
    message.success("reset grid success");
  };

  const handleNext = () => {
    const tempArr = JSON.parse(JSON.stringify(gridArr));
    const changeArr: number[][] = getLifeStatus(tempArr);
    dispatch(heatArrIterate(changeArr));
    dispatch(gridArraySet(changeArr));
    message.success("next frame success");
  };

  const handleAuto = () => {
    setAutoPlay(!autoPlay);
    message.success(!autoPlay ? "auto play success" : "stop play success");
  };

  useEffect(() => {
    let timer: any;
    if (autoPlay) {
      timer = setInterval(() => {
        const tempArr = JSON.parse(JSON.stringify(gridArr));
        const changeArr: number[][] = getLifeStatus(tempArr);
        dispatch(heatArrIterate(changeArr));
        dispatch(gridArraySet(changeArr));
      }, 2000);
    }
    return () => clearInterval(timer);
  }, [autoPlay, gridArr, dispatch]);

  return (
    <>
      <div className={styles.bottomContent}>
        <Button type="primary" ghost icon={<FireOutlined />} onClick={handleHeat}>
          Heatmap
        </Button>
        <Button type="primary" ghost icon={<RetweetOutlined />} onClick={handleReset}>
          Reset Grid
        </Button>
        <Button type="primary" ghost icon={<ArrowRightOutlined />} onClick={handleNext}>
          Next Frame
        </Button>
        <Button
          type="primary"
          ghost
          icon={!autoPlay ? <PlayCircleOutlined /> : <PauseCircleOutlined />}
          onClick={handleAuto}
          style={{ width: "120px" }}
        >
          {!autoPlay ? "Auto Play" : "Stop Play"}
        </Button>
      </div>
    </>
  );
};

export default ContentScore;
