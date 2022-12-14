const { Alchemy } = require("alchemy-sdk");
const config = require('../configs/config')
const alchemy = new Alchemy(config.alchemySettings);

exports.getNfts = async (req, res) => {

  try {
    let data = [];
    const nftsForOwner = await alchemy.nft.getNftsForOwner(req.params.address, false, "SPAM")
    .then(res => res.ownedNfts)

    nftsForOwner.map((nft) => {
      if (!nft.spamInfo && nft.rawMetadata.image != undefined) {
        if (nft.rawMetadata.image.startsWith("ipfs")) {
          let CID = nft.rawMetadata.image.split('').slice(7).join('');
          imageUrl = `https://ipfs.io/ipfs/${CID}`
        } else {
          imageUrl = nft.rawMetadata.image;
        }
      } else {
        imageUrl = "https://via.placeholder.com/295x295"
      }

      data.push({contractAddress: nft.contract.address,
        title: nft.title ? nft.title : nft.tokenId,
        tokenId: nft.tokenId,
        tokenType: nft.tokenType,
        image: imageUrl,
        collectionName: nft.contract.name})
    })

    res.send(data);
  } catch (err) {
    console.log(new Error(err));
  }
}
