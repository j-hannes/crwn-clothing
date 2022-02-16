import { FC, useCallback } from "react";
import StripeCheckout from "react-stripe-checkout";

interface Props {
  price: number;
}

export const StripeCheckoutButton: FC<Props> = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KTjRhHyK0O88ohz8Cl1RlLoHer0ZPzD3FuHPFJVwR5TiKXD2eKCESBIA8Xc9DKXdtf2vQkt8qatIXZRQrGvwEMo00xU7UBAUr";

  const onToken = useCallback((token) => {
    console.log("token", token);
    alert("Payment Successful");
  }, []);

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
