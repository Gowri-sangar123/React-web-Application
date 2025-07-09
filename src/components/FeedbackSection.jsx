import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFeedbackForm } from "../store/postSlice";

const FeedbackSection = () => {
  const dispatch = useDispatch();
  const showFeedbackForm = useSelector((state) => state.posts.showFeedbackForm);

  const handleToggleFeedback = () => {
    dispatch(toggleFeedbackForm());
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Have a Feedback?
      </h2>
      <button
        onClick={handleToggleFeedback}
        className="w-full bg-green-400 hover:bg-green-500 text-white font-medium py-3 px-4 rounded-lg transition-colors"
      >
        We're Listening!
      </button>
    </div>
  );
};

export default FeedbackSection;
