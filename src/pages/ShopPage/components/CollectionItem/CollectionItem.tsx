import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { FC } from "react";
import { connect } from "react-redux";

import { itemAddedToCart } from "../../../../features/cart/cart-slice";
import { CollectionItem as CollectionItemType } from "../../../../features/cart/types";
import {
  Button,
  Footer,
  Image,
  Main,
  Name,
  Price,
} from "./CollectionItem.styles";

interface Props {
  item: CollectionItemType;
  itemAddedToCart: ActionCreatorWithPayload<CollectionItemType>;
}

const CollectionItemInner: FC<Props> = ({ item, itemAddedToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <Main>
      <Image style={{ backgroundImage: `url(${imageUrl})` }} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button inverted onClick={() => itemAddedToCart(item)}>
        Add to cart
      </Button>
    </Main>
  );
};

const mapDispatch = {
  itemAddedToCart,
};

export const CollectionItem = connect(null, mapDispatch)(CollectionItemInner);
