import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { FC } from "react";
import { connect } from "react-redux";

import { itemAddedToCart } from "../../features/cart/cart-slice";
import { CollectionItem as CollectionItemType } from "../../features/cart/types";
import { CustomButton } from "../CustomButton/CustomButton";
import "./styles.scss";

interface Props {
  item: CollectionItemType;
  itemAddedToCart: ActionCreatorWithPayload<CollectionItemType>;
}

const CollectionItemInner: FC<Props> = ({ item, itemAddedToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => itemAddedToCart(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatch = {
  itemAddedToCart,
};

export const CollectionItem = connect(null, mapDispatch)(CollectionItemInner);
