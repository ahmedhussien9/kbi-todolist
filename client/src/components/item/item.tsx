import React, { useState } from "react";
import Button from "../button/button";

import "./item.scss";

interface ItemProps {
  name: string;
  itemId: string;
  index?: number;
  isDone?: boolean;
  editItem: (id: string) => void;
  deleteItem: (id: string) => void;
  todoDone: (id: string, state: boolean) => void;
}

const Item: React.FC<ItemProps> = ({
  name,
  itemId,
  index,
  isDone,
  editItem: editHandler,
  deleteItem: deleteHandler,
  todoDone: todoDoneHandler,
}) => {
  const [done, setDone] = useState<boolean>(!!isDone);

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

  const onTodoDone = (state: any) => {
    if (todoDoneHandler) {
      setDone(state);
      todoDoneHandler(itemId, state);
    }
  };

  return (
    <div className="item">
      <div className="item__body">
        <label className="item__body__label">
          <input
            type="checkbox"
            checked={done}
            onChange={(e) => onTodoDone(e.target.checked)}
          />
          {!done ? (
            <>
              {index} - {name}
            </>
          ) : (
            <del>
              {index}- {name}
            </del>
          )}
        </label>
      </div>
      <div className="item__action">
        <Button isUpdate={true} isIcon={true} onClick={onEditItem} />
        <Button isUpdate={false} isIcon={true} onClick={onDeleteItem} />
      </div>
    </div>
  );
};
export default Item;
