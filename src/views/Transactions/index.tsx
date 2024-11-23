import { useState, useEffect } from "react";
import { getTransactions } from "../../_services/transactionsService";
import Container from "../../components/Template/Container";
import { Transaction } from "../../_types/Transaction";
import { formatDate } from "../../utils/Date";
import Table from "../../components/Table";
import LoadingSpinner from "../../components/Loading";

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getTransactions();
        setTransactions(data);
      } catch (error) {
        console.error("Error al cargar las transacciones:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <Container>
      <div>
        <h2 className="text-2xl font-bold mb-4">Transacciones</h2>
        <Table
          data={transactions}
          columns={[
            { header: "ID", accessor: "id" },
            {
              header: "Comprador",
              accessor: "buyer",
              render: (buyer) => buyer.name,
            },
            {
              header: "Vendedor",
              accessor: "seller",
              render: (seller) => seller.name,
            },
            { header: "Estado", accessor: "status" },
            {
              header: "Fecha de Creación",
              accessor: "createdAt",
              render: (date) => formatDate(date),
            },
          ]}
        />
      </div>
    </Container>
  );
};

export default TransactionsPage;
