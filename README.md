# Learning App

...

## Component Tree

- App
  - Header
    - Logo
    - CartIcon
      - ShoppingIcon
    - CartDropdown
      - CartItem
      - CustomButton
  - Routes:
    - HomePage
      - MenuItem
    - ShopPage
      - Routes:
        - CollectionOverview
          - CollectionPreview
            - CollectionItem
              - CustomButton
        - CollectionPage
          - CollectionItem
            - CustomButton
    - CheckoutPage
      - CheckoutItem
      - StripeCheckoutButton
    - AuthenticationPage
      - SignIn
        - FormInput
        - CustomButton
      - SignUp
        - FormInput
        - CustomButton
