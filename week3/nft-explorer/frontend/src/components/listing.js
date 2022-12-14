import Card from './card';

const Listing = ({ nftsForOwner, setContractInfos }) => {
  let listing;
  if (nftsForOwner !== undefined) {
    listing = <div className='listingWrapper'>
                {nftsForOwner.data.map((nft, index) => {
                  return <Card setContractInfos={setContractInfos} collectionName={nft.collectionName} title={nft.title} image={nft.image} contractAddress={nft.contractAddress} tokenId={nft.tokenId} key={index} />
                })}
              </div>


  } else {
    listing = <div>
                <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/657a02ed-18e4-4ba0-aad5-10e32e36b1c8-profile_image-300x300.png"/>
              </div>
  }

  return (
    <div>
      {listing}
    </div>
  )
}

export default Listing;
