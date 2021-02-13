import React from 'react'
import './item-context'
import ItemContext from './item-context'
import {useState} from 'react';


const ItemState = (props) => {

    const [ items, setItems ] = useState([{id : 1, title : "Title 1", done: true},{id : 2, title : "Title 2", done:false}])

    function addItem(title) {
        setItems([...items,{id:items[items.length-1].id+1, title:title, done:false}])
    }

    function toggleItemStatus(id) {
        setItems(items.map(x => x.id!==id ? x : {...x,done: !x.done}))
    }

    function deleteItem(id) {
        setItems(items.filter(x => x.id!==id))
    }

    return (
        <ItemContext.Provider value={{items, addItem, toggleItemStatus, deleteItem}}>
            {props.children}
        </ItemContext.Provider>
    )
}

export default ItemState
