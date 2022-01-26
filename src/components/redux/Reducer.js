function reducer(state = { itemList: [] }, action) {
  switch (action.type) {
    case "ADD":
      const ls = [...state.itemList];
      const item = ls.find((item) => item.id === action.item.id);
      item
        ? (item.qty = (item.qty ? item.qty : 1) + 1)
        : ls.push({ ...action.item, qty: 1 });
      return {
        ...state,
        itemList: [...ls],
      };
    case "REMOVE":
      let lis = [...state.itemList];
      const rItem = lis.find((item) => item.id === action.item.id);
      if (rItem.qty === 1) {
        lis = lis.filter((item) => item.id !== action.item.id);
      } else {
        rItem.qty = rItem.qty - 1;
      }

      return {
        ...state,
        itemList: [...lis],
      };
    default:
      return state;
  }
}

export default reducer;
