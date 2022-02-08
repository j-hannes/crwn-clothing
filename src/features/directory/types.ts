import { CollectionItem } from "../cart/types";

export interface Collection {
  id: number;
  title: string;
  routeName: string;
  items: CollectionItem[];
}
