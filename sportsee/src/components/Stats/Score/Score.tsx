import "./Score.css";
import PropTypes, { InferProps } from "prop-types";
import { RadialBarChart, RadialBar } from "recharts";

const ScorePropTypes = {
  score: PropTypes.number.isRequired
}

type ScorePropTypes = InferProps<typeof ScorePropTypes>;
Score.propTypes = ScorePropTypes;

const data = [
  {
    "fill": "#FF0000",
    "value": 12
  },
  {
    "fill": "transparent",
    "value": 100
  }
]

function Score({ score }: ScorePropTypes) {
  return (
    <div className="Score">
      <span className="type-stats">Score</span>
        <div className="score-graphique">
          <RadialBarChart barSize={15} data={data} height={250} innerRadius="100%" startAngle={90} endAngle={450} width={250}>
            <RadialBar dataKey="value"/>
          </RadialBarChart>
          <div className="pourcentage">
            <span className="nombre-score">12%</span>
            <span>de votre objectif</span>
          </div>
        </div>
    </div>
  )
}

export default Score;