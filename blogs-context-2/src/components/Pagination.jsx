import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, totalPages, pageHandler } = useContext(AppContext);

  return (
    <div className="w-full border  py-2 fixed bottom-0 bg-white">
      <div className="w-11/12 max-w-[630px] flex flex-row m-auto justify-between ">
        <div className="flex gap-2">
          {page > 1 && (
            <button
              className="rounded-md border-2 px-4 py-1"
              onClick={() => pageHandler(page - 1)}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="rounded-md border-2 px-4 py-1"
              onClick={() => pageHandler(page + 1)}
            >
              Next
            </button>
          )}
        </div>

        <p className="font-bold text-sm">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
