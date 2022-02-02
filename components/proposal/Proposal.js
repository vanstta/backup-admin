import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { home } from "../../actions/home";
import Card from "../card/Card";

import "./proposal.scss";

const Proposal = () => {
  const dispatch = useDispatch();

  const { title, subTitle, infoProposal } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(home());
  }, []);

  return (
    <div className="container">
      <section className="card__container">
        <div className="renctangle">
          <h2 className="renctangle__title">{title}</h2>
          <p className="renctangle__subtitle">{subTitle}</p>
        </div>

        <div className="card">
          {React.Children.toArray(
            infoProposal.map((item) => <Card {...item} />)
          )}
        </div>
      </section>
    </div>
  );
};

export default Proposal;
