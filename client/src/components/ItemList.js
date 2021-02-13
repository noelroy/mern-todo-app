import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Square, CheckSquare, Trash } from "react-bootstrap-icons";
import ItemContext from "../context/item-context";

function CheckBox({ done, toggleItemStatus }) {
  return done ? (
    <CheckSquare onClick={toggleItemStatus} className="mr-2" />
  ) : (
    <Square onClick={toggleItemStatus} className="mr-2" />
  );
}

function ItemText({ done, title }) {
  return done ? (
    <del className="align-middle">{title}</del>
  ) : (
    <span className="align-middle">{title}</span>
  );
}

function Item({ title, done, toggleItemStatus, deleteItem }) {
  return (
    <ListGroup.Item>
      <CheckBox toggleItemStatus={toggleItemStatus} done={done} />
      <ItemText done={done} title={title} />{" "}
      <Button className="float-right" variant="danger" onClick={deleteItem}>
        <Trash />
      </Button>
    </ListGroup.Item>
  );
}

export default function ItemList() {
  const context = useContext(ItemContext);

  return (
    <ListGroup>
      {context.items.map((item) => (
        <Item
          key={item.id}
          {...item}
          toggleItemStatus={() => context.toggleItemStatus(item.id)}
          deleteItem={() => context.deleteItem(item.id)}
        />
      ))}
    </ListGroup>
  );
}
