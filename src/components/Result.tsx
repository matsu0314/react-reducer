import styles from "./Result.module.css";
import { ItemType } from "../types";

type ResultType = {
  itemList: ItemType[];
  createMoney: (price: number) => string;
};

const Result: React.FC<ResultType> = ({ itemList, createMoney }) => {
  // アイテムリストから価格の配列を作成
  const itemListAry = itemList.map((item: any) => item["price"]);
  const totalPrice = itemListAry.reduce((accu: number, curr: number) => {
    return accu + curr;
  });

  return (
    <div className={styles.totalPrice}>
      <p className={styles.content}>
        合計金額: <span>{createMoney(totalPrice)}</span>円
      </p>
    </div>
  );
};

export default Result;
