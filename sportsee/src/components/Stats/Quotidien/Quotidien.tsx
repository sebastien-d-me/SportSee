import "./Quotidien.css";
import PropTypes, { InferProps } from "prop-types";
import { BarChart, CartesianGrid, Legend, Bar, XAxis, YAxis, Tooltip, TooltipProps, ResponsiveContainer } from "recharts";

const QuotidienPropTypes = {
  datas: PropTypes.array.isRequired,
}

type QuotidienPropTypes = InferProps<typeof QuotidienPropTypes>;
Quotidien.propTypes = QuotidienPropTypes;

const data = [
  {
    "name": "1",
    "poids": 70,
    "calories": 240
  },
  {
    "name": "2",
    "poids": 69,
    "calories": 220
  },
  {
    "name": "3",
    "poids": 70,
    "calories": 280
  },
  {
    "name": "4",
    "poids": 70,
    "calories": 500
  },
  {
    "name": "5",
    "poids": 69,
    "calories": 160
  },
  {
    "name": "6",
    "poids": 69,
    "calories": 162
  },
  {
    "name": "7",
    "poids": 69,
    "calories": 390
  }
]
  

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<number, string>) => {
  if (active) {
    return (
      <div className="tooltip-stats tooltip-stats-quotidien">
        <p>{`${payload?.[0].value} kg`}</p>
        <p>{`${payload?.[1].value} Kcal`}</p>
      </div>
    );
  }
  
  return null;
};

function Quotidien({ datas }: QuotidienPropTypes) {
  return (
    <div className="Quotidien">
      <span className="type-stats type-stats-quotidien">Activité quotidienne</span>
      <ResponsiveContainer aspect={5}>
        <BarChart data={data} height={300}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tickLine={false} />
          <YAxis dataKey="calories" orientation="right" />
          <Tooltip content={<CustomTooltip/>} />
          <Legend align="right" height={35} iconType="circle" verticalAlign="top"/>
          <Bar barSize={15} dataKey="poids" fill="#282D30" name="Poids (kg)" radius={[50, 50, 0, 0]} />
          <Bar barSize={15} dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" radius={[50, 50, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Quotidien;