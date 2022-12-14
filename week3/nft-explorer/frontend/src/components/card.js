import React, { useState } from 'react';

const Card = ({ title, image, contractAddress }) => {
  const [fallbackSrc, setFallbackSrc] = useState()
  const [errorImg, setErrorImg] = useState();

  function imgError() {
    setErrorImg(true);
    setFallbackSrc("https://via.placeholder.com/295x295")
  }


  return (
    <div>
      <div className='card' >
        <img src={errorImg === true ? fallbackSrc : image} className="card-img-top" onError={imgError} alt="..."/>
        <div className="card-bottom">
          <p>{title}</p>
          <button><a href={`https://etherscan.io/address/${contractAddress}`}>🔍</a></button>
        </div>
      </div>
    </div>
  )
}

export default Card;
