"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faMoon,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">

      <div className="flex items-center justify-between px-8 py-5">

        {/* Search */}
        <div className="w-full max-w-2xl">

          <div className="relative">

            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search files and folders..."
              className="
                w-full
                h-12
                rounded-full
                bg-gray-100
                pl-14
                pr-5
                outline-none
                border
                border-transparent
                focus:bg-white
                focus:border-blue-500
                transition
              "
            />

          </div>

        </div>

        {/* Right Menu */}
        <div className="flex items-center gap-4 ml-8">

          {/* Dark Mode */}
          <button
            className="
              w-11
              h-11
              rounded-full
              hover:bg-gray-100
              transition
            "
          >
            <FontAwesomeIcon
              icon={faMoon}
              className="text-gray-600"
            />
          </button>

          {/* Notification */}
          <button
            className="
              relative
              w-11
              h-11
              rounded-full
              hover:bg-gray-100
              transition
            "
          >
            <FontAwesomeIcon
              icon={faBell}
              className="text-gray-600"
            />

            <span
              className="
                absolute
                top-2
                right-2
                w-2.5
                h-2.5
                bg-red-500
                rounded-full
              "
            />
          </button>

          {/* Settings */}
          <button
            className="
              w-11
              h-11
              rounded-full
              hover:bg-gray-100
              transition
            "
          >
            <FontAwesomeIcon
              icon={faGear}
              className="text-gray-600"
            />
          </button>

          {/* Divider */}
          <div className="w-px h-8 bg-gray-300" />

          {/* User */}
          <div
            className="
              flex
              items-center
              gap-3
              cursor-pointer
              hover:bg-gray-100
              rounded-full
              px-3
              py-2
              transition
            "
          >
            <div
              className="
                w-11
                h-11
                rounded-full
                bg-blue-600
                text-white
                flex
                items-center
                justify-center
                font-bold
                text-lg
              "
            >
              Y
            </div>

            <div className="hidden md:block">

              <h3 className="font-semibold text-sm">
                I Komang Yoga
              </h3>

              <p className="text-xs text-gray-500">
                Administrator
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}