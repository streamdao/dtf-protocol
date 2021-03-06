import { TOKENS as TOKENS_ORIGINAL } from '@solana/spl-token-registry/dist/main/lib/tokens';
import { KnownToken } from '@solana/spl-token-registry';

export const TOKENS = {
  ...TOKENS_ORIGINAL,
  devnet: [
    {
      tokenSymbol: 'SOL',
      mintAddress: '8UGbGeCyvnWZQ2DL2VDxyCTsmy7dUEoJtJBr9EZxnTH4',
      tokenName: 'Solana',
      icon:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/info/logo.png',
    },
    {
      tokenSymbol: 'STR',
      mintAddress: '5P3giWpPBrVKL8QP8roKM7NsLdi3ie1Nc2b5r9mGtvwb',
      tokenName: 'Stream Token',
      icon:
        'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5P3giWpPBrVKL8QP8roKM7NsLdi3ie1Nc2b5r9mGtvwb/logo.jpg',
    },
    {
      tokenSymbol: 'FTT',
      mintAddress: 'DLMTFLwUMocgy63KEMb59VBHYPvjWv399N5HFgrXsgnv',
      tokenName: 'FTT',
      icon:
        'https://raw.githubusercontent.com/trustwallet/assets/f3ffd0b9ae2165336279ce2f8db1981a55ce30f8/blockchains/ethereum/assets/0x50D1c9771902476076eCFc8B2A83Ad6b9355a4c9/logo.png',
    },
    {
      tokenSymbol: 'REN',
      mintAddress: '4McZwrFKMo9QhXNQFKuwxhG3aHik6xhsFZBhHVaCW9CJ',
      tokenName: 'REN',
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2539.png',
    },
    {
      tokenSymbol: 'SRM',
      mintAddress: 'J6L4Ujv82ryQgjnA2rgaFsbtPwRBJNGCQsWdWWuH1aPT',
      tokenName: 'Serum',
      icon:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x476c5E26a75bd202a9683ffD34359C0CC15be0fF/logo.png',
      website: 'https://projectserum.com',
    },
    {
      tokenSymbol: 'SUSHI',
      mintAddress: '6Cyp4H66L5JE2DnEgpYRBS27sY7rYSLPz6b31q1coUYJ',
      tokenName: 'SUSHI',
      icon:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2/logo.png',
    },
    {
      tokenSymbol: 'RAY',
      mintAddress: '757dVSETUqFjmDQPAkCyiZzumjtShHTb7B8PpFFFUSib',
      tokenName: 'RAY',
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8526.png',
    },
    {
      tokenSymbol: 'FIDA',
      mintAddress: 'FhxsBCrUZYhiUyWQkfbJQdG9Y32NXmtxFriQs7WMdtwo',
      tokenName: 'Bonfida',
      icon:
        'https://raw.githubusercontent.com/dr497/awesome-serum-markets/02ce7c74fd2e9bd4cb55a15f735fc3ad0e7335f6/icons/fida.svg',
    },
    {
      tokenSymbol: 'USDC',
      mintAddress: 'DbMXbT2zYBNC9QbbcPtQKEZ491vXiTb4mTXmTBRor1TC',
      tokenName: 'USDC',
      icon:
        'https://raw.githubusercontent.com/trustwallet/assets/f3ffd0b9ae2165336279ce2f8db1981a55ce30f8/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
  ] as KnownToken[],
};
