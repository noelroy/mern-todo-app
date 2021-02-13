import React, { useState, useContext } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import ItemContext from '../context/item-context'

export default function AddItemForm() {

    const [text, setText] = useState("");

    const context = useContext(ItemContext)

    return (
        <InputGroup>
            <FormControl onChange={(e) => setText(e.target.value)} value={text} placeholder="Add new todo item" />
            <InputGroup.Append>
                <Button onClick={() => { context.addItem(text); setText(""); }}>Add Item</Button>
            </InputGroup.Append>
        </InputGroup>
    );
}
