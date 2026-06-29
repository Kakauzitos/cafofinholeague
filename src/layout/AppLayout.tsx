import { Outlet, Link } from "react-router-dom";

export default function AppLayout() {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <aside
                style={{
                    width: "220px",
                    padding: "20px",
                    borderRight: "1px solid #ccc",
                }}
            >
                <h2>Cafofinho League</h2>

                <nav
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        marginTop: "20px",
                    }}
                >
                    <Link to="/">Home</Link>
                    <Link to="/tasks">Tarefas</Link>
                    <Link to="/team">Equipe</Link>
                </nav>
            </aside>

            <main style={{ flex: 1, padding: "20px" }}>
                <Outlet />
            </main>
        </div>
    );
}