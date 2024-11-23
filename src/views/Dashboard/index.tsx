import React, { useEffect, useState } from "react";
import { getListings } from "../../_services/listingService";
import { getUsers } from "../../_services/userService";
import { getTransactions } from "../../_services/transactionsService";
import DashboardChart from "../../components/DashboardChart";
import Container from "../../components/Template/Container";
import LoadingSpinner from "../../components/Loading";

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    totalListings: 0,
    totalUsers: 0,
    totalTransactions: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const listings = await getListings();
        const users = await getUsers();
        const transactions = await getTransactions();

        setMetrics({
          totalListings: listings.length,
          totalUsers: users.length,
          totalTransactions: transactions.length,
        });
      } catch (error) {
        console.error("Error fetching metrics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <Container>
      <div>
        <h1 className="text-3xl font-semibold mb-6">Estadísticas generales</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Total de Listados</h3>
            <p className="text-2xl">{metrics.totalListings}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Total de Usuarios</h3>
            <p className="text-2xl">{metrics.totalUsers}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Total de Transacciones</h3>
            <p className="text-2xl">{metrics.totalTransactions}</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Detalles graficados</h3>
        <div className="w-full flex justify-center">
          <DashboardChart metrics={metrics} />
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
