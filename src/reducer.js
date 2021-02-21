export const initialState = {
  basket: [
    {
      id: "1",
      title: "tv",
      price: 1999,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1593078165899-c7d2ac0d6aea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    },
    {
      id: "2",
      title: "tv",
      price: 1999,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1593078165899-c7d2ac0d6aea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      // logig for adding to basket
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      // removing from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remvoe product (id:${action.id})as its nothing`);
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
}

export default reducer;
