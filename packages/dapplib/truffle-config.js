require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food grocery dash oval coconut hundred light army gift'; 
let testAccounts = [
"0x7762340cede2cf39ce1a521504434cf0144bafa96593d62fa3f0ddc01070154e",
"0x83475309de11bd0c5d19ab4fcb8289e59638d8d7092db39aba2f66360373d3d4",
"0xdfafea370867e5ba8e7cba0095bc1fa1e8f39ccc1860cbab84184a1529c96068",
"0x1e17104646f33af4dbb7af139b566397c15733f7d690734acbe6f46b62533c23",
"0x0b671b8350154ffa164348d2992679fc032bb83653e68e3f44bc413d6ae5b4e8",
"0x82163b5ad9541bb9be670a3b78a7bc7a4b053e48bc1db1fe2a6913ed5c1ad18a",
"0xd71aedb5ad072c3bc1074b768f722a310a5bc72d771d762714b6ce57b21e50c7",
"0xece3bf34c0b318fb4d1d5ae51bcbc5378d22c6890fc5b4e1b28729b473967bbe",
"0xffcc591c1e17eff4b946426924034b046b14c37419ac51dbcff4eec17ccadcec",
"0x368a6fae9dc400af5fc761335aa776e56ab04f0d719a0f4873b367b8117fdfe8"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
