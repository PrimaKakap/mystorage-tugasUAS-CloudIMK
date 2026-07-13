"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faPlus,
  faFolder,
  faClock,
  faStar,
  faShareNodes,
  faTrash,
  faGear,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

interface SidebarProps {
  onNewFolder: () => void;
}

export default function Sidebar({
  onNewFolder,
}: SidebarProps) {

  const menus = [
    {
      title: "My Drive",
      icon: faFolder,
      active: true,
    },
    {
      title: "Recent",
      icon: faClock,
    },
    {
      title: "Starred",
      icon: faStar,
    },
    {
      title: "Shared",
      icon: faShareNodes,
    },
    {
      title: "Trash",
      icon: faTrash,
    },
    {
      title: "Settings",
      icon: faGear,
    },
  ];

  return (
    <aside className="w-72 h-screen bg-white border-r border-gray-200 flex flex-col">

      {/* Logo */}
      <div className="px-6 py-7 border-b">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg">
            <FontAwesomeIcon icon={faCloud} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-blue-600">
              MyStorage
            </h1>

            <p className="text-xs text-gray-500">
              Storage Mini
            </p>
          </div>

        </div>

      </div>

      {/* Button */}
      <div className="px-5 mt-6">

        <button
          onClick={onNewFolder}
          className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-3
            rounded-2xl
            flex
            items-center
            justify-center
            gap-3
            transition
            shadow-lg
          "
        >
          <FontAwesomeIcon icon={faPlus} />

          <span className="font-semibold">
            New
          </span>

        </button>

      </div>

      {/* Menu */}
      <nav className="mt-8 flex-1 px-4">

        <p className="text-xs uppercase text-gray-400 font-semibold mb-3 px-3">
          Navigation
        </p>

        <div className="space-y-2">

          {menus.map((menu, index) => (

            <button
              key={index}
              className={`
                w-full
                flex
                items-center
                gap-4
                px-4
                py-3
                rounded-xl
                transition

                ${
                  menu.active
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "hover:bg-gray-100 text-gray-700"
                }
              `}
            >
              <FontAwesomeIcon
                icon={menu.icon}
                className="text-lg w-5"
              />

              <span>{menu.title}</span>

            </button>

          ))}

        </div>

      </nav>

      {/* Storage */}

      <div className="p-5">

        <div className="bg-gray-50 border rounded-2xl p-5">

          <div className="flex items-center gap-3 mb-4">

            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
              <FontAwesomeIcon icon={faDatabase} />
            </div>

            <div>

              <h4 className="font-semibold">
                Storage
              </h4>

              <p className="text-xs text-gray-500">
                25 GB / 100 GB
              </p>

            </div>

          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">

            <div className="h-full w-1/4 bg-blue-600 rounded-full" />

          </div>

          <div className="mt-3 flex justify-between text-xs text-gray-500">

            <span>25%</span>

            <span>75 GB Left</span>

          </div>

        </div>

      </div>

    </aside>
  );
}