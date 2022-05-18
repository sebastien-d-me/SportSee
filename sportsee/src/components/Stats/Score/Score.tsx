import "./Score.css";
import PropTypes, { InferProps } from "prop-types";
import { RadialBarChart, RadialBar } from "recharts";

const ScoreProp = {
  score: PropTypes.number
}

type ScorePropTypes = InferProps<typeof ScoreProp>;
Score.propTypes = ScoreProp;

function Score({ score }: ScorePropTypes) {
  const data = [
    {
      "fill": "#FF0000",
      "value": Object.values({score})[0]
    },
    {
      "fill": "transparent",
      "value": 100
    }
  ];

  return (
    <div className="Score">
      <span className="type-stats">Score</span>
      <div className="score-graphique">
        <RadialBarChart barSize={15} data={data} height={250} innerRadius="100%" startAngle={90} endAngle={450} width={250}>
          <RadialBar dataKey="value" />
        </RadialBarChart>
        <div className="pourcentage">
          <span className="nombre-score">{score}%</span>
          <span>de votre objectif</span>
        </div>
      </div>
    </div>
  )
}

export default Score;