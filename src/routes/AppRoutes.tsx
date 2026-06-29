import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Home";
import Tasks from "../pages/Tasks";
import Team from "../pages/Team";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/team" element={<Team />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}