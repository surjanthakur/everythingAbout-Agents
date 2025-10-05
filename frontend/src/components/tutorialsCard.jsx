import { Link } from "react-router-dom";

export default function Card({ title, about, image, url }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 mt-5">
      <div className="w-full h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-t-2xl"
          src={image}
          alt={title}
        />
      </div>

      <div className="p-5 flex flex-col justify-between h-[calc(100%-12rem)]">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
            {about}
          </p>
        </div>

        <Link
          to={url}
          className="inline-flex items-center justify-center px-4 py-2 mt-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-all"
        >
          View Video
        </Link>
      </div>
    </div>
  );
}
