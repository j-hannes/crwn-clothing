import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { FC } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { itemAddedToCart } from "../../features/cart/cart-slice";
import { CollectionItem as CollectionItemType } from "../../features/cart/types";
import { CustomButton } from "../CustomButton/CustomButton";

interface Props {
  item: CollectionItemType;
  itemAddedToCart: ActionCreatorWithPayload<CollectionItemType>;
}

const Container = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

const Price = styled.span`
  width: 10%;
`;

const CollectionItemInner: FC<Props> = ({ item, itemAddedToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <Container>
      <Image style={{ backgroundImage: `url(${imageUrl})` }} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <AddButton inverted onClick={() => itemAddedToCart(item)}>
        Add to cart
      </AddButton>
    </Container>
  );
};

const mapDispatch = {
  itemAddedToCart,
};

export const CollectionItem = connect(null, mapDispatch)(CollectionItemInner);
