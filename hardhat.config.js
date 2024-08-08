require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["x300caf37f30ab731107ee4ef1a1aabc7510c9f51"],
    },
  },
};
