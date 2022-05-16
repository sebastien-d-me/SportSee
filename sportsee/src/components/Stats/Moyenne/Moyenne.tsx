import "./Moyenne.css";
import PropTypes, { InferProps } from "prop-types";
import { LineChart, XAxis, YAxis, Tooltip, Line, TooltipProps  } from "recharts";

const MoyennePropTypes = {
  lundi: PropTypes.number.isRequired,
  mardi: PropTypes.number.isRequired,
  mercredi: PropTypes.number.isRequired,
  jeudi: PropTypes.number.isRequired,
  vendredi: PropTypes.number.isRequired,
  samedi: PropTypes.number.isRequired,
  dimanche: PropTypes.number.isRequired,
}

type MoyennePropTypes = InferProps<typeof MoyennePropTypes>;
Moyenne.propTypes = MoyennePropTypes;

const data = [
  {
    "name": "L",
    "value": 30
  },
  {
    "name": "M",
    "value": 40
  },
  {
    "name": "M",
    "value": 50
  },
  {
    "name": "J",
    "value": 30
  },
  {
    "name": "V",
    "value": 30
  },
  {
    "name": "S",
    "value": 50
  },
  {
    "name": "D",
    "value": 50
  }
]

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