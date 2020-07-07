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

export const removeItemFromCart = (cartItems, itemToRemove) =>
  cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
