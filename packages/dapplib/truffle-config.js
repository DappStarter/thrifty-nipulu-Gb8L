require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note rifle come install glove equal genuine'; 
let testAccounts = [
"0x37a260aa38d3cb70bede73948571175794f92d8ff136fa8a2b21373d93fafcf2",
"0x9f85d89be176c836e8c6836850226ffd56dd3fde70f2e86236fba234d7ba0976",
"0x07a98b5749809918223bd92af02cb07b4d9e688e4efcb24ad6428f568eaf858a",
"0x43286797959ac1f904295fc8a7c05ee241a74a76ccf448ceab51c1dc8e86b6c6",
"0x783794668bd640237e60505ffafbbca37a45789f0ce088478ced2a1a0b858230",
"0xbd3f3dd1874acd26164a2f86eb13ca58180b48e41089e94171e27dc847869495",
"0x0a6b1713dbea30ba9a72ac55ee2f77884ea85b636aadca9bd03d2353bb3b73f1",
"0x4cdeeb9e8ec7abdd386b51052fdb121dc39c6b6835c4769cb986f9e3e4a994bf",
"0x6c08d8bbc6b4fc5865149212eaadbc78a35b4da88bac9017a840bb0307da9952",
"0xf459ec8296d272797644dc0f1b3262aaf91e91975e38a2c1b059c2c2d7e3a56d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


