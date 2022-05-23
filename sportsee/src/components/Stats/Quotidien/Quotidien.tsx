import "./Quotidien.css";
import PropTypes from "prop-types";
import { BarChart, CartesianGrid, Legend, Bar, XAxis, YAxis, Tooltip, TooltipProps, ResponsiveContainer } from "recharts";


/**
 * Defines the types accepted in this component
 * @type {{ jour1: any; jour2: any; jour3: any; jour4: any; jour5: any; jour6: any; jour7: any; }}
 */
const QuotidienProp = {
  jour1: PropTypes.object,
  jour2: PropTypes.object,
  jour3: PropTypes.object,
  jour4: PropTypes.object,
  jour5: PropTypes.object,
  jour6: PropTypes.object,
  jour7: PropTypes.object  
}

Quotidien.propTypes = QuotidienProp;

/**
 * Create a custom tooltip on hover
 * @param {TooltipProps<number, string>} {active,payload}
 * @returns {*}
 */
const CustomTooltip = ({active,payload}: TooltipProps<number, string>) => {
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

/**
 * Displays the daily activity graph
 * @param {*} { jour1, jour2, jour3, jour4, jour5, jour6, jour7 }
 * @returns
 */
function Quotidien({ jour1, jour2, jour3, jour4, jour5, jour6, jour7 }: any) {
  const data = [
    {
      "name": "1",
      "poids": Object.values({jour1})[0]?.kilogram,
      "calories": Object.values({jour1})[0]?.calories
    },
    {
      "name": "2",
      "poids": Object.values({jour2})[0]?.kilogram,
      "calories": Object.values({jour2})[0]?.calories
    },
    {
      "name": "3",
      "poids": Object.values({jour3})[0]?.kilogram,
      "calories": Object.values({jour3})[0]?.calories
    },
    {
      "name": "4",
      "poids": Object.values({jour4})[0]?.kilogram,
      "calories": Object.values({jour4})[0]?.calories
    },
    {
      "name": "5",
      "poids": Object.values({jour5})[0]?.kilogram,
      "calories": Object.values({jour5})[0]?.calories
    },
    {
      "name": "6",
      "poids": Object.values({jour6})[0]?.kilogram,
      "calories": Object.values({jour6})[0]?.calories
    },
    {
      "name": "7",
      "poids": Object.values({jour7})[0]?.kilogram,
      "calories": Object.values({jour7})[0]?.calories
    }
  ];

  return (
    <div className="Quotidien">
      <span className="type-stats type-stats-quotidien">Activité quotidienne</span>
      <ResponsiveContainer aspect={4}>
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