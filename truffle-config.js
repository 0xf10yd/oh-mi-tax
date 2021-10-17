const path = require('path');
const HDWalletProvider = require('truffle-hdwallet-provider');

// clint : src : contracts 


module.exports = { 
    contracts_build_directory: path.join(__dirname, 'client/src/contracts'),
    networks: {
        development: {

        },
    }
}