import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


const ChartUser = (props) => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart Bar Github Users Follow",
      },
    },
  };

  const data = {
    labels: props.users.map((user) => user.name),
    datasets: [
      {
        label: "Following",
        data: props.users.map((user) => user.following),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Followers",
        data: props.users.map((user) => user.followers),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="flex flex-col border-gray-300 border bg-white divide-y rounded-lg flex-none w-full md:w-50 lg:w-1/3">
      <Bar options={options} data={data} />
    </div>
  );
};

export default ChartUser;
