import { EthereumNetwork } from '@types';

export const getNetworkId = (network: EthereumNetwork): number => {
  switch (network) {
    case 'mainnet':
      return 1;
    case 'morden':
      return 2;
    case 'ropsten':
      return 3;
    case 'rinkeby':
      return 4;
    case 'kovan':
      return 42;
  }
};
