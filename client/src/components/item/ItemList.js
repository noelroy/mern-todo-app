import React, { useContext, useEffect } from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import { ItemContext } from "../../context/ItemState";
import Item from "./Item";

export default function ItemList() {
  const { items, getItems, loading } = useContext(ItemContext);

  useEffect(() => {
    getItems();
  }, []);

  return loading ? (
    <div className="text-center">
      <Spinner animation="border" role="status" />
    </div>
  ) : items.length > 0 ? (
    <ListGroup>
      {items.map((item) => (
        <Item key={item._id} {...item} />
      ))}
    </ListGroup>
  ) : (
    <h5 className="text-center">No item found</h5>
  );
}
