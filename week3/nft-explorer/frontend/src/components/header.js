import React, { useState } from 'react';
import axios from 'axios';

const Header = ({setNftsForOwner}) => {
  const [address, setAddress] = useState();

  const getNftsForOwner = async () => {
    setNftsForOwner()
    await axios.get(`http://localhost:3000/api/getNfts/${address}`)
    .then(res => setNftsForOwner(res));
  }

  return (
    <div className='headerWrapperOne'>
      <div className='title'>
        <h2>Discover all the NFTs <br/> of an ethereum address and diggin !</h2>
      </div>
      <div className='headerWrapperTwo'>
        <input onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" placeholder="0xB88F...8018"/>
        <button onClick={getNftsForOwner} type="button" className="btn btn-primary">Explore</button>
      </div>
    </div>
  )
}

export default Header;
