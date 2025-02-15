import Table from "../components/Table";
import Layout from "../layouts/Layout";

const columns = [
  { key: "Name", label: "Name" },
  { key: "TransactionId", label: "Transaction Id" },
  { key: "Payment", label: "Payment" },
  { key: "Date", label: "Date" },
  { key: "State", label: "State" },
];

const rowsData = [
  {
    Name: "John Doe",
    TransactionId: "TXN123456",
    Payment: "$500",
    Date: "10 Feb 2024",
    State: "Completed",
  },
  {
    Name: "Jane Smith",
    TransactionId: "TXN123457",
    Payment: "$300",
    Date: "12 Feb 2024",
    State: "Pending",
  },
  {
    Name: "Robert Brown",
    TransactionId: "TXN123458",
    Payment: "$250",
    Date: "15 Feb 2024",
    State: "Failed",
  },
  {
    Name: "Emily Johnson",
    TransactionId: "TXN123459",
    Payment: "$700",
    Date: "18 Feb 2024",
    State: "Completed",
  },
  {
    Name: "Michael Lee",
    TransactionId: "TXN123460",
    Payment: "$150",
    Date: "20 Feb 2024",
    State: "Completed",
  },
  {
    Name: "Sophia Wilson",
    TransactionId: "TXN123461",
    Payment: "$450",
    Date: "22 Feb 2024",
    State: "Pending",
  },
  {
    Name: "David Martinez",
    TransactionId: "TXN123462",
    Payment: "$600",
    Date: "25 Feb 2024",
    State: "Completed",
  },
  {
    Name: "Olivia Taylor",
    TransactionId: "TXN123463",
    Payment: "$350",
    Date: "28 Feb 2024",
    State: "Failed",
  },
  {
    Name: "William Anderson",
    TransactionId: "TXN123464",
    Payment: "$800",
    Date: "02 Mar 2024",
    State: "Completed",
  },
  {
    Name: "Ava Thomas",
    TransactionId: "TXN123465",
    Payment: "$200",
    Date: "05 Mar 2024",
    State: "Pending",
  },
];

const Transaction = () => {
  return (
    <Layout>
      <Table columns={columns} data={rowsData} />
    </Layout>
  );
};

export default Transaction;
