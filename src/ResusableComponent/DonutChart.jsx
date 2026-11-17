
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./DonutChart.css";

const DonutChart=({data,value}) => {
  return (
    <div className="prp-dashboard-application-status-container">
      <h2 className="prp-dashboard-application-status-heading">Application Status</h2>
      <div className="prp-dashboard-application-status-content">
        <div className="prp-dashboard-application-status-list">
          {data.map((item, index) => (
            <div className={`prp-dashboard-application-status-item prp-dashboard-status-item-${index}`} key={index}>
              <span>{item.name}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
        <div className="prp-dashboard-application-status-chart">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={70}
                outerRadius={95} startAngle={90} endAngle={-270} stroke="none">
                {data.map((item, index) => (
                  <Cell key={index} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="prp-dashboard-application-status-chart-text">
            <h3>{value}</h3>
            <p>Total Applications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;