import Web3 from 'web3';
import Portis from '@portis/web3';

const getWeb3 = () =>
    new Promise((resolve, reject) => {
        // Wait for loading completion to avoid race conditions with web3 injection timing.
        window.addEventListener('load', async () => {
            const portis = new Portis(
                '28b56671-d806-420d-a652-eb7279ceb916',
                'ropsten'
            );
            const web3 = new Web3(portis.provider);
            resolve(web3);
        });
    });

export default getWeb3;
