import React from "react";
import { useReducer } from "react";

import itemReducer from "./item-reducer";
import { ADD_ITEM, GET_ITEMS, DELETE_ITEM, TOGGLE_STATUS } from "./action-types";

import { createContext } from 'react';

// Create Context
export const ItemContext = createContext()


// Create Provider component
export const ItemState = (props) => {
  const initialState = {
    items: [],
    loading : true
  };

  const [state, dispatch] = useReducer(itemReducer, initialState);

  const getItems = async () => {
    const response = await fetch("/api/items");
    const resp = await response.json();
    dispatch({type:GET_ITEMS, payload:resp.items})
  }

  const addItem = async (text) => {
    const response = await fetch("/api/items", {
      method : "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"title": text})
    })
    const res = await response.json();
    dispatch({type: ADD_ITEM, payload: res.item})
  }

  const deleteItem = async (id) => {
    const response = await fetch(`/api/items/${id}`, {
      method: 'DELETE'
    })
    const res = await response.json();
    if(res.success) {
      dispatch({type: DELETE_ITEM, payload: res.item._id})
    }
  }

  const toggleStatus = async (id, value) => {
    const response = await fetch(`/api/items/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({done: value})
    })
    const res = await response.json();
    if(res.success) {
      dispatch({type: TOGGLE_STATUS, payload: res.item})
    }
  }
  

  return (
    <ItemContext.Provider value={{ ...state, getItems, addItem, deleteItem, toggleStatus }}>
      {props.children}
    </ItemContext.Provider>
  );
};
