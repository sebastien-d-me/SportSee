import "./Activite.css";

type ActiviteProps = {
  image: string;
};

function Activite({ image }: ActiviteProps) {
  return (
    <div className="activite">
        <img src={image} />
    </div>
  )
}

export default Activite;