import "./Toile.css";
import PropTypes, { InferProps } from "prop-types";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";

const ToilePropTypes = {
  cardio: PropTypes.number.isRequired,
  energy: PropTypes.number.isRequired,
  endurance: PropTypes.number.isRequired,
  strength: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  intensity: PropTypes.number.isRequired,
}

type ToilePropTypes = InferProps<typeof ToilePropTypes>;
Toile.propTypes = ToilePropTypes;

const data = [
  {
    "type": "Intensité",
    "value": 200,
    "fullMark": 250
  },
  {
    "type": "Vitesse",
    "value": 240,
    "fullMark": 250
  },
  {
    "type": "Force",
    "value": 80,
    "fullMark": 250
  },
  {
    "type": "Endurance",
    "value": 80,
    "fullMark": 250
  },
  {
    "type": "Energie",
    "value": 220,
    "fullMark": 250
  },
  {
    "type": "Cardio",
    "value": 110,
    "fullMark": 250
  }
]

function Toile({ cardio, energy, endurance, strength, speed, intensity }: ToilePropTypes) {
  return (
    <div className="Toile">
        <RadarChart data={data} height={290} outerRadius={90} width={290} >
        <PolarGrid />
        <PolarAngleAxis dataKey="type" />
        <Radar name="18" dataKey="value" fill="#FF0101B2" fillOpacity={0.7} />
      </RadarChart>
    </div>
  )
}

export default Toile;