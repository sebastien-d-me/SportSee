import "./Toile.css";
import PropTypes, { InferProps } from "prop-types";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";
import { useState, useEffect } from "react";


/**
 * Defines the types accepted in this component
 * @type {{ cardio: any; energy: any; endurance: any; strength: any; speed: any; intensity: any; }}
 */
const ToileProp = {
  cardio: PropTypes.number,
  energy: PropTypes.number,
  endurance: PropTypes.number,
  strength: PropTypes.number,
  speed: PropTypes.number,
  intensity: PropTypes.number,
}

/**
 * @typedef {ToilePropTypes}
 */
type ToilePropTypes = InferProps<typeof ToileProp>;
Toile.propTypes = ToileProp;

/**
 * Create a interface for the data
 * @interface toileProps
 * @typedef {toileProps}
 */
interface toileProps {
  type: string,
  value: number | undefined | null,
  fullMark: number
}


/**
 * Displays the graph with the performance
 * @param {ToilePropTypes} { cardio, energy, endurance, strength, speed, intensity }
 * @returns
 */
function Toile({ cardio, energy, endurance, strength, speed, intensity }: ToilePropTypes) {
  const [data, setData] = useState<toileProps[]>([]);
  
  useEffect(() => {
    if(intensity && speed && strength && endurance && energy && cardio) {
      setData([
        {
          "type": "Intensité",
          "value": intensity,
          "fullMark": 250
        },
        {
          "type": "Vitesse",
          "value": speed,
          "fullMark": 250
        },
        {
          "type": "Force",
          "value": strength,
          "fullMark": 250
        },
        {
          "type": "Endurance",
          "value": endurance,
          "fullMark": 250
        },
        {
          "type": "Energie",
          "value": energy,
          "fullMark": 250
        },
        {
          "type": "Cardio",
          "value": cardio,
          "fullMark": 250
        }
      ]);
    }
  }, [intensity, speed, strength, endurance, energy, cardio])
  
  return (
    <div className="Toile">
      {data.length > 0 && 
        <RadarChart data={data} height={290} outerRadius={90} width={290}>
          <PolarGrid />
          <PolarAngleAxis dataKey="type" />
          <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.7} name="18" />
        </RadarChart>
      }
    </div>
  )
}

export default Toile;