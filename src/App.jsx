import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Transactions from "./pages/Transactions";
import Landing from "./pages/landing";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Dashboard Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/Users" element={<Users />} />
          <Route path="/dashboard/transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
