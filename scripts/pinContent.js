const pinataApiKey = process.env.PINATA_API_KEY;
const pinataSecretApiKey = process.env.PINATA_SECRET_API_KEY;
const asset = "./assets/pinnie.json"

const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const pinFileToIPFS = async () => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  let data = new FormData();
  data.append("file", fs.createReadStream(asset));
  const res = await axios.post(url, data, {
    maxContentLength: "Infinity", 
    headers: {
      "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      pinata_api_key: pinataApiKey, 
      pinata_secret_api_key: pinataSecretApiKey,
    },
  });
  console.log(res.data);
};
pinFileToIPFS();


// pinnie.png
// {
//   IpfsHash: 'QmVVBisyyvWwxEB5eQnhdJMeKcnzB5TiEUPoLH4ew5g6Gk',
//   PinSize: 3923,
//   Timestamp: '2023-10-13T17:04:14.189Z'
// }

// pinnie.json
// {
//   IpfsHash: 'QmX6jRiSyNY38Jp7hB8GS3XrG1EBEpwPMzfgoUAyznMrrk',
//   PinSize: 131,
//   Timestamp: '2023-10-13T17:06:43.233Z'
// }