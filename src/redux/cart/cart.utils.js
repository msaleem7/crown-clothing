export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartitem) => cartitem.id === itemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartitem) =>
      cartitem.id === itemToAdd.id
        ? { ...cartitem, quantity: cartitem.quantity + 1 }
        : cartitem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
