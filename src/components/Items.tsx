import styles from "./Items.module.css";
import { ItemType } from "../types";

type ItemsType = {
  onCheck: (param: any) => void;
  createMoney: (price: number) => string;
  checkboxItems: ItemType[];
};

const Items: React.FC<ItemsType> = ({
  onCheck,
  createMoney,
  checkboxItems
}) => {
  // URLを取得
  const location = window.location.href;

  return (
    <div>
      <div className={styles.radioArea}>
        {checkboxItems.map((item: ItemType, index: number) => {
          const img = `${location}/images/item${item.id}.png`;
          return (
            <label key={index}>
              <input
                type="checkbox"
                value={item.itemName}
                data-id={item.id}
                data-name={item.itemName}
                data-price={item.price}
                onChange={(e) => onCheck(e)}
              />
              <img src={img} alt="" />
              <p>
                {item.itemName}（+{item.price && createMoney(item.price)}）
              </p>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Items;
