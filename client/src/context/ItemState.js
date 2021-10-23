import React from "react";
import "./item-context";
import ItemContext from "./item-context";
import { useReducer } from "react";

import { itemReducer } from "./item-reducer";

const ItemState = (props) => {
  const initialState = {
    items: [
      { id: 1, title: "Title 1", done: true },
      { id: 2, title: "Title 2", done: false },
    ],
  };

  const [state, dispatch] = useReducer(itemReducer, initialState);

  return (
    <ItemContext.Provider value={{ items: state.items, dispatch }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemState;
