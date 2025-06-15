import piza from "../assets/pizza.jpg";
export const CardPizza = (props) => {
  return (
    <div className="card mt-5">
      <img src={props.img || piza} alt={props.titulo} />
      <div className="card-body ">
        <h5 className="card-title">{props.titulo}</h5>
        <h6>Ingredientes:</h6>
        <ul>
          {props.ingredientes?.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
      </div>

      <div className="card-body">
        <p>Precio: {props.precio}</p>
        <div className="boton">
          <button className=" btn btn-primary">
            <a href="#" className="card-link">
              {props.ver}
            </a>
          </button>

          <button className=" btn btn-success">
            <a href="#" className="card-link">
              {props.añadir}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardPizza;
