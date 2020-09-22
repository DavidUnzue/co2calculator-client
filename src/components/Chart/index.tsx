import React, { ReactText } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { Route } from "../../interfaces/route.interface";
import { ReactComponent as Plane } from "../../images/plane.svg";
import { ReactComponent as Car } from "../../images/car.svg";
import { ReactComponent as Train } from "../../images/train.svg";

interface ChartProps {
  routes: Array<Route>;
}

interface ChartData {
  vehicle: string;
  footprint: number;
}

const tooltipFormatter = (value: string | number | ReactText[]) => {
  return <span>{value} kg</span>;
};

const legendFormatter = (value: string) => {
  return <span>CO2e {value} (kg)</span>;
};

const renderCustomAxisTick = ({
  x,
  y,
  payload,
}: {
  x: number;
  y: number;
  payload: any;
}) => {
  const name = payload.value;

  switch (name) {
    case "car":
      return <Car x={x - 30} y={y - 12} width={24} height={24} title={name} />;
    case "train":
      return (
        <Train x={x - 30} y={y - 12} width={24} height={24} title={name} />
      );
    case "plane":
      return (
        <Plane x={x - 30} y={y - 12} width={24} height={24} title={name} />
      );
    default:
      return <span>{name}</span>;
  }
};

class Chart extends React.Component<ChartProps, {}> {
  render() {
    const { routes } = this.props;
    // prepare data point for barchart
    const data: Array<ChartData> = routes.map((route) => ({
      vehicle: route.vehicle,
      footprint: route.footprint,
    }));

    return (
      <BarChart layout="vertical" width={800} height={350} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="vehicle" tick={renderCustomAxisTick} />
        <Tooltip formatter={tooltipFormatter} />
        <Legend formatter={legendFormatter} />
        <Bar dataKey="footprint" fill="#82ca9d" />
      </BarChart>
    );
  }
}

export default Chart;
