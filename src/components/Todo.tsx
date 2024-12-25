import React from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheck, FaRegEdit } from "react-icons/fa";

export default function Todo() {
  return (
    <div className="todo">
      <div> I'm the first to do...</div>
      <div>
        <IoIosRemoveCircleOutline
          className="icon"
          style={{ marginRight: "0.5rem" }}
        />
        <FaRegEdit className="icon" />
      </div>
    </div>
  );
}
