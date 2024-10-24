
export const DAPP_URL = "https://oregonmoney.org/";
export const DAPP_TITLE = "Oregon Money";

export const networkChainId = 369;

export const MASTERCHEF_ADDRESS = "0x43e1AE8B0EBb5F7F146C6ffCd30C0A538f11ACa2";
export const NATIVE_TOKEN_ADDRESS = "0xA1077a294dDE1B09bB078844df40758a5D0f9a27"; //WPLS
export const FARM_TOKEN_ADDRESS = "0x2f777ACc40A4C87447E8ab818C1595c2e2CB0dcc"; //Yield 
export const STABLECOIN_ADDRESS = "0xefD766cCb38EaF1dfd701853BFCe31359239F305"; //DAI
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const DEAD_ADDRESS = "0x000000000000000000000000000000000000dEaD";

//PulseX V1
export let PULSEX_V1_FACTORY_ADDRESS = "0x1715a3E4A142d8b698131108995174F37aEBA10D";
export let PULSEX_V1_ROUTER_ADDRESS = "0x98bf93ebf5c380C0e6Ae8e192A7e2AE08edAcc02";

//PulseX V2
export let PULSEX_V2_FACTORY_ADDRESS = "0x29ea7545def87022badc76323f373ea1e707c523";
export let PULSEX_V2_ROUTER_ADDRESS = "0x165C3410fC91EF562C50559f7d2289fEbed552d9";

//DEXTOP


export const Oracles = {
    PULSEX_V1: 0,
    PULSEX_V2: 1,
    
}

export const Types = {
    Pool: 0,
    Farm: 1
}

export const DepositTypes = {
    TOKEN: 0,
    PLS: 1
}


export let farms = [
    {
        orderById: 1,
        displayName: 'CALI/PLS v2',
        lpAbbreviation: 'LP ',
        poolId: 0,
        stakingToken: '0x92EB1dFfd1C0beb07D8020dBC1f8146B40a572d4',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/add/V2/PLS/0x2f777ACc40A4C87447E8ab818C1595c2e2CB0dcc',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 5,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.PULSEX_V2
    },

    {
        orderById: 2,
        displayName: 'ORGN/PLS v2',
        lpAbbreviation: 'LP ',
        poolId: 1,
        stakingToken: '0x8dd908183A38653348406f02776013428a1E1B01',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/add/V2/0x160Aaea031006C125F8Be4A00f77AC5010BECB3c/PLS',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 3,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.PULSEX_V2
    },

    {
        orderById: 3,
        displayName: 'ORGN/PLSPUP v2',
        lpAbbreviation: 'LP',
        poolId: 2,
        stakingToken: '0x9ab04B6Dc5Cb4A90e4BAf05622ADF60f452F2034',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/add/V2/0x160Aaea031006C125F8Be4A00f77AC5010BECB3c/0xe3B3f5F95d263edc6A5e3D4b7314728A390a4342',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 2,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.PULSEX_V2
    },

    {
        orderById: 4,
        displayName: 'E.DAI/PLS v1',
        lpAbbreviation: 'LP',
        poolId: 3,
        stakingToken: '0xE56043671df55dE5CDf8459710433C10324DE0aE',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeidea3ibq4lu5t6vk6ihp4iuznjb3ltsdm5y2shv4atxgyd3d33aim/#/add/V1/PLS/0xefD766cCb38EaF1dfd701853BFCe31359239F305',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 2,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.PULSEX_V1
    },

    {
        orderById: 5,
        displayName: 'Abyss/PLS v2',
        lpAbbreviation: 'LP',
        poolId: 4,
        stakingToken: '0xb620f728e3C87350cA9360a1c8dcCbb2B2e2c801',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/add/V2/0x898515c05794e195b4BA11c3e4e5A6d3c2a44FeC/PLS',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 2,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.PULSEX_V2
    },

    {
        orderById: 7,
        displayName: 'TRUMP/PLS v2',
        lpAbbreviation: 'LP ',
        poolId: 9,
        stakingToken: '0xbda3bb126c5cf9eb6092acadd20792f89b37c873',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/add/V2/PLS/0x7DC5080495844BDBAFA0E8cbb82590F6A51a2eCE',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 2,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.PULSEX_V2
    },

    {
        orderById: 8,
        displayName: 'NOTG/PLS v2',
        lpAbbreviation: 'LP ',
        poolId: 11,
        stakingToken: '0x0e1b93854D7988Fa2d2E06b74560CB9F9ae48949',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/add/V2/PLS/0x3F7054e1490ca6E51A4CBd654F5a360635a9b91B',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 2,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.PULSEX_V2
    },

    {
        orderById: 9,
        displayName: 'PLSPUP/PLS v2',
        lpAbbreviation: 'LP ',
        poolId: 12,
        stakingToken: '0x6E649BE4ABdA660519baB8AB760001EC1663BD16',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/add/V2/PLS/0xe3B3f5F95d263edc6A5e3D4b7314728A390a4342',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 2,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.PULSEX_V2
    },


    {
        orderById: 1,
        displayName: 'ORGN',
        lpAbbreviation: 'ORGN',
        poolId: 6,
        stakingToken: '0x160Aaea031006C125F8Be4A00f77AC5010BECB3c',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/?outputCurrency=0x160Aaea031006C125F8Be4A00f77AC5010BECB3c',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 1,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Pool,
        oracle: Oracles.PULSEX_V2
    },

    {
        orderById: 2,
        displayName: 'Glass',
        lpAbbreviation: 'Glass',
        poolId: 7,
        stakingToken: '0xd687FF2C9C5294f4A2bC0300B46eA921dB312063',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/?outputCurrency=0xd687FF2C9C5294f4A2bC0300B46eA921dB312063',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 1,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Pool,
        oracle: Oracles.PULSEX_V1
    },

    {
        orderById: 3,
        displayName: 'pDAI',
        lpAbbreviation: 'pDAI',
        poolId: 8,
        stakingToken: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/?outputCurrency=0x6B175474E89094C44Da98b954EedeAC495271d0F',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 2,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Pool,
        oracle: Oracles.PULSEX_V2
    },

    {
        orderById: 4,
        displayName: 'LDJT',
        lpAbbreviation: 'LDJT',
        poolId: 10,
        stakingToken: '0xb79C22174C1E1F5d78419687E6002D4E25f17307',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/?outputCurrency=0xb79C22174C1E1F5d78419687E6002D4E25f17307',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 2,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Pool,
        oracle: Oracles.PULSEX_V2
    }

    


]