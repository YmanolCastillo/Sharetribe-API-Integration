import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import ListingsPage from "./views/Listings";
import UsersPage from "./views/Users";
import TransactionsPage from "./views/Transactions";
import TopBar from "./components/TopBar";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <TopBar />
        <div className="flex-1 pt-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/listings" element={<ListingsPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
