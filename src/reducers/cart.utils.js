export const addItemsToCart = (cartItems, cartItemToAdd, number) => {
  // console.log("cartAdd: ", cartItemToAdd._id);
  // console.log("cartInit: ", cartItems);

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem._id === cartItemToAdd._id
  ); // check item exxited in array local yet?
  // console.log("exist item: ", existingCartItem);
  if (existingCartItem !== undefined) {
    return cartItems.map((cartItem) =>
      cartItem._id === cartItemToAdd._id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + number,
            totalPriceByItem:
              cartItem.price.$numberDecimal * (cartItem.quantity + number),
          }
        : cartItem
    );
  }
  // console.log("k ton tai");
  return [
    ...cartItems,
    {
      ...cartItemToAdd,
      quantity: number,
      totalPriceByItem: number * cartItemToAdd.price.$numberDecimal,
    },
  ];
};

export const removeItemWithQuantityFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem._id === cartItemToRemove._id
  );

  if (existingCartItem.quantity === 1) {
    // console.log("run this");
    return cartItems.filter(
      (cartItem) => cartItem._id !== cartItemToRemove._id
    );
  }

  return cartItems.map((cartItem) =>
    cartItem._id === cartItemToRemove._id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
          totalPriceByItem:
            (cartItem.quantity - 1) * cartItem.price.$numberDecimal,
        }
      : cartItem
  );
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem._id !== cartItemToRemove._id);
};

export const calculateTotalPrice = (items) =>
  items.reduce(
    (total, item) => total + item.quantity * item.price.$numberDecimal,
    0
  );
