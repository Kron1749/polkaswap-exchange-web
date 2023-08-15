import { Operation, TransactionStatus } from '@sora-substrate/util';
import { RewardingEvents } from '@sora-substrate/util/build/rewards/consts';
import Theme from '@soramitsu/soramitsu-js-ui/lib/types/Theme';
import { en as walletEn } from '@soramitsu/soraneo-wallet-web';

import { AlertFrequencyTabs, AlertTypeTabs } from '@/types/tabs';

import { MoonpayNotifications } from '../components/pages/Moonpay/consts';
import { PageNames, RewardsTabsItems } from '../consts';
import { DemeterPageNames } from '../modules/demeterFarming/consts';

export default {
  // Wallet project keys
  ...walletEn,
  // {AppName} project keys
  appName: '{AppName}',
  hashiBridgeText: '{Hashi} bridge',
  moonpayText: 'MoonPay',
  changeNetworkText: 'Change network in {Metamask}',
  accountText: 'account | accounts',
  newAccountsText: 'New accounts',
  transactionText: 'transaction | transactions',
  transactionSubmittedText: 'Transaction was submitted',
  unknownErrorText: 'ERROR Something went wrong...',
  unknownAssetText: 'Unknown asset',
  connectWalletText: 'Connect account',
  changeAccountText: 'Change account',
  connectedText: 'Connected',
  connectedAccount: 'Connected account',
  selectNodeConnected: 'Connected to: {chain}',
  connectWalletTextTooltip: 'Connect to {Sora} Network with {PolkadotJs}',
  selectNodeText: 'Select node',
  bridgeText: 'Bridge',
  acceptText: 'Accept & Hide',
  continueText: 'Continue',
  acceptOnSctollText: 'Scroll to accept',
  comingSoonText: 'Coming Soon',
  releaseNotesText: 'Release notes',
  memorandum: '{AppName} Memorandum and Terms of Services',
  FAQ: '{AppName} FAQ',
  disclaimerTitle: 'Disclaimer:',
  disclaimer:
    '{disclaimerPrefix} This website is maintained by the {Sora} community. Before continuing to use this website, please review the {polkaswapFaqLink} and documentation, which includes a detailed explanation on how {AppName} works, as well as the {memorandumLink}, and {privacyLink}. These documents are crucial to a secure and positive user experience. By using {AppName}, you acknowledge that you have read and understand these documents. You also acknowledge the following: 1) your sole responsibility for compliance with all laws that may apply to your particular use of {AppName} in your legal jurisdiction; 2) your understanding that the current version of {AppName} is an alpha version: it has not been fully tested, and some functions may not perform as designed; and 3) your understanding and voluntary acceptance of the risks involved in using {AppName}, including, but not limited to, the risk of losing tokens. Please do not continue without reading the {polkaswapFaqLink}, {memorandumLink}, {privacyLink}!',
  fiatDisclaimer:
    'Please note that the fiat values associated with cryptocurrencies on our website are provided by external services (Subquery, Subsquid, Ceres API)  are approximate. Given the inherent complexity of these calculations, absolute precision at all times cannot be guaranteed.',
  poweredBy: 'Powered by',
  confirmText: 'Confirm',
  confirmTransactionText: 'Confirm transaction in {direction}',
  signAndClaimText: 'Sign and claim',
  retryText: 'Retry',
  networkFeeText: 'Network Fee',
  networkFeeTooltipText: "Network fee is used to ensure {Sora} system's growth and stable performance.",
  ethNetworkFeeTooltipText:
    'Please note that the {Ethereum} network fees displayed on {AppName} are only rough estimations, you can see the correct fee amount in your connected {Ethereum} wallet prior to confirming the transaction.',
  marketText: 'Market',
  marketAlgorithmText: 'Market algorithm',
  balanceText: 'Balance',
  insufficientBalanceText: 'Insufficient {tokenSymbol} balance',
  firstPerSecond: '{first} per {second}',
  pairIsNotCreated: "Token pair isn't created",
  nameText: 'Name',
  addressText: 'Address',
  forText: 'for',
  learnMoreText: 'Learn more',
  blockNumberText: 'Block number',
  transactionDetailsText: 'Transaction Details',
  noDataText: 'No data',
  [Theme.LIGHT]: 'Light',
  [Theme.DARK]: 'Dark',
  pageTitle: {
    [PageNames.Swap]: 'Swap',
    [PageNames.Pool]: 'Pool',
    [PageNames.Bridge]: '@:bridgeText',
    [PageNames.About]: 'About',
    [PageNames.Stats]: 'Statistics',
    [PageNames.Wallet]: 'Wallet',
    [PageNames.Rewards]: 'Rewards',
    [PageNames.ExploreTokens]: 'Tokens',
    [PageNames.ExplorePools]: 'Pools',
    [PageNames.ExploreStaking]: 'Staking',
    [PageNames.ExploreFarming]: 'Farming',
    [PageNames.AddLiquidity]: 'Add Liquidity',
    [PageNames.RemoveLiquidity]: 'Remove Liquidity',
    [DemeterPageNames.Staking]: 'Staking',
  },
  mainMenu: {
    [PageNames.Swap]: 'Swap',
    [PageNames.Pool]: 'Pool',
    [PageNames.Bridge]: '@:bridgeText',
    [PageNames.Farming]: 'Farming',
    [PageNames.Wallet]: 'Account',
    [PageNames.Rewards]: 'Rewards',
    [PageNames.About]: 'About',
    [PageNames.Stats]: 'Statistics',
    [PageNames.ExploreContainer]: 'Explore',
    [PageNames.StakingContainer]: 'Staking',
  },
  alerts: {
    [AlertTypeTabs.Drop]: 'Drops below',
    [AlertTypeTabs.Raise]: 'Raises above',
    [AlertFrequencyTabs.Once]: 'Once',
    [AlertFrequencyTabs.Always]: 'Always',
    edit: 'Edit alert',
    delete: 'Delete alert',
    onDropDesc: '{token} drops below {price}',
    onRaiseDesc: '{token} raises above {price}',
    alertsTitle: 'Alerts',
    alertsTooltip:
      'Price alerts are notifications that can be set by you to receive updates when the price of a particular token reaches certain point you set',
    createBtn: 'Create new price alert',
    finishBtn: 'Finish alert setup',
    enableSwitch: 'Enable asset deposit notifications',
    currentPrice: 'current price',
    alertTyptTitle: 'Alert type',
    typeTooltip:
      "Choose either 'drops below' or 'raises above' option to specify the alert condition for tracking important price movements. These options allow you receive timely notifications when the value of your asset either falls below or rises above your designated threshold.",
    alertFrequencyTitle: 'Alert frequency',
    frequencyTooltip:
      "Select between 'once' and 'always' to determine how often you receive notifications for the chosen alert type. 'Once' will send a single notification when the condition is met, while 'always' will continue to notify you each time the price threshold is crossed.",
    noSupportMsg: "Notifications aren't supported by your browser",
  },
  headerMenu: {
    showBalances: 'Show Balances',
    hideBalances: 'Hide Balances',
    settings: 'Settings',
    switchTheme: 'Switch to {theme} Mode',
    switchLanguage: 'Choose Language',
    selectNode: '@:selectNodeText',
    showDisclaimer: 'Show Disclaimer',
    hideDisclaimer: 'Hide Disclaimer',
  },
  social: {
    wiki: '{Sora} Wiki',
    twitter: 'Twitter',
    telegram: 'Telegram',
    medium: 'Medium',
    reddit: 'Reddit',
    github: 'GitHub',
  },
  footerMenu: {
    faucet: 'Faucet',
    info: 'Info & Community',
    github: 'GitHub',
    sorawiki: '{Sora} Wiki',
  },
  helpDialog: {
    title: 'Help',
    termsOfService: 'Terms of Service',
    privacyPolicy: 'Privacy Policy',
    appVersion: '{AppName} version',
    contactUs: 'Contact us',
  },
  aboutNetworkDialog: {
    title: 'About',
    learnMore: '@:learnMoreText',
    network: {
      title: 'What is {Sora}?',
      description:
        '{AppName} is built on top of the {Sora} Network, and the {Sora} token (XOR) is used for gas/fees and liquidity provision on {AppName}. {Sora} Network allows for reduced fees, faster transactions and simpler consensus finalization and is focused on delivering interoperability across other blockchain ecosystems like {Ethereum}.',
    },
    polkadot: {
      title: 'What is {PolkadotJs}?',
      description:
        '{PolkadotJs} extension is a browser extension available for Firefox and Chrome dedicated to managing accounts for Substrate-based chains, including {Sora}, {Polkadot} and {Kusama}. You can add, import, and export accounts and sign transactions or extrinsics that you have initiated from websites you have authorized.',
    },
  },
  node: {
    errors: {
      connection: 'An error occurred while connecting to the node\n{address}\n',
      network: 'The node\n{address}\n is from the another network\n',
      existing: "This node is already added: '{title}'\n",
    },
    warnings: {
      disconnect: 'Сonnection to the node has been lost. Reconnecting...',
    },
    messages: {
      connected: 'Connection estabilished with node\n{address}\n',
      selectNode: 'Please select node to connect from the node list',
    },
  },
  selectNodeDialog: {
    title: '{Sora} Network node selection',
    addNode: 'Add custom node',
    updateNode: 'Update node',
    customNode: 'Custom node',
    howToSetupOwnNode: 'How to setup your own {Sora} node',
    select: 'Select',
    connected: 'Connected',
    selectNodeForEnvironment: 'Select a node for {environment} environment:',
    nodeTitle: '{chain} hosted by {name}',
    messages: {
      emptyName: 'Please input the name of the node',
      emptyAddress: 'Please input the address of the node',
      incorrectProtocol: 'Address should starts from ws:// or wss://',
      incorrectAddress: 'Incorrect address',
    },
  },
  selectLanguageDialog: {
    title: 'Language',
  },
  buttons: {
    max: 'MAX',
    chooseToken: 'Choose token',
    chooseAToken: 'Choose a token',
    chooseTokens: 'Choose tokens',
    enterAmount: 'Enter amount',
  },
  transfers: {
    from: 'From',
    to: 'To',
  },
  operations: {
    [Operation.Swap]: 'Swap',
    [Operation.Transfer]: 'Transfer',
    [Operation.AddLiquidity]: 'Add Liquidity',
    [Operation.RemoveLiquidity]: 'Remove Liquidity',
    [Operation.CreatePair]: 'Create Pair',
    [Operation.RegisterAsset]: 'Register Asset',
    [Operation.ClaimRewards]: 'Claim Rewards',
    [Operation.ReferralReserveXor]: 'Bond XOR',
    [Operation.ReferralUnreserveXor]: 'Unbond XOR',
    [Operation.ReferralSetInvitedUser]: 'Set {role}',
    [Operation.DemeterFarmingDepositLiquidity]: 'Add Liquidity Stake',
    [Operation.DemeterFarmingWithdrawLiquidity]: 'Remove Liquidity Stake',
    [Operation.DemeterFarmingStakeToken]: 'Add Stake',
    [Operation.DemeterFarmingUnstakeToken]: 'Remove Stake',
    [Operation.DemeterFarmingGetRewards]: 'Claim Rewards',
    [Operation.EthBridgeIncoming]: '@:hashiBridgeText',
    [Operation.EthBridgeOutgoing]: '@:hashiBridgeText',
    andText: 'and',
    [TransactionStatus.Finalized]: {
      [Operation.Transfer]: '{action} {amount} {symbol} {direction} {address}',
      [Operation.Swap]: 'Swapped {amount} {symbol} for {amount2} {symbol2}',
      [Operation.AddLiquidity]: 'Supplied {amount} {symbol} and {amount2} {symbol2}',
      [Operation.RemoveLiquidity]: 'Removed {amount} {symbol} and {amount2} {symbol2}',
      [Operation.CreatePair]: 'Supplied {amount} {symbol} and {amount2} {symbol2}',
      [Operation.RegisterAsset]: 'Registered {symbol} asset',
      [Operation.ClaimRewards]: 'Reward claimed successfully {rewards}',
      [Operation.ReferralReserveXor]: 'Bonded XOR successfully',
      [Operation.ReferralUnreserveXor]: 'Unbonded XOR successfully',
      [Operation.ReferralSetInvitedUser]: 'Set {role} {address}',
      [Operation.DemeterFarmingDepositLiquidity]: 'Supplied {symbol} and {symbol2} {amount} LP tokens',
      [Operation.DemeterFarmingWithdrawLiquidity]: 'Removed {symbol} and {symbol2} {amount} LP tokens',
      [Operation.DemeterFarmingStakeToken]: 'Added {amount} {symbol}',
      [Operation.DemeterFarmingUnstakeToken]: 'Removed {amount} {symbol}',
      [Operation.DemeterFarmingGetRewards]: '{amount} {symbol} claimed successfully',
      [Operation.EthBridgeIncoming]: 'Transfered {amount} {symbol} from {Ethereum} to {Sora}',
      [Operation.EthBridgeOutgoing]: 'Transfered {amount} {symbol} from {Sora} to {Ethereum}',
    },
    [TransactionStatus.Error]: {
      [Operation.Transfer]: 'Failed to send {amount} {symbol} to {address}',
      [Operation.Swap]: 'Failed to swap {amount} {symbol} for {amount2} {symbol2}',
      [Operation.AddLiquidity]: 'Failed to supply {amount} {symbol} and {amount2} {symbol2}',
      [Operation.RemoveLiquidity]: 'Failed to remove {amount} {symbol} and {amount2} {symbol2}',
      [Operation.CreatePair]: 'Failed to supply {amount} {symbol} and {amount2} {symbol2}',
      [Operation.RegisterAsset]: 'Failed to register {symbol} asset',
      [Operation.ClaimRewards]: 'Failed to claim rewards {rewards}',
      [Operation.ReferralReserveXor]: 'Failed to bond XOR',
      [Operation.ReferralUnreserveXor]: 'Failed to unbonded XOR',
      [Operation.ReferralSetInvitedUser]: 'Failed to set {role} {address}',
      [Operation.DemeterFarmingDepositLiquidity]: 'Failed to supply {amount} {symbol} and {symbol2} LP tokens',
      [Operation.DemeterFarmingWithdrawLiquidity]: 'Failed to remove {amount} {symbol} and {symbol2} LP tokens',
      [Operation.DemeterFarmingStakeToken]: 'Failed to add {amount} {symbol}',
      [Operation.DemeterFarmingUnstakeToken]: 'Failed to remove {amount} {symbol}',
      [Operation.DemeterFarmingGetRewards]: 'Failed to claim {symbol}',
      [Operation.EthBridgeIncoming]: 'Failed to transfer {amount} {symbol} from {Ethereum} to {Sora}',
      [Operation.EthBridgeOutgoing]: 'Failed to transfer {amount} {symbol} from {Sora} to {Ethereum}',
    },
  },
  metamask: '{Metamask}',
  providers: {
    metamask: '{Metamask}',
  },
  about: {
    title: 'The DEX for the Interoperable Future.',
    description:
      'Cross-chain exchange of assets, simple creation and listing of new assets, and the easiest swaps ever. The interoperable future of {Polkadot} is here and we are at the forefront!',
    trading: {
      title: 'Faster Trading',
      first:
        '{AppName} is a non-custodial, cross-chain AMM DEX protocol for swapping tokens based on {Polkadot} and {Kusama} relay chains, {Polkadot} and {Kusama} parachains, and blockchains directly connected via bridges.',
      second: '{AppName} removes trusted intermediaries and provides the opportunity for faster trading',
      third: '{AppName} is a community project and devs collaborate on the open source code using the',
    },
    liquidity: {
      title: 'Boundless Liquidity',
      first:
        '{AppName} combines multiple liquidity sources under a common liquidity aggregation algorithm, operating completely on-chain, in a trustless and decentralized way.',
      second:
        'When traders call the swap function, the liquidity aggregation algorithm will fill orders using the best offers across all liquidity sources. Liquidity sources can be other DEXs, order books, or other API-driven sources.',
      third:
        'Because {AppName} is an open-source project, anyone can add more liquidity sources by making contributions to the {AppName} codebase.',
    },
    swap: {
      title: 'Swap Any Token',
      first:
        'Go beyond the limits of current DEXs by adding tokens from the {Polkadot} ecosystem as well as other blockchains.',
      second: 'Create, list and trade your own tokens on the {Sora} network.',
      third:
        'Our core infrastructure uses Parity Substrate, which is more scalable than {Ethereum}, and does not use expensive mining for consensus.',
    },
    pswap: {
      title: 'PSWAP Tokens',
      first:
        'PSWAP was created by community governance by voting on its release. It is a utility and governance token used to reward liquidity providers on {AppName}. Unlike most other reward tokens, PSWAP is burned with transactions and decreases in supply over time.',
      second:
        'The {percent}% fee for every swap on the {AppName} DEX is used to buy back PSWAP tokens, which are then burned. At first, 90% of burned PSWAP tokens are reminted to allocate to liquidity providers, but with time this percentage will decrease to 35% after 4 years.',
    },
    links: {
      first: {
        title: 'Become a {Sora} Validator',
        desc: 'Secure the future of the {Sora} network and decentralized apps like {AppName}, and earn rewards along the way by becoming a {Sora} validator.',
      },
      second: {
        title: 'Connect a Chain to {Sora}',
        desc: 'Grow the decentralized world economy by connecting more chains to {Sora} and {AppName} using the {Hashi} bridge protocol.',
      },
    },
    network:
      '{AppName} is built on the {Sora} Network, focusing on interoperability to connect the rest of the crypto ecosystem to {Polkadot}.',
  },
  exchange: {
    [PageNames.Swap]: 'Swap',
    [PageNames.Pool]: 'Pool',
    balance: 'Balance',
    insufficientBalance: '@:insufficientBalanceText',
    price: 'Price',
    transactionSubmitted: 'Transaction submitted',
    transactionMessage: '{firstToken} and {secondToken}',
    confirm: 'Confirm',
    ok: 'OK',
    lossWarning:
      "You are going to lose {value}% on your trade. We've detected a liquidity provision issue. This may lead to significant losses during token swaps. Please ensure there is adequate liquidity for your desired swap pair.",
  },
  swap: {
    connectWallet: '@:connectWalletText',
    estimated: 'estimated',
    slippageTolerance: 'Slippage Tolerance',
    minReceived: 'Minimum Received',
    maxSold: 'Maximum Sold',
    minReceivedTooltip:
      'Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.',
    priceImpact: 'Price Impact',
    priceImpactTooltip: 'The difference between the market price and estimated price due to trade size.',
    liquidityProviderFee: 'Liquidity Provider Fee',
    liquidityProviderFeeTooltip:
      'A portion of each trade ({liquidityProviderFee}%) goes to liquidity providers as a protocol incentive.',
    networkFee: '@:networkFeeText',
    pairIsNotCreated: '@:pairIsNotCreated',
    firstPerSecond: '@:firstPerSecond',
    insufficientAmount: 'Insufficient {tokenSymbol} amount',
    insufficientLiquidity: 'Insufficient liquidity',
    confirmSwap: 'Confirm swap',
    swapOutputMessage:
      'Output is estimated. You will receive at least {transactionValue} or the transaction will revert.',
    rewardsForSwap: 'PSWAP Strategic Rewards',
    swapInputMessage: 'Input is estimated. You will sell maximum {transactionValue} or the transaction will revert.',
    route: 'Route',
    errorFetching: 'Error fetching the data',
  },
  pool: {
    connectWallet: '@:connectWalletText',
    connectToWallet: 'Connect an account to view your liquidity.',
    liquidityNotFound: 'No liquidity found.',
    addLiquidity: 'Add liquidity',
    removeLiquidity: 'Remove liquidity',
    createPair: 'Create a pair',
    pooledToken: '{tokenSymbol} Pooled',
    pairTokens: '{pair} Pool Tokens',
    poolShare: 'Your pool share',
    unknownAsset: '@:unknownAssetText',
    description:
      'When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.',
    strategicBonusApy: 'Strategic Bonus APY',
  },
  bridge: {
    title: '{Hashi} Bridge',
    info: 'Convert tokens between the {Sora} and {Ethereum} networks.',
    balance: 'Balance',
    connectWallet: '@:connectWalletText',
    connected: '@:connectedText',
    changeAccount: '@:changeAccountText',
    changeNetwork: '@:changeNetworkText',
    next: 'Next',
    connectWallets: 'Connect wallets to view respective transaction history.',
    soraNetworkFee: '{Sora} Network Fee',
    ethereumNetworkFee: '{Ethereum} Network Fee',
    tooltipValue: '@:comingSoonText',
    total: 'Total',
    viewHistory: 'View transactions history',
    transactionSubmitted: 'Transaction submitted',
    transactionMessage: '{assetA} for {assetB}',
    notRegisteredAsset: 'Asset {assetSymbol} is not registered',
    selectNetwork: 'Select network',
    networkInfo: 'Bridge {Sora} Network with:',
    copy: 'Copy network address',
    soraAddress: '{Sora} address',
    ethereumAddress: '{Ethereum} address',
  },
  selectRegisteredAsset: {
    title: 'Select a token',
    search: {
      title: 'Tokens',
      placeholder: 'Filter by Asset ID, Name or Ticker Symbol',
      networkLabelSora: '{Sora} network tokens',
      networkLabelEthereum: '{Ethereum} network mirror tokens',
      emptyListMessage: 'No results',
    },
    customAsset: {
      title: 'Custom',
      customInfo: 'Important! Custom tokens must be registered in {Sora}.',
      registerToken: 'Register token',
      addressPlaceholder: 'Asset ID',
      symbolPlaceholder: 'Token symbol',
      empty: 'No tokens found',
      alreadyAttached: 'Token was already attached',
    },
  },
  confirmBridgeTransactionDialog: {
    confirmTransaction: 'Confirm transaction',
    insufficientBalance: '@:insufficientBalanceText',
    changeNetwork: '@:changeNetworkText',
    confirm: '@:confirmTransactionText',
    buttonConfirm: '@:confirmText',
  },
  bridgeTransaction: {
    title: 'Bridge Transaction',
    details: '{from} for {to}',
    expectedMetaMaskAddress: 'Expected address in {Metamask}:',
    for: ' for ',
    steps: {
      step: '{step} of 2',
      step1: '1st',
      step2: '2nd',
    },
    status: {
      pending: '{step} transactions pending...',
      failed: '{step} transactions failed. @:(retryText).',
      confirm: 'Confirm 2nd of 2 transactions...',
      complete: 'Complete',
      convertionComplete: 'Conversion complete',
    },
    statuses: {
      waiting: 'Waiting',
      ready: 'Ready',
      pending: 'Pending',
      frozen: 'Frozen',
      failed: 'Transaction failed',
      done: 'Complete',
      waitingForConfirmation: 'Waiting for confirmation...',
    },
    blocksLeft: '{count} blocks left...',
    networkTitle: '{network} transaction',
    transactionHash: 'Transaction hash',
    networkInfo: {
      status: 'Status',
      date: 'Date',
      amount: 'Amount',
      transactionFee: 'Transaction Fee',
      total: 'Total',
    },
    successCopy: 'Transaction hash is copied to the clipboard',
    pending: '{network} transaction pending...',
    ethereum: '{Ethereum}',
    sora: '{Sora}',
    retry: '@:retryText',
    metamask: '{Metamask}',
    confirm: '@:confirmTransactionText',
    newTransaction: 'Create new transaction',
    changeNetwork: '@:changeNetworkText',
    connectWallet: '@:connectWalletText',
    changeAccount: '@:changeAccountText in {Metamask}',
    expectedAddress: 'Expected address in {Metamask}',
    allowToken: 'Allow {AppName} to use your {tokenSymbol}',
    approveToken:
      'Please note that it is only needed to approve the token once. If your extension has multiple token approval requests, make sure to only confirm the last one while rejecting the rest.',
    accountAddress: '{network} @:accountAddressText',
  },
  bridgeHistory: {
    title: 'History',
    showHistory: 'Show history',
    clearHistory: 'Clear history',
    empty: 'Your transactions will appear here.',
    filterPlaceholder: 'Filter by Asset ID or Ticker Symbol',
    restoreHistory: 'Restore history',
    statusAction: 'Action Needed',
  },
  selectToken: {
    title: 'Select a token',
    searchPlaceholder: 'Filter by Asset ID, Name or Ticker Symbol',
    emptyListMessage: 'No results',
    copy: 'Copy Asset ID',
    successCopy: '{symbol} Asset ID is copied to the clipboard',
    assets: {
      title: 'Assets',
    },
    custom: {
      title: 'Custom',
      search: 'Input Asset ID',
      text: 'CUSTOM TOKENS',
      alreadyAttached: 'This token was already attached',
      notFound: 'Token not found',
    },
  },
  createPair: {
    title: 'Create a pair',
    deposit: 'Deposit',
    balance: 'Balance',
    pricePool: 'Prices and fees',
    shareOfPool: 'Share of pool',
    firstPerSecond: '@:firstPerSecond',
    firstSecondPoolTokens: '{first}-{second} Pool',
    connect: 'Connect wallet',
    supply: 'Supply',
    yourPosition: 'Your position',
    yourPositionEstimated: 'Your position (estimated)',
    youWillReceive: 'You will receive',
    remove: 'remove',
    add: 'ADD',
    ok: 'OK',
    networkFee: 'Network fee',
    alreadyCreated: 'Token pair is already created',
    firstLiquidityProvider: 'You are the first liquidity provider',
    firstLiquidityProviderInfo:
      'The ratio of tokens you add will set the price of this pool.<br/>Once you are happy with the rate click supply to review.',
  },
  confirmSupply: {
    title: 'Your pool share will be',
    outputDescription:
      'Output is estimated. If the price changes more than {slippageTolerance}% your transaction will revert.',
    poolTokensBurned: '{first}-{second} Pool Tokens Burned',
    price: 'Price',
  },
  addLiquidity: {
    title: 'Add liquidity',
    pairIsNotCreated: '@:pairIsNotCreated',
    firstPerSecond: '@:firstPerSecond',
  },
  removeLiquidity: {
    title: 'Remove liquidity',
    liquidity: 'liquidity',
    balance: 'Balance',
    amount: 'Amount',
    input: 'Input',
    output: 'Output',
    price: 'Price',
    remove: 'Remove',
    description:
      'Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive.',
    outputMessage:
      'Output is estimated. If the price changes more than {slippageTolerance}% your transaction will revert.',
    confirmTitle: 'You will receive',
    shareOfPool: 'Share of pool after transaction',
    locked: '{percent} of your pool is in {lock}',
  },
  tokens: {
    symbol: 'Symbol',
    assetId: 'Asset ID',
  },
  explore: {
    showOnlyMyPositions: 'Show only my positions',
  },
  dexSettings: {
    title: 'Transaction settings',
    marketAlgorithm: '@.upper:marketAlgorithmText',
    marketAlgorithms: {
      SMART:
        '{smartAlgorithm} liquidity routing ensures the best price for any transaction by combining only the best price options from all available markets. When available, Token Bonding Curve ({tbcAlgorithm}) will be used for liquidity as long as the asset price is more affordable than from other sources, upon which the {xycAlgorithm} pool is utilized.',
      TBC: '{tbcAlgorithm} — buying only from the Token Bonding Curve (Primary Market). There is a possibility that the price can become unfavorable compared to the {xycAlgorithm} pool (Secondary Market), but the value received from the vested rewards might turn out to be much more favorable over time.',
      XYK: '{xycAlgorithm} — buying only from the XYK Pool (Secondary Market). Traditional XYK pool swap.',
    },
    marketAlgorithmTooltip: {
      main: ' - option to choose between Primary Market (TBC), Secondary Market (XYK) or a combined smart algorithm for guaranteed best price for any given transaction.',
    },
    slippageTolerance: 'SLIPPAGE TOLERANCE',
    slippageToleranceHint:
      'Your transaction will revert if the price changes unfavorably by more than this percentage.',
    slippageToleranceValidation: {
      warning: 'Your transaction may fail',
      frontrun: 'Your transaction may be frontrun',
      error: 'Enter a valid slippage percentage',
    },
    custom: 'CUSTOM',
    transactionDeadline: 'TRANSACTION DEADLINE',
    transactionDeadlineHint: 'Transaction will be cancelled if it is pending for more than this long.',
    nodeAddress: 'NODE ADDRESS',
    ip: 'IP',
    port: 'PORT',
    min: 'MIN',
  },
  resultDialog: {
    title: 'Transaction submitted',
    ok: 'OK',
  },
  rewards: {
    [RewardsTabsItems.Rewards]: 'Rewards',
    [RewardsTabsItems.ReferralProgram]: '@:referralProgram.title',
    changeAccount: '@:changeAccountText',
    connected: '@:connectedText',
    networkFee: '@:networkFeeText',
    andText: 'and',
    forText: 'for',
    totalVested: 'Total rewards',
    claimableAmountDoneVesting: 'Claimable rewards',
    claiming: {
      pending: 'Claiming...',
      success: 'Claimed successfully',
    },
    transactions: {
      confimation: 'Confirm {order} of {total} transactions...',
      success: 'You will receive your rewards shortly',
      failed: '{order} of {total} transactions failed. @:retryText',
    },
    signing: {
      extension: '{PolkadotJs} browser extension',
      accounts: 'your {Sora} and {Ethereum} accounts respectively',
    },
    hint: {
      connectExternalAccount: 'Connect an {Ethereum} account to check for available PSWAP and VAL rewards.',
      connectAccounts:
        'To claim your PSWAP and VAL rewards you need to connect both your {Sora} and {Ethereum} accounts.',
      connectAnotherAccount: 'Connect another {Ethereum} account to check for available PSWAP and VAL rewards.',
      howToClaimRewards:
        'To claim your {symbols} rewards you need to sign {count} {transactions} in {destination}. Rewards will be deposited to your {Sora} account.',
    },
    action: {
      connectWallet: '@:connectWalletText',
      connectExternalWallet: 'Connect {Ethereum} account',
      signAndClaim: 'Sign and claim',
      pendingInternal: '{Sora} transaction pending...',
      pendingExternal: '{Ethereum} transaction pending...',
      retry: '@:retryText',
      checkRewards: 'Check',
      insufficientBalance: '@:insufficientBalanceText',
    },
    notification: {
      empty: 'No available claims for this account',
    },
    events: {
      [RewardingEvents.XorErc20]: 'XOR ERC-20',
      [RewardingEvents.SoraFarmHarvest]: '{Sora}.farm harvest',
      [RewardingEvents.NftAirdrop]: 'NFT Airdrop',
      [RewardingEvents.LiquidityProvision]: 'Fees gained from liquidity provision',
      [RewardingEvents.BuyOnBondingCurve]: 'buying from the TBC',
      [RewardingEvents.MarketMakerVolume]: 'Market Making',
      [RewardingEvents.LiquidityProvisionFarming]: 'Farming',
    },
    groups: {
      strategic: 'Strategic Rewards',
      external: 'Rewards for the connected {Ethereum} account',
      crowdloan: 'Crowdloan rewards',
    },
  },
  moonpay: {
    notifications: {
      [MoonpayNotifications.Success]: {
        title: 'Tokens purchased',
        text: 'Token purchase is finished. The {Hashi} bridge transaction will start automatically as soon as the tokens have been received in the connected {Ethereum} account. It is safe to close this window and continue using {AppName}. There will be a notification about the bridge transaction when ready.',
      },
      [MoonpayNotifications.SupportError]: {
        title: 'Token not supported',
        text: 'Unfortunately the token purchased via @:moonpayText is not yet supported by the {Hashi} bridge in {AppName}. Normally only the supported tokens should be available for purchase via @:moonpayText in {AppName}, hence something must have gone wrong somewhere. Please don’t hesitate to let the community know about this case in the <a class="link" href="https://t.me/polkaswap" target="_blank" rel="nofollow noopener" title="{AppName}">{AppName} Telegram group</a>',
      },
      [MoonpayNotifications.FeeError]: {
        title: 'Not enough ETH for the bridge tx',
        text: 'Unfortunately the {Hashi} bridge transaction has failed due to there not being enough ETH to pay for the {Ethereum} network transation fees. Please add more ETH and try again.',
      },
      [MoonpayNotifications.TransactionError]: {
        title: 'Transaction has failed',
        text: 'Unfortunately it appears that the @:moonpayText transaction has failed. Please try again. For @:moonpayText support go to <a class="link" href="https://support.moonpay.com" target="_blank" rel="nofollow noopener" title="@:moonpayText">https://support.moonpay.com</a>',
      },
      [MoonpayNotifications.AmountError]: {
        title: 'Insufficient balance',
        text: 'Unfortunately the {Hashi} bridge transaction has failed due to there not being enough tokens for transaction. Please check your {Ethereum} account balance and try again.',
      },
      [MoonpayNotifications.AccountAddressError]: {
        title: 'Wrong {Ethereum} account',
        text: 'Unfortunately, the {Hashi} bridge transaction failed due to the recipient address of the tokens in the @:moonpayText order does not match your current {Ethereum} account address. Please switch {Ethereum} account in extension and try again.',
      },
    },
    buttons: {
      buy: 'Buy Tokens',
      history: 'Purchase History',
      transfer: 'Start bridge',
      view: 'View bridge transaction',
    },
    tooltips: {
      transfer: 'Tokens successfully purchased!\nClick to start the bridge transaction',
    },
    history: {
      title: 'Purchase history',
      empty: 'No data',
    },
    confirmations: {
      txReady: 'Transaction Ready For Bridge',
    },
  },
  marketMakerCountdown: {
    title: 'Market Maker Countdown',
    blocks: 'blocks',
    daysLeft: 'days left',
    txs: 'TXs',
    volume: 'MM TX volume',
    description:
      '20 million PSWAP / month will be distributed to market makers with at least 500 tx / month valued over 1 XOR.',
  },
  confirmNextTxFailure: {
    header: 'Attention',
    info: 'Your {symbol} balance will be less than {fee} {symbol} after this transaction. You won’t be able to pay for the network fee for another transaction.',
    payoff:
      'You would have to use the Bridge to get XOR from other networks, get sent XOR from another {Sora} account, or swap any other token already in your account into XOR.',
    button: 'Yes, I understand the risk',
  },
  provider: {
    default: '{Ethereum} provider',
    metamask: '{Metamask}',
    messages: {
      checkExtension: '{name} extension is busy, please check it',
      extensionLogin: 'Please login to your {name} extension',
      installExtension:
        '{name} extension is not found. Please install it!\n\nAlready installed extension? Please reload the page',
      reloadPage: 'Reload page',
    },
  },
  referralProgram: {
    title: 'Referral Program',
    connectAccount: 'To invite users you need to connect your {Sora} account.',
    bondedXOR: 'XOR Bonded',
    referralsNumber: '{number} referrals',
    startInviting: 'To start inviting, bond any amount of XOR.',
    insufficientBondedAmount: 'To invite more referrals, bond at least {inviteUserFee} XOR',
    deposit: 'Deposit',
    balance: 'Balance',
    networkFee: '@:networkFeeText',
    insufficientBalance: '@:insufficientBalanceText',
    insufficientBondedBalance: 'Insufficient bonded balance',
    action: {
      connectWallet: '@:connectWalletText',
      empty: 'Enter amount of {tokenSymbol}',
      startInviting: 'Bond {tokenSymbol} to start inviting',
      bondMore: 'Bond More',
      bond: 'Bond',
      unbond: 'Unbond',
      copyLink: 'Copy link',
    },
    transactionDetails: 'Transaction Details',
    receivedRewards: 'Received rewards',
    invitationLink: 'Invitation link',
    successCopy: 'Referral link is copied to the clipboard',
    bondTitle: 'Bond XOR',
    unbondTitle: 'Unbond XOR',
    confirm: {
      text: '@:confirmText',
      bond: 'Confirm bond',
      unbond: 'Confirm unbond',
      inviteTitle: 'You have been invited to {AppName}',
      inviteDescription:
        'For every transaction, 10% of the fee will go to your referrer, without any extra cost to you.',
      signInvitation: 'Approve',
      freeOfCharge: 'This action is free of charge',
      hasReferrerTitle: 'You’ve already set your referrer',
      hasReferrerDescription: 'Unfortunately, you can only set one',
      ok: 'OK',
    },
  },
  mobilePopup: {
    header: 'Download {Sora} Wallet with {polkaswapHighlight} features',
    sideMenu: 'Get {Sora} Wallet',
    info: 'Swap tokens from different networks - {Sora}, {Ethereum}, {Polkadot}, {Kusama}. Provide liquidity pool and earn % from exchange fees.',
  },
  demeterFarming: {
    staking: {
      active: 'Staking active',
      inactive: 'Stake to earn additional rewards',
      stopped: 'Staking stopped',
    },
    info: {
      earned: '{symbol} earned',
      fee: 'Fee',
      feeTooltip: 'Deposit fee is applied to your amount to stake',
      owned: '{symbol} @:balanceText',
      poolShare: 'Your pool share staked',
      poolShareWillBe: 'Your pool share staked will be',
      rewardToken: 'Reward token',
      stake: '{symbol} staked',
      stakeWillBe: 'Your {symbol} stake will be',
      totalLiquidityLocked: 'Total liquidity locked',
    },
    actions: {
      add: 'Stake more',
      claim: 'Claim rewards',
      remove: 'Remove stake',
      start: 'Start staking',
    },
    amountAdd: 'Amount to stake',
    amountRemove: 'Amount to remove',
    poweredBy: 'Powered by Demeter Farming',
    calculator: 'Calculator',
    results: 'Results',
    rewards: '{symbol} rewards',
  },
  staking: {
    title: 'Staking',
  },
  code: {
    download: 'Download QR Code',
    upload: 'Scan QR',
    receive: 'Receive',
    invalid: 'Invalid QR Code',
    import: 'Import an image',
    scan: 'Scan with camera',
    allowanceError: 'Check your camera availability and browser permissions to use it',
  },
  browserNotificationDialog: {
    title: 'Enable browser notifications',
    info: 'We will send you only relevant updates about your wallet, for example: asset balance changes',
    enable: 'Enable notifications',
    agree: 'Yes, I understand',
    notificationBlocked:
      "To receive the notifications about {AppName}, please, allow the notifications in your browser's native settings",
    pointer: 'Press “Allow” to turn notifications on',
  },
  assetDeposit: 'Asset balance has been deposited',
  ofText: '{first} of {second}',
  accountAddressText: 'Account address',
  tooltips: {
    roi: '{ROI} stands for Return on Investment. It is calculated by dividing the profit earned on an investment by the cost of that investment in a percentage equivalent.',
    tvl: '{TVL} stands for Total Value Locked. It represents tokens locked in the pools in the dollar equivalent.',
    volume:
      'Volume refers to the total amount of assets that have been traded or exchanged on the network over a specific period of time. The volume is an important metric for measuring the liquidity and overall activity of the network.',
    fees: 'Fees on the {Sora} blockchain refer to the charges that are incurred for executing transactions on the network. These fees are paid in XOR, the native cryptocurrency of the {Sora} Network. The fee amount is determined by the complexity and size of the transaction being executed',
    supply:
      'Token supply refers to the total number of tokens that have been created and are in circulation on the network. The token supply can fluctuate based on the amount of tokens being staked, burned, or transferred on the network.',
    transactions:
      'Transactions refer to the process of sending or receiving digital assets on the network, including liquidity operations, as well as swaps.',
    accounts:
      "Accounts are digital addresses that hold user's assets on the network. Each account is associated with a unique public address and a private key that allows the user to access and manage their assets.",
    bridgeTransactions:
      '{from} to {to} bridge refers to the process of transferring assets between the {from} and {to} networks using a bridge. The bridge allows for the interoperability of the two networks, enabling users to seamlessly move assets between them.',
    velocity:
      'Token velocity is the number of times token changes accounts during period (month) on average. It indicates the level of trading activity and liquidity.',
  },
  networkStatisticsText: 'Network statistics',
  browserPermission: {
    title: 'Allow camera access in browser settings',
    desc: "To ensure the authenticity of documents and validate user identity for KYC verification, access to your device's camera is required.",
    disclaimer: 'Camera access is required for real-time document capture to prevent fraud.',
    btnGoToSettings: 'Go to settings',
    btnAllow: 'Allow access',
  },
};
