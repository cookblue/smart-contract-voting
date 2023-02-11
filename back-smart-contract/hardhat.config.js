require("@nomicfoundation/hardhat-toolbox");
// Agregar una red de prueba
const ALCHEMY_API_KEY = "QcB9NfMMrDLdRKrSIJGtowRmmiKW1RXD";
const GOERLI_PRIVATE_KEY = "cb2b669dec6cd68a7f3d6063f6ce466f41e8234a5ad668768d3c275092612bd6";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
