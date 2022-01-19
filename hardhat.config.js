require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/dQF2RfL_JmddwO_7rrIXdSFPeii0DADa',
      accounts: ['b951100cf99884247cd37acd4a6f53a4e29513271d49682a332eb36ca23b2bd2'],
    },
  },
};