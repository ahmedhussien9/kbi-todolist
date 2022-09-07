import React from "react";
import Button from "../button/button";

import "./item.scss";

interface ItemProps {
  name: string;
  itemId: string;
  index?: number;
  editItem: (id: string) => void;
  deleteItem: (id: string) => void;
}

const Item: React.FC<ItemProps> = ({
  name,
  itemId,
  index,
  editItem: editHandler,
  deleteItem: deleteHandler,
}) => {
  const onEditItem = () => {
    if (editHandler) {
      editHandler(itemId);
    }
  };

  const onDeleteItem = () => {
    if (deleteHandler) {
      deleteHandler(itemId);
    }
  };

  return (
    <div className="item">
      <div className="item__body">
        <p className="item__body__text">
          {index}- {name}
        </p>
      </div>
      <div className="item__action">
        <Button isUpdate={true} isIcon={true} onClick={onEditItem} />
        <Button isUpdate={false} isIcon={true} onClick={onDeleteItem} />
      </div>
    </div>
  );
};
export default Item;
