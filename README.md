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
    - Home
      - MenuItem
    - Shop
      - Routes:
        - CollectionsOverview
          - CollectionPreview
            - CollectionItem
              - CustomButton
        - Collection
          - CollectionItem
            - CustomButton
    - Checkout
      - CheckoutItem
      - StripeCheckoutButton
    - Authentication
      - SignIn
        - FormInput
        - CustomButton
      - SignUp
        - FormInput
        - CustomButton
