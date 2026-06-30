"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faFolder,
  faHardDrive,
  faShareNodes,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";

export default function Stats() {
  const stats = [
    {
      title: "Total Files",
      value: "124",
      icon: faFile,
      color: "bg-blue-100 text-blue-600",
      growth: "+12%",
    },
    {
      title: "Folders",
      value: "32",
      icon: faFolder,
      color: "bg-yellow-100 text-yellow-600",
      growth: "+4%",
    },
    {
      title: "Storage Used",
      value: "25 GB",
      icon: faHardDrive,
      color: "bg-green-100 text-green-600",
      growth: "+8%",
    },
    {
      title: "Shared Files",
      value: "18",
      icon: faShareNodes,
      color: "bg-purple-100 text-purple-600",
      growth: "+2%",
    },
  ];

  return (
    <section>

      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Dashboard
          </h2>

          <p className="text-gray-500 mt-1">
            Welcome back, I Komang Yoga 👋
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-2xl
              border
              border-gray-200
              shadow-sm
              p-6
              hover:shadow-lg
              hover:-translate-y-1
              transition
              duration-300
            "
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mt-2">
                  {item.value}
                </h2>
              </div>

              <div
                className={`
                  w-14
                  h-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-2xl
                  ${item.color}
                `}
              >
                <FontAwesomeIcon icon={item.icon} />
              </div>

            </div>

            <div className="mt-6 flex items-center justify-between">

              <div className="flex items-center gap-2 text-green-600">

                <FontAwesomeIcon
                  icon={faArrowTrendUp}
                  className="text-sm"
                />

                <span className="text-sm font-semibold">
                  {item.growth}
                </span>

              </div>

              <span className="text-xs text-gray-400">
                This Month
              </span>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}