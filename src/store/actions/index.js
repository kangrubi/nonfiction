export const addToBasket = item => {
  return {
    type: 'ADD_TO_BASKET',
    payload: item,
  };
};

export const removeFromBasket = item => {
  return {
    type: 'REMOVE_FROM_BASKET',
    payload: item,
  };
};

export const handleAuthentication = user => {
  return {
    type: 'SET_USER',
    user: user,
  };
};

export const getBasketTotal = basket =>
  basket?.reduce((amount, payload) => payload.price + amount, 0);
