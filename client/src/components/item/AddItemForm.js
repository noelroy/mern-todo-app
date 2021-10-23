import React, { useState, useContext } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { ADD_ITEM } from '../../context/action-types';
import ItemContext from '../../context/item-context'

export default function AddItemForm() {

    const [text, setText] = useState("");

    const { dispatch } = useContext(ItemContext);

    function addItem(textInput) {
        dispatch({type: ADD_ITEM, payload: {text: textInput}})
    }

    return (
        <InputGroup>
            <FormControl onChange={(e) => setText(e.target.value)} value={text} placeholder="Add new todo item" />
            <InputGroup.Append>
                <Button onClick={() => { addItem(text); setText(""); }}>Add Item</Button>
            </InputGroup.Append>
        </InputGroup>
    );
}
