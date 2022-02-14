import { CollectionItem } from "../cart/types";

export type CollectionName =
  | "hats"
  | "sneakers"
  | "jackets"
  | "womens"
  | "mens";

export interface Collection {
  id: number;
  title: string;
  routeName: string;
  items: CollectionItem[];
}
