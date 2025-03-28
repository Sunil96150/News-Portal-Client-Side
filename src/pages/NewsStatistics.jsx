import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const NewsStatistics = () => {
  const [stats, setStats] = useState({
    totalNews: 0,
    publishedNews: 0,
    pendingNews: 0,
  });

  useEffect(() => {
   
    const data = [
      { status: "published" },
      { status: "published" },
      { status: "pending" },
      { status: "pending" },
      { status: "published" },
    ];

    const totalNews = data.length;
    const publishedNews = data.filter(news => news.status === "published").length;
    const pendingNews = data.filter(news => news.status === "pending").length;

    setStats({ totalNews, publishedNews, pendingNews });
  }, []);

  // Chart Data
  const data = {
    labels: ["Total News", "Published", "Pending"],
    datasets: [
      {
        label: "News Statistics",
        data: [stats.totalNews, stats.publishedNews, stats.pendingNews],
        backgroundColor: ["blue", "green", "red"],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-center my-5 md:my-10 text-2xl md:text-4xl text-orange-500 font-extrabold">News Statistics</h2>
      <Bar data={data} />
    </div>
  );
};

export default NewsStatistics;
