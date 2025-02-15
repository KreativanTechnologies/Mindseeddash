import Table from "../components/Table";
import Layout from "../layouts/Layout";

const Users = () => {
  const columns = [
    { key: "Name", label: "Name" },
    { key: "Email", label: "Email" },
  ];

  const rowsData = [
    {
      Name: "John Doe",
      Email: "john.doe@example.com",
    },
    {
      Name: "Jane Smith",
      Email: "jane.smith@example.com",
    },
    {
      Name: "Michael Johnson",
      Email: "michael.johnson@example.com",
    },
    {
      Name: "Emily Davis",
      Email: "emily.davis@example.com",
    },
    {
      Name: "Chris Brown",
      Email: "chris.brown@example.com",
    },
    {
      Name: "Sarah Wilson",
      Email: "sarah.wilson@example.com",
    },
    {
      Name: "David Martinez",
      Email: "david.martinez@example.com",
    },
    {
      Name: "Emma Taylor",
      Email: "emma.taylor@example.com",
    },
    {
      Name: "Daniel Anderson",
      Email: "daniel.anderson@example.com",
    },
    {
      Name: "Sophia Thomas",
      Email: "sophia.thomas@example.com",
    },
  ];
  return (
    <Layout>
      <Table columns={columns} data={rowsData} />
    </Layout>
  );
};

export default Users;
