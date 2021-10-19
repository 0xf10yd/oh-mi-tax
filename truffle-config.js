const path = require('path');
const HDWalletProvider = require('truffle-hdwallet-provider');

// clint : src : contracts 

// Truffle configuration
module.exports = { 
    contracts_build_directory: path.join(__dirname, 'client/src/contracts'),
    networks: {
        development: {
            port: 7545,
            host: '127.0.0.1',
            network_id: 5777,
        },
        ropsten_infura: {
            provider: function () {
                // Ropsten network definition: The provider for the ropsten network definition instantiates the HDWalletProvider.
                return new HDWalletProvider(
                    'brick blade misery genius grow frequent spoon potato mechanic execute ankle depart friend owner orchard',
                    'https://ropsten.infura.io/v3/3939ce230df34d3986d46ff093d4d562',
                    0
                );
            },
            network_id: 3,
        },
    },
    compilers: {
        solc: {
            version: '0.8.0',
        },
    },
};
