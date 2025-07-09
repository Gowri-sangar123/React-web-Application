import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleViewMode } from "../store/postSlice";
import { LayoutGrid, List } from "lucide-react";

const ViewToggle = () => {
  const dispatch = useDispatch();
  const viewMode = useSelector((state) => state.posts.viewMode);

  const handleToggle = () => {
    dispatch(toggleViewMode());
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">View Toggle</h2>
      <div className="flex bg-gray-100 rounded-lg p-1">
        <button
          onClick={handleToggle}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md transition-colors ${
            viewMode === "card"
              ? "bg-green-400 text-black"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          Card
        </button>
        <button
          onClick={handleToggle}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md transition-colors ${
            viewMode === "list"
              ? "bg-green-400 text-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <List className="w-4 h-4" />
          List
        </button>
      </div>
    </div>
  );
};

export default ViewToggle;
