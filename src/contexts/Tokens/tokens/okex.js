import config from '../../../config/index.js'
import {OKT_TEST_CHAINID, OKT_MAIN_CHAINID} from '../../../config/coinbase/nodeConfig'
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
  //
  [OKT_MAIN_CHAINID]: {
    '0x218c3c3d49d0e7b37aff0d8bb079de36ae61a4c0': { // BNB
      [NAME]: 'Binance',
      [SYMBOL]: 'BNB',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xa040f70b6eaf57554dfd6eba96eac67666922a0c',
      [REDEEM_MAX_NUM]: 1000000,
      [REDEEM_MIN_NUM]: 0.1,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x63a3d28bB9187809553dD16981C73f498B6b2687',
      [DEPOSIT_TYPE]: 0,
      [DEPOSIT_MAX_NUM]: 0,
      [DEPOSIT_MIN_NUM]: 0,
      [EXTENDOBJ]: {
        BRIDGE: [
          { type: 56, isSwitch: 1 }
        ],
        VERSION: 'V2',
      },
    },
    '0x332730a4f6e03d9c55829435f10360e13cfa41ff': { // BUSD
      [NAME]: 'Binance-Peg BUSD Token',
      [SYMBOL]: 'BUSD',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x16ecf3678b5bbce7f2c41e2472c46978ced27c12',
      [REDEEM_MAX_NUM]: 1000000,
      [REDEEM_MIN_NUM]: 0.1,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x63a3d28bB9187809553dD16981C73f498B6b2687',
      [DEPOSIT_TYPE]: 0,
      [DEPOSIT_MAX_NUM]: 0,
      [DEPOSIT_MIN_NUM]: 0,
      [EXTENDOBJ]: {
        BRIDGE: [
          { type: 56, isSwitch: 1 }
        ],
        VERSION: 'V2',
      },
    },
    '0x97513e975a7fa9072c72c92d8000b0db90b163c5': { // BabyDoge
      [NAME]: 'Baby Doge Coin',
      [SYMBOL]: 'BabyDoge',
      [DECIMALS]: 9,
      [EXCHANGE_ADDRESS]: '0x2bdfdfcefd8f9ed7b5bfe4cb6c655b572752b3a1',
      [REDEEM_MAX_NUM]: 1000000,
      [REDEEM_MIN_NUM]: 0.1,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x63a3d28bB9187809553dD16981C73f498B6b2687',
      [DEPOSIT_TYPE]: 0,
      [DEPOSIT_MAX_NUM]: 0,
      [DEPOSIT_MIN_NUM]: 0,
      [EXTENDOBJ]: {
        BRIDGE: [
          { type: 56, isSwitch: 1 }
        ],
        VERSION: 'V2',
      },
    },
    '0x3405a1bd46b85c5c029483fbecf2f3e611026e45': { // LAIKA
      [NAME]: 'LaikaProtocol',
      [SYMBOL]: 'LAIKA',
      [DECIMALS]: 9,
      [EXCHANGE_ADDRESS]: '0x5da30287f6cd6e3b71af4411ac484733c1dd5306',
      [REDEEM_MAX_NUM]: 1000000,
      [REDEEM_MIN_NUM]: 0.1,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x63a3d28bB9187809553dD16981C73f498B6b2687',
      [DEPOSIT_TYPE]: 0,
      [DEPOSIT_MAX_NUM]: 0,
      [DEPOSIT_MIN_NUM]: 0,
      [EXTENDOBJ]: {
        BRIDGE: [
          { type: 56, isSwitch: 1 }
        ],
        VERSION: 'V2',
      },
    },
    '0x6b7a87899490ece95443e979ca9485cbe7e71522': { // HERO
      [NAME]: 'HERO',
      [SYMBOL]: 'HERO',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x68d3c153d531eeeae40ce983282073365efabc1c',
      [REDEEM_MAX_NUM]: 1000000,
      [REDEEM_MIN_NUM]: 0.1,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x63a3d28bB9187809553dD16981C73f498B6b2687',
      [DEPOSIT_TYPE]: 0,
      [DEPOSIT_MAX_NUM]: 0,
      [DEPOSIT_MIN_NUM]: 0,
      [EXTENDOBJ]: {
        BRIDGE: [
          { type: 56, isSwitch: 1 }
        ],
        VERSION: 'V2',
      },
    },
    '0xdae6c2a48bfaa66b43815c5548b10800919c993e': { // HONOR
      [NAME]: 'HONOR',
      [SYMBOL]: 'HONOR',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xfb829138c59fa8619699fb33a874d1f7d5d4d5a5',
      [REDEEM_MAX_NUM]: 1000000,
      [REDEEM_MIN_NUM]: 0.1,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0xb44022e04fd4A1219E58aB0A773bf34181c35c59',
      [DEPOSIT_TYPE]: 0,
      [DEPOSIT_MAX_NUM]: 0,
      [DEPOSIT_MIN_NUM]: 0,
      [EXTENDOBJ]: {
        BRIDGE: [
          { type: 137, isSwitch: 1 }
        ],
        VERSION: 'V2',
      },
    },
    '0xacd7b3d9c10e97d0efa418903c0c7669e702e4c0': { // ELE
      [NAME]: 'Eleven.finance',
      [SYMBOL]: 'ELE',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x03c1bf4660be340ec25024f160204052385256b1',
      [REDEEM_MAX_NUM]: 1000000,
      [REDEEM_MIN_NUM]: 0.1,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x63a3d28bB9187809553dD16981C73f498B6b2687',
      [DEPOSIT_TYPE]: 0,
      [DEPOSIT_MAX_NUM]: 0,
      [DEPOSIT_MIN_NUM]: 0,
      [EXTENDOBJ]: {
        BRIDGE: [
          { type: 56, isSwitch: 1 }
        ],
        VERSION: 'V2',
      },
    },
  },
  [OKT_TEST_CHAINID]: {
    '0x40af41149a6e82e378fe8ad7e1ae11e42c78a985': { // ANY
      [NAME]: 'Anyswap',
      [SYMBOL]: 'ANY',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x862c9069d3bf99266a4dc43587cff9c5e74f1b9b',
      [REDEEM_MAX_NUM]: 1000000,
      [REDEEM_MIN_NUM]: 0.1,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 0,
      [DEPOSIT_MAX_NUM]: 0,
      [DEPOSIT_MIN_NUM]: 0,
      [EXTENDOBJ]: {},
    },
  }
}