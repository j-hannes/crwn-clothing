# Learning App

...

## Component Tree

- App
  - Header
    - Logo
    - CartIcon
      - ShoppingIcon
    - CartDropdown
      - CustomButton
  - Routes:
    - HomePage
      - Directory
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
    - SignInAndSignUpPage
      - SignIn
        - FormInput
        - CustomButton
      - SignUp
        - FormInput
        - CustomButton
