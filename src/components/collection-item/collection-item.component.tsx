import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { FC } from "react";
import { connect } from "react-redux";

import { itemAddedToCart } from "../../features/cart/cart-slice";
import { ShopItem } from "../../features/cart/types";
import { CustomButton } from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

interface Props {
  item: ShopItem;
  itemAddedToCart: ActionCreatorWithPayload<ShopItem>;
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
