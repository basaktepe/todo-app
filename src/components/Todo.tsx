import React from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheck, FaRegEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/slices/todoSlice";

interface TodoProps {
  todoProps: TodoType;
}

export default function Todo({ todoProps }: TodoProps) {
  const dispatch = useDispatch();

  const { id, content } = todoProps;
  const[editable, setEdit]
  return (
    <div className="todo">
      <div> {content}</div>
      <div>
        <IoIosRemoveCircleOutline
          className="icon"
          style={{ marginRight: "0.5rem" }}
          onClick={() => {
            dispatch(removeTodo(id));
          }}
        />
        <FaRegEdit className="icon" />
      </div>
    </div>
  );
}
