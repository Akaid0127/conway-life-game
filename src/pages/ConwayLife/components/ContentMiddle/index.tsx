import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { heatArrReset } from "../../../../store/modules/gridArray";
import GridItem from "../GridItem";
import styles from "./index.module.css";

const ContentMiddle = () => {
  // redux
  const gridArr = useSelector((state: RootState) => state.gridArray.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(heatArrReset());
  }, []);

  return (
    <>
      <div className={styles.middleContent}>
        <div>
          {gridArr?.map((lineItem, lineIndex) => {
            return (
              <div key={lineIndex} className={styles.gridLine}>
                {lineItem.map((ColItem, ColIndex) => {
                  return (
                    <div key={ColIndex} className={styles.gridCol}>
                      <GridItem gridStatus={ColItem} gridPosition={{ lineIndex, ColIndex }} />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ContentMiddle;
