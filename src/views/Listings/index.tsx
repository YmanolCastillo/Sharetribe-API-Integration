import { useState, useEffect } from "react";
import { getListings } from "../../_services/listingService";
import Container from "../../components/Template/Container";
import Table from "../../components/Table";
import { Listing } from "../../_types/Listing";
import LoadingSpinner from "../../components/Loading";

const ListingsPage = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const data = await getListings();
        setListings(data);
      } catch (error) {
        console.error("Error al cargar los listados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <Container>
      <div>
        <h2 className="text-2xl font-bold mb-4">Listados</h2>
        <Table
          data={listings}
          columns={[
            { header: "ID", accessor: "id" },
            { header: "Título", accessor: "title" },
            { header: "Estado", accessor: "state" },
            {
              header: "Precio",
              accessor: "price",
            },
          ]}
        />
      </div>
    </Container>
  );
};

export default ListingsPage;
