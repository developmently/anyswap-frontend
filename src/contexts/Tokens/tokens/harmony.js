import config from '../../../config/index.js'
import {ONE_MAIN_CHAINID} from '../../../config/coinbase/nodeConfig'
import {
  NAME,
  SYMBOL,
  DECIMALS,
  EXCHANGE_ADDRESS,
  REDEEM_MAX_NUM,
  REDEEM_MIN_NUM,
  FEE,
  MAXFEE,
  MINFEE,
  ISSWITCH,
  ISDEPOSIT,
  ISREDEEM,
  DEPOSIT_ADDRESS,
  DEPOSIT_TYPE,
  DEPOSIT_MAX_NUM,
  DEPOSIT_MIN_NUM,
  EXTENDOBJ,
} from '../methods/mode'
import {dirSwitch} from '../methods/common'

export default {
  [ONE_MAIN_CHAINID]: {
    '0x03732a1b4297ec285999402a9129cfad62a65463': { // BTC
      [NAME]: 'Bitcoin',
      [SYMBOL]: config.prefix + 'BTC',
      [DECIMALS]: 8,
      [EXCHANGE_ADDRESS]: '0x91ec267c6f126abfbc2c4e49fc43c06f6db677f3',
      [REDEEM_MAX_NUM]: 20,
      [REDEEM_MIN_NUM]: 0.002,
      [FEE]: 0.001,
      [MAXFEE]: 0.01,
      [MINFEE]: 0.001,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '1J3XMw4HnR4dm65QtwG2oJRBjRXFqGS1ap',
      [DEPOSIT_TYPE]: 0,
      [DEPOSIT_MAX_NUM]: 20,
      [DEPOSIT_MIN_NUM]: 0.0005,
      [EXTENDOBJ]: {
        VERSION: 'V2'
      },
    },
    '0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8': { // BIFI
      [NAME]: 'beefy.finance',
      [SYMBOL]: 'BIFI',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xf63c230e2aec830c9e424e79049cc1376b1ec3b4',
      [REDEEM_MAX_NUM]: 200000,
      [REDEEM_MIN_NUM]: 10,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x5b531C46dB853fD0fDA4736AC013D7a25E8b1083',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 200000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]: {
        BRIDGE: [
          { type: 56, isSwitch: 1 }
        ],
        VERSION: 'V2'
      },
    },
  }
}