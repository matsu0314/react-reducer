export type ItemType = {
  id: number;
  itemName: string;
  price: number;
};
export type ActionType = {
  type: "ADD" | "DELETE";
  id: number;
  itemName: string;
  price: number;
};
