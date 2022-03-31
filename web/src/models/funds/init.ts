import { $funds, findFundFx } from '.';

import './effects';
import { PublicKey } from '@solana/web3.js';
import { AppGate } from '../app';

$funds.on(findFundFx.doneData, (state, newFund) => [
  ...state.filter((find) => !find.pubkey.equals(newFund.pubkey)),
  newFund,
]);

// TODO: temp
const fundAddress = new PublicKey(
  '5P3giWpPBrVKL8QP8roKM7NsLdi3ie1Nc2b5r9mGtvwb',
);
AppGate.open.watch(() => {
  findFundFx(fundAddress);
});
