import type { HomepageMenuItems, NavMenuConstant, References } from '../Navigation.types'

export const HOMEPAGE_MENU_ITEMS: HomepageMenuItems = [
  [
    {
      label: 'Home',
      icon: 'home',
      href: '/',
      level: 'home',
    },
    {
      label: 'Quickstart',
      icon: 'getting-started',
      href: '/guides/getting-started',
      level: 'gettingstarted',
    },
  ],
  [    
    {
    label: 'Network',
    },
    {
      label: 'Public API Server',
      icon: 'terminal',
      href: '/guides/public-api',
      level: 'guide',
    },
    {
      label: 'Postman APIs',
      icon: 'block',
      href: '/guides/postman-api',
      level: 'guide',
    },
    {
      label: 'APIs',
      icon: 'radio',
      href: '/guides/node-apis',
      level: 'nodeapis',
    },
    {
      label: 'Nodes',
      icon: 'nodes',
      href: '/guides/nodes',
      level: 'nodes',
    },
    {
      label: 'DijetsJS',
      icon: 'dijetsjs',
      href: '/guides/dijetsjs',
      level: 'guide',
    },
  ],
  [
    {
      label: 'DApps',
    },
    {
      label: 'Launch DApps on Dijets',
      icon: 'integrations',
      href: '/guides/launch-dapps-on-uc',
      level: 'guide',
    },
    {
      label: 'Developer Toolchains',
      icon: 'tool',
      href: '/guides/developer-toolchains',
      level: 'guides',
    },
    {
      label: 'Non Fungible Tokens (NFTs)',
      icon: 'self-hosting',
      href: '/guides/nfts',
      level: 'guide',
    },
    {
      label: 'NFTs Metadata',
      icon: 'integrations',
      href: '/guides/nft-metadata',
      level: 'guide',
    },
  ],
  [
    {
      label: 'Smart Contracts',
    },
    {
      label: 'Overview',
      icon: 'reference-javascript',
      href: '/guides/smart-contracts',
      level: 'guide',
    },
    {
      label: 'Creating an ERC-20 Token',
      icon: 'reference-dart',
      href: '/guides/erc20-contract',
      level: 'guide',
    },
    {
      label: 'Add Dijets to your DApp',
      icon: 'dapps',
      href: '/guides/add-dijets-programmatically',
      level: 'guide',
    },
  ],
  [
    {
      label: 'Specs & Formats',
    },
    {
      label: 'Transaction Format',
      icon: 'platform',
      href: '/guides/transaction-format',
      level: 'guide',
    },
    {
      label: 'Cryptographic Primitives',
      icon: 'resources',
      href: '/guides/cryptographic-primitives',
      level: 'guide',
    },
    {
      label: 'Serialisation Primitives',
      icon: 'serialisation',
      href: '/guides/serialisation-primitives',
      level: 'guide',
    },
    {
      label: 'Atomic Transactions',
      icon: 'integrations',
      href: '/guides/atomic-transaction-format',
      level: 'guide',
    },
  ],
  [
    {
      label: 'Enterprise Consortia Chains',
    },
    {
      label: 'ECC Overview',
      icon: 'platform',
      href: '/guides/ecc-overview',
      level: 'reference_javascript',
    },
    {
      label: 'ECC Lifecycle',
      icon: 'resources',
      href: '/guides/ecc-lifecycle',
      level: 'reference_javascript',
    },
    {
      label: 'Build an ECC',
      icon: 'self-hosting',
      href: '/guides/build-ecc',
      level: 'reference_javascript',
    },
    {
      label: 'Deploy an ECC',
      icon: 'integrations',
      href: '/guides/deploy-ecc',
      level: 'reference_javascript',
    },
  ],
  [
    {
      label: 'Network Status',
      icon: 'status',
      href: 'https://dijets.statuspage.io',
    },
  ],
]

export const gettingstarted: NavMenuConstant = {
  icon: 'getting-started',
  title: 'Getting Started',
  items: [
    { name: 'Introduction', url: '/guides/getting-started/introduction', items: [] },
    { name: 'Dijets Platform', url: '/guides/getting-started/platform', items: [] },
    { name: 'Domains & Indices', url: '/guides/getting-started/domain-indices', items: [] },
    {
      name: 'Tutorial Quickstarts',
      items: [
        { name: 'Run a Dijets Node', url: '/guides/getting-started/tutorials/run-dijets-node', items: [] },
        { name: 'Create Local Network', url: '/guides/getting-started/tutorials/create-local-network', items: [] },
        { name: 'Funding Test Accounts', url: '/guides/getting-started/tutorials/funding-test-accounts', items: [] },
        { name: 'Intra-chain Transfer', url: '/guides/getting-started/tutorials/intrachain-transfer', items: [] },
        { name: 'Reference Workflow', url: '/guides/getting-started/tutorials/reference-workflow', items: [] },
        { name: 'Multisig UTXOs', url: '/guides/getting-started/tutorials/multisig-utxos', items: [] },
        { name: 'Transaction Fees', url: '/guides/getting-started/tutorials/transaction-fees', items: [] },
        { name: 'Dynamic Gas Fees', url: '/guides/getting-started/tutorials/dynamic-gas-fee', items: [] },
        { name: 'DijetsJS & Dynamic Fees', url: '/guides/getting-started/tutorials/dynamic-fee-js', items: [] },
        { name: 'Utility Chain Integration', url: '/guides/getting-started/tutorials/exchange-integration', items: [] },
        { name: 'Tools & Utilities', url: '/guides/getting-started/tutorials/tools-utilities', items: [] },
        { name: 'Blockchain Components', url: '/guides/getting-started/tutorials/blockchain-components', items: [] },
      ],
    },
  ],
}

export const nodeapis: NavMenuConstant = {
  icon: 'node-apis',
  title: 'Dijets Node APIs',
  items: [
    { name: 'Issuing API Calls', url: '/guides/node-apis/issuing-api-calls', items: [] },
    { name: 'Method Chain API', url: '/guides/node-apis/method-chain-api', items: [] },
    { name: 'Value Chain API', url: '/guides/node-apis/value-chain-api', items: [] },
    { name: 'Utility Chain API', url: '/guides/node-apis/utility-chain-api', items: [] },
    { name: 'Admin API', url: '/guides/node-apis/admin-api', items: [] },
    { name: 'Authentication API', url: '/guides/node-apis/auth-api', items: [] },
    { name: 'Healthcheck API', url: '/guides/node-apis/health-api', items: [] },
    { name: 'Index API', url: '/guides/node-apis/index-api', items: [] },
    { name: 'Keystore API', url: '/guides/node-apis/keystore-api', items: [] },
    { name: 'Info API', url: '/guides/node-apis/info-api', items: [] },
    { name: 'IPC API', url: '/guides/node-apis/ipc-api', items: [] },
    { name: 'Metrics API', url: '/guides/node-apis/metrics-api', items: [] },
  ],
}

export const nodes: NavMenuConstant = {
  title: 'Nodes',
  icon: 'nodes',
  items: [
    { name: 'Build Dijets Node', url: '/guides/nodes/build-dijets-node',
    items: [
      { name: 'Run Dijets Node with an script', url: '/guides/nodes/run-dijets-node-with-installer-script', items: [] },
      { name: 'Run Dijets Node manually', url: '/guides/nodes/run-dijets-node-manually', items: [] },
      { name: 'Run Dijets Node with AWS', url: '/guides/nodes/run-dijets-node-with-aws', items: [] },
      { name: 'Run Dijets Node with Azure', url: '/guides/nodes/run-dijets-node-with-azure', items: [] },
      { name: 'Run Dijets Node with Google Cloud', url: '/guides/nodes/run-dijets-node-with-google-cloud', items: [] },
    ],
  },
  { name: 'Maintain Dijets Node', url: '/guides/nodes/build-dijets-node',
  items: [
    { name: 'Node Backup and Restore', url: '/guides/nodes/node-backup-restore', items: [] },
    { name: 'Upgrade Dijets Node', url: '/guides/nodes/upgrade-dijets-node', items: [] },
    { name: 'Node Configs and Flags', url: '/guides/nodes/node-flags-configs', items: [] },
    { name: 'Utility Chain & Offline Pruning', url: '/guides/nodes/offline-pruning-utility-chain', items: [] },
  ],
},
{ name: 'Validator Nodes', url: '/guides/nodes/build-dijets-node',
items: [
  { name: 'Staking & Delegations', url: '/guides/nodes/staking', items: [] },
  { name: 'Adding a Validator', url: '/guides/nodes/validator-nodes', items: [] },
],
},
  ],
}

export const dijetsjs: NavMenuConstant = {
  title: 'DijetsJS',
  icon: 'dijetsjs',
  items: [
    { name: 'Introduction', url: '/guides/dijetsjs', items: [] },
    { name: 'DijetsJS Overview', url: '/guides/dijetsjs/overview', items: [] },
    { name: 'API Modules', url: '/guides/dijetsjs/api', items: [] },
    { name: 'Asset Creation on Value Chain', url: '/guides/dijetsjs/asset-creation', items: [] },
    { name: 'Value Chain Keys Management', url: '/guides/dijetsjs/keys-management', items: [] },
    { name: 'Transaction ID with DijetsJS', url: '/guides/dijetsjs/tx-id', items: [] },
  ],
}

export const developer_toolchains: NavMenuConstant = {
  title: 'Developer Tools',
  icon: 'platform',
  items: [
    { name: 'Use Foundry with Dijets', url: '/guides/developer-toolchains/foundry-dijets-uc', items: [] },
    { name: 'Use Hardhat with Dijets', url: '/guides/developer-toolchains/hardhat-dijets-uc', items: [] },
    { name: 'Use Truffle with Dijets', url: '/guides/developer-toolchains/truffle-dijets-uc', items: [] },
    { name: 'Smart Contract Verification', url: '/guides/developer-toolchains/verify-smart-contracts-on-explorer', items: [] },
    { name: 'Sourcify', url: '/guides/developer-toolchains/verify-smart-contracts-with-sourcify', items: [] },
  ],
}

export const atomic_tx = {
  title: 'Atomic Transactions',
  icon: 'resources',
  url: '/guides/self-hosting',
  items: [
  ],
}


export const cli = {
  title: 'CLI',
  items: [
    { name: 'Overview', url: '/guides/cli' },
    { name: 'Managing Environments', url: '/guides/cli/managing-environments' },
    {
      name: 'Using environment variables in config.toml',
      url: '/guides/cli/using-environment-variables-in-config',
    },
  ],
}

export const SocialLoginItems = [
]

export const references = [
]

export const PhoneLoginsItems = [
]

export const auth = {
  icon: 'auth',
  title: 'Auth',
  items: [
  ]
}
