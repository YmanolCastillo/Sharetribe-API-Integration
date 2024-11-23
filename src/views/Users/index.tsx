import { useState, useEffect } from "react";
import { getUsers } from "../../_services/userService";
import Container from "../../components/Template/Container";
import { User } from "../../_types/User";
import Table from "../../components/Table";
import LoadingSpinner from "../../components/Loading";

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error al cargar los usuarios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <Container>
      <div>
        <h2 className="text-2xl font-bold mb-4">Usuarios</h2>
        <Table
          data={users}
          columns={[
            { header: "ID", accessor: "id" },
            { header: "Nombre", accessor: "name" },
            { header: "Correo Electrónico", accessor: "email" },
            { header: "Fecha de Registro", accessor: "registrationDate" },
          ]}
        />
      </div>
    </Container>
  );
};

export default UsersPage;
