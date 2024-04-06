import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { gridArraySet, heatArrReset } from "../../../../store/modules/gridArray";
import styles from "./index.module.css";

interface IProps {
  gridStatus: number;
  gridPosition: {
    lineIndex: number;
    ColIndex: number;
  };
}

const heatColor: string[] = [
  "#fff2e8",
  "#ffd8bf",
  "#ffbb96",
  "#ff9c6e",
  "#ff7a45",
  "#fa541c",
  "#d4380d",
  "#ad2102",
  "#871400",
  "#610b00",
];

const GridItem = ({ gridStatus, gridPosition }: IProps) => {
  // redux
  const gridArr = useSelector((state: RootState) => state.gridArray.value);
  const gridHeat = useSelector((state: RootState) => state.gridArray.heatArr);
  const gridMode = useSelector((state: RootState) => state.gridMode.value);
  const dispatch = useDispatch();

  const handleClickItem = () => {
    let tempArr = JSON.parse(JSON.stringify(gridArr));
    tempArr[gridPosition.lineIndex][gridPosition.ColIndex] = gridStatus === 1 ? 0 : 1;
    dispatch(gridArraySet(tempArr));
    dispatch(heatArrReset());
  };

  return (
    <>
      <div
        onClick={handleClickItem}
        className={styles.gridItem}
        style={
          gridMode === "normal"
            ? { backgroundColor: gridStatus ? "#434343" : "#ffffff" }
            : {
                backgroundColor: heatColor[gridHeat[gridPosition.lineIndex][gridPosition.ColIndex] - 1],
              }
        }
      ></div>
    </>
  );
};

export default GridItem;
