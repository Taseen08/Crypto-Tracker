import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p style={{ "textTransform" : symbol !== "Symbol" && "uppercase"}}>{symbol}</p>
          <p className="coin-price">{price !== "Price" && "$"}{price}</p>
          <p className="coin-volume">{volume !== "Volume" && "$"}{volume.toLocaleString()}</p>
          <p className="coin-marketcap">{marketcap !== "Mkt Capital" && "$"}{marketcap.toLocaleString()}</p>
      </div>
    </div>
    </div>
  );
};
export default Coin;
