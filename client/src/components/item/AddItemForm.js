import React, { useState, useContext } from "react";
import { Button, InputGroup, FormControl, Form } from "react-bootstrap";
import { ItemContext } from "../../context/ItemState";

export default function AddItemForm() {
  const [text, setText] = useState("");

  const { addItem } = useContext(ItemContext);

  function onFormSubmit(e) {
    e.preventDefault();
    addItem(text);
    setText("");
  }

  return (
    <Form onSubmit={onFormSubmit}>
      <InputGroup>
        <FormControl
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Add new todo item"
        />
        <InputGroup.Append>
          <Button type="submit">Add Item</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
}
