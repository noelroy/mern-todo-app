import React from "react";
import "./item-context";
import ItemContext from "./item-context";
import { useReducer } from "react";

import itemReducer from "./item-reducer";
import { GET_ITEMS } from "./action-types";

const ItemState = (props) => {
  const initialState = {
    items: [],
  };

  const [state, dispatch] = useReducer(itemReducer, initialState);

  const getItems = async () => {
    console.log("getItems");
    const response = await fetch("/api/items");
    const resp = await response.json();
    console.log(resp);
    dispatch({type:GET_ITEMS, payload:resp.items})
  }
  

  return (
    <ItemContext.Provider value={{ items: state.items, dispatch, getItems }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemState;
