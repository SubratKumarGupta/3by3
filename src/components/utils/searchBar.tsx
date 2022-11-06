import debounce from "lodash.debounce";
import { ChangeEvent, useCallback } from "react";
type SearchBarUiprops = {
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  debouncetime: number;
};
export const SearchBarUi = ({
  changeHandler,
  debouncetime,
}: SearchBarUiprops) => {
  const handelOnChange = useCallback(debounce(changeHandler, debouncetime), []);
  return (
    <div className=" m-auto w-[90%]">
      <form className=" w-[100%]">
        <label
          htmlFor="default-search"
          className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            onChange={handelOnChange}
            type="search"
            id="default-search"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Search anime"
            required
          />
        </div>
      </form>
    </div>
  );
};
