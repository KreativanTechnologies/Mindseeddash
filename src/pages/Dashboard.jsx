import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import Layout from "../layouts/Layout";

const Dashboard = () => {
  const data = [
    { week: "Week 1", value: 10 },
    { week: "Week 2", value: 20 },
    { week: "Week 3", value: 30 },
    { week: "Week 4", value: 40 },
    { week: "Week 5", value: 25 },
    { week: "Week 6", value: 35 },
    { week: "Week 7", value: 15 },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
    "#FF4567",
    "#2E93fA",
  ];

  return (
    <Layout>
      <div className="flex flex-col items-center text-white p-8 ">
        <h2 className="text-2xl font-bold">Weekly Analytics</h2>
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="week"
            cx="50%"
            cy="50%"
            outerRadius={140}
            innerRadius={60}
            fill="#8884d8"
            label={({ name, percent }) =>
              `${name} (${(percent * 100).toFixed(0)}%)`
            }
            labelStyle={{
              fontSize: "1.2vw",
              fontWeight: "bold",
              fill: "#fff",
            }}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "gray",
              color: "#fff",
              borderRadius: "10px",
              border: "none",
            }}
          />
          <Legend
            wrapperStyle={{
              color: "#fff",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          />
        </PieChart>
      </div>
    </Layout>
  );
};

export default Dashboard;
