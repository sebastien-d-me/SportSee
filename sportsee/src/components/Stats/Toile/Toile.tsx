import "./Toile.css";
import PropTypes, { InferProps } from "prop-types";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";

const ToileProp = {
  cardio: PropTypes.number,
  energy: PropTypes.number,
  endurance: PropTypes.number,
  strength: PropTypes.number,
  speed: PropTypes.number,
  intensity: PropTypes.number,
}

type ToilePropTypes = InferProps<typeof ToileProp>;
Toile.propTypes = ToileProp;

function Toile({ cardio, energy, endurance, strength, speed, intensity }: ToilePropTypes) {
  const data = [
    {
      "type": "Intensité",
      "value": Object.values({intensity})[0],
      "fullMark": 250
    },
    {
      "type": "Vitesse",
      "value": Object.values({speed})[0],
      "fullMark": 250
    },
    {
      "type": "Force",
      "value": Object.values({strength})[0],
      "fullMark": 250
    },
    {
      "type": "Endurance",
      "value": Object.values({endurance})[0],
      "fullMark": 250
    },
    {
      "type": "Energie",
      "value": Object.values({energy})[0],
      "fullMark": 250
    },
    {
      "type": "Cardio",
      "value": Object.values({cardio})[0],
      "fullMark": 250
    }
  ];
  
  return (
    <div className="Toile">
      <RadarChart data={data} height={290} outerRadius={90} width={290}>
        <PolarGrid />
        <PolarAngleAxis dataKey="type" />
        <Radar name="18" dataKey="value" fill="#FF0101B2" fillOpacity={0.7} />
      </RadarChart>
    </div>
  )
}

export default Toile;