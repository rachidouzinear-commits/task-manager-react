import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({children}){
    return(
        <div className="flex h-screen">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="flex-1 bg-slate-100 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default Layout;