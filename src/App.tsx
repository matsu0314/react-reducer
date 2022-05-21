import { useReducer } from "react";
import { ItemType, ActionType } from "./types";
import Items from "./components/Items";
import Result from "./components/Result";
import "./styles.css";

const checkboxItems: ItemType[] = [
  { id: 1, itemName: "Tシャツ", price: 2400 },
  { id: 2, itemName: "時計", price: 13000 },
  { id: 3, itemName: "ヘッドフォン", price: 2400 },
  { id: 4, itemName: "キャップ", price: 3000 },
  { id: 5, itemName: "サッカーボール", price: 3800 },
  { id: 6, itemName: "シューズ", price: 6800 }
];

// 価格表記
const createMoney = (price: number) => Number(price).toLocaleString();

// 初期値
const initItem: ItemType[] = [{ id: 0, itemName: "", price: 0 }];

//　チェックしたアイテムを格納
const reducer = (itemList: ItemType[], action: ActionType) => {
  switch (action.type) {
    case "ADD":
      return [
        ...itemList,
        {
          id: action.id,
          itemName: action.itemName,
          price: action.price
        }
      ];
    case "DELETE":
      const deleteItemList = itemList.filter((item) => item.id !== action.id);
      return deleteItemList;
    default:
      return itemList;
  }
};

export default function App() {
  // useReducer 初期化
  const [itemList, dispatch] = useReducer(reducer, initItem);

  // チェックボックスをクリック
  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target.checked) {
      dispatch({
        type: "ADD",
        id: Number(target.dataset.id),
        itemName: target.dataset.name,
        price: Number(target.dataset.price)
      });
    } else {
      dispatch({
        type: "DELETE",
        id: Number(target.dataset.id)
      });
    }
  };

  return (
    <div>
      <p className="itemName">商品をチェックすると合計金額が反映されます</p>
      <Result itemList={itemList} createMoney={createMoney} />
      <Items
        onCheck={onCheck}
        checkboxItems={checkboxItems}
        createMoney={createMoney}
      />
    </div>
  );
}
