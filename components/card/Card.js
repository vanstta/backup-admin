import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { home } from "../../actions/home";

const Card = ({ title, description }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(home());
  }, [dispatch]);

  return (
    <div className="card__item">
      <div className="card__texts">
        <h2 className="card__title">{title}</h2>
        <p className="card__paragraph">{description}</p>
      </div>
      <button className="card__btn">Más información</button>
    </div>
  );
};

export default Card;
