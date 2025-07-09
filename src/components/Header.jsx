import React from "react";
import { User } from "lucide-react";

import BoyImage from "../assets/image/BoyImage.jpg";

const Header = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          <img
            src={BoyImage}
            alt="User"
            className="w-full h-full  rounded-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Hi Reader,</h1>
          <p className="text-gray-600">Here's your News!</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
