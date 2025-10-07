import { NavLink, Outlet } from "react-router-dom";

export default function Docs() {
  const links = [
    { path: "start", label: "build simple chatbot" },
    { path: "llm", label: " langgraph UI chatbot" },
  ];

  return (
    <div className="flex min-h-screen  text-white transition-colors">
      {/* Sidebar */}
      <aside
        style={{ backgroundColor: "oklch(20.5% 0 0)" }}
        className="fixed left-0 top-20 h-[calc(100vh-4rem)] w-[15%] lg:w-[15%] md:w-[10%] sm:w-full dark:transition-colors p-6 overflow-y-auto"
      >
        <h1 className="text-1xl font-bold mb-6 text-cyan-400">Topics</h1>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md transition-all duration-200 ${
                    isActive
                      ? "bg-zinc-800 text-cyan-400 font-semibold"
                      : "hover:bg-zinc-800 hover:text-cyan-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className=" lg:ml-50 md:ml-4 sm:ml-0 flex-1  min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
