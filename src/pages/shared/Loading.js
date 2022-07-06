import React from "react";

const Loading = () => {
  return (
    <div class="grid min-h-screen place-content-center">
      <div class="flex items-center gap-2 text-gray-500">
        <span class="h-10 w-10 block rounded-full border-4 border-t-blue-600 animate-spin"></span>
        loading...
      </div>
    </div>
  );
};

export default Loading;
