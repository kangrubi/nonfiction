export const addToBasket = item => {
  return {
    type: 'ADD_TO_BASKET',
    payload: item,
  };
};

export const removeFromBasket = id => {
  return {
    type: 'REMOVE_FROM_BASKET',
    payload: id,
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
