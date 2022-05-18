import "./Moyenne.css";
import PropTypes, { InferProps } from "prop-types";
import { LineChart, XAxis, YAxis, Tooltip, Line, TooltipProps  } from "recharts";

const MoyenneProp = {
  lundi: PropTypes.number,
  mardi: PropTypes.number,
  mercredi: PropTypes.number,
  jeudi: PropTypes.number,
  vendredi: PropTypes.number,
  samedi: PropTypes.number,
  dimanche: PropTypes.number,
}

type MoyennePropTypes = InferProps<typeof MoyenneProp>;
Moyenne.propTypes = MoyenneProp;

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<number, string>) => {
  if (active) {
    return (
      <div className="tooltip-stats">
        <p>{`${payload?.[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

function Moyenne({ lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche }: MoyennePropTypes) {
  const data = [
    {
      "name": "L",
      "value": Object.values({lundi})[0]
    },
    {
      "name": "M",
      "value": Object.values({mardi})[0]
    },
    {
      "name": "M",
      "value": Object.values({mercredi})[0]
    },
    {
      "name": "J",
      "value": Object.values({jeudi})[0]
    },
    {
      "name": "V",
      "value": Object.values({vendredi})[0]
    },
    {
      "name": "S",
      "value": Object.values({samedi})[0]
    },
    {
      "name": "D",
      "value": Object.values({dimanche})[0]
    }
  ];
  
  return (
    <div className="Moyenne">
      <span className="type-stats type-stats-moyenne">Durée moyenne des sessions</span>
      <div className="moyenne-courbe">
        <LineChart data={data} height={290} width={290}>
          <XAxis axisLine={false} dataKey="name" tickLine={false} />
          <YAxis hide={true} />
          <Tooltip content={<CustomTooltip />} cursor={{
						stroke: 'rgba(0, 0, 0, 0.25)',
						strokeWidth: 50,
					}} />
          <Line dataKey="value" dot={false} stroke="#ffffff" type="monotone" />
        </LineChart>
      </div>
    </div>
  )
}

export default Moyenne;