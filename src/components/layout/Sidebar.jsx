import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaTasks,
    FaCheckCircle,
    FaCog,
} from "react-icons/fa";

function Sidebar(){
    const linkClass = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            isActive
            ? "bg-blue-600 text-white"
            : "text-gray-300 hover:bg-slate-800 hover:text-white"
        }`;
    return (
        <aside className="w-64 bg-slate-900 text-white p-6">
            <h2 className="text-2xl font-bold mb-10">Task manager</h2>

            <nav className="space-y-3">
                <NavLink to="/" end className={linkClass}>
                    <FaHome />
                    <span>Dashboard</span>
                </NavLink>

                <NavLink to="/tasks" className={linkClass}>
                    <FaTasks />
                    <span>Tasks</span>
                </NavLink>

                <NavLink to="/completed" className={linkClass}>
                    <FaCheckCircle />
                    <span>Completed</span>
                </NavLink>

                <NavLink to="/settings" className={linkClass}>
                    <FaCog />
                    <span>Settings</span>
                </NavLink>
            </nav>
        </aside>
    );
}

export default Sidebar;