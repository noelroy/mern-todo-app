import React, { useState, useContext } from 'react';
import { Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import { ADD_ITEM } from '../../context/action-types';
import ItemContext from '../../context/item-context'

export default function AddItemForm() {

    const [text, setText] = useState("");

    const { dispatch } = useContext(ItemContext);

    function addItem(e) {
        e.preventDefault()
        dispatch({type: ADD_ITEM, payload: {text: text}})
        setText("");
    }

    return (
        <Form onSubmit={addItem}>
        <InputGroup>
            <FormControl onChange={(e) => setText(e.target.value)} value={text} placeholder="Add new todo item" />
            <InputGroup.Append>
                <Button type="submit">Add Item</Button>
            </InputGroup.Append>
        </InputGroup>
        </Form>
    );
}
