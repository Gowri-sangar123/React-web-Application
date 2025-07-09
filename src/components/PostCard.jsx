import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePost } from "../store/postSlice";
import { X } from "lucide-react";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const viewMode = useSelector((state) => state.posts.viewMode);

  const handleRemove = () => {
    dispatch(removePost(post.id));
  };

  // Generate a placeholder image URL based on post ID
  const imageUrl = `https://picsum.photos/400/200?random=${post.id}`;

  if (viewMode === "list") {
    return (
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4 relative card-hover transition-all">
        <button
          onClick={handleRemove}
          className="absolute top-2 right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors z-10"
          title="Remove post"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="flex gap-4">
          <img
            src={imageUrl}
            alt={post.title}
            className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
            loading="lazy"
          />
          <div className="flex-1 pr-8">
            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2 mb-2">
              {post.body}
            </p>
            <p className="text-gray-400 text-xs">Mon, 21 Dec 2020 14:57 GMT</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden relative card-hover transition-all">
      <button
        onClick={handleRemove}
        className="absolute top-2 right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors z-10"
        title="Remove post"
      >
        <X className="w-4 h-4" />
      </button>
      <img
        src={imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-3">{post.body}</p>
        <p className="text-gray-400 text-xs">Mon, 21 Dec 2020 14:57 GMT</p>
      </div>
    </div>
  );
};

export default PostCard;
