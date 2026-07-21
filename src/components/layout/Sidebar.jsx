function Sidebar() {
    return(
        <aside className="w-64 bg-slate-900 text-white p-6">
            <h2 className="text-xl font-bold mb-8">
                Dashboard
            </h2>
            <ul className="space-y-4">
                <li>Home</li>
                <li>Tasks</li>
                <li>Completed</li>
                <li>Settings</li>
            </ul>
        </aside>
    );
}

export default Sidebar;