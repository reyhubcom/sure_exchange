import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Exchange',
      links: [
        {
          text: 'Exchange Bitcoin [ BTC ]',
          href: getPermalink('/btc'),
        },
        {
          text: 'Exchange Ethereum [ ETH ]',
          href: getPermalink('#'),
        },
        {
          text: 'Exchange Solana [ SOL ]',
          href: getPermalink('#'),
        },
        {
          text: 'All Currencies',
          href: getPermalink('/allcurrencies'),
        },
      ],
    },
    {
      text: 'Buy',
      links: [
        {
          text: 'Buy Bitcoin [ BTC ]',
          href: getPermalink('#'),
        },
        {
          text: 'Buy Ethereum [ ETH ]',
          href: getPermalink('#'),
        },
        {
          text: 'Buy Solana [ SOL ]',
          href: getPermalink('#'),
        },
        {
          text: 'Buy Binance [ BNB ]',
          href: getPermalink('#'),
        },
        {
          text: 'Bay Starknet [ STRK ]',
          href: getPermalink('#'),
        },
        {
          text: 'Buy Cosmos [ ATOM ]',
          href: getPermalink('#'),
        },
        {
          text: 'Buy Polkadot [ DOT ]',
          href: getPermalink('#'),
        },
      ],
    },
    {
      text: 'Products',
      links: [
        {
          text: 'Sure Token',
          href: getPermalink('#'),
        },
        {
          text: 'Sure Wallet',
          href: getPermalink('#'),
        },
        {
          text: 'MEME Coin',
          href: getPermalink('#'),
        },
        {
          text: 'DeFi Coin',
          href: getPermalink('#'),
        },
        {
          text: 'Staking',
          href: getPermalink('#'),
        },
        {
          text: 'Mobile Exchange',
          href: getPermalink('#'),
        },
      ],
    },
    {
      text: 'Support',
      links: [
        {
          text: 'How it Works',
          href: getPermalink('#'),
        },
        {
          text: 'Contact Support',
          href: getPermalink('#'),
        },
        {
          text: 'Help Center',
          href: getPermalink('#'),
        },
        {
          text: 'Status Page',
          href: getPermalink('#'),
        },
        {
          text: 'FAQ',
          href: getPermalink('#'),
        },
      ],
    },
   
  ],
  actions: [{ text: 'STAKING', href: 'https://braavos.app/', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Buy Crypto',
      links: [
        { text: 'Buy Bitcoin [ BTC ]', href: '#' },
        { text: 'Buy Ethereum [ ETH ]', href: '#' },
        { text: 'Buy Solana [ SOL ]', href: '#' },
        { text: 'Buy Binance [ BNB ]', href: '#' },
        { text: 'Buy Polkadot [ DOT ]', href: '#' },
        { text: 'Buy Cosmos [ ATOM ]', href: '#' },
        { text: 'Buy TonCoin [ TON ]', href: '#' },
      ],
    },
    {
      title: 'Exchange',
      links: [
        { text: 'Exchange Bitcoin [ BTC ]', href: '#' },
        { text: 'Exchange Ethereum [ ETH ]', href: '#' },
        { text: 'Exchange Solana [ SOL ]', href: '#' },
        { text: 'Exchange Starknet [ STRK ]', href: '#' },
        { text: 'Exchange Cosmos [ ATOM ]', href: '#' },
      ],
    },
    {
      title: 'Exchange Pairs',
      links: [
        { text: 'BTC to ETH', href: '#' },
        { text: 'BNB to ATOM', href: '#' },
        { text: 'SOL to BTC', href: '#' },
        { text: 'ATOM to BASE', href: '#' },
        { text: 'USDC to USDT', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'FAQ', href: '#' },
        { text: 'How it Works', href: '#' },
        { text: 'Contac Us', href: '#' },
        { text: 'Glossary', href: '#' },
        { text: 'Help Center', href: '#' },
        { text: 'Status Page', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('#') },
    { text: 'Privacy Policy', href: getPermalink('#') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss',href:'#'},
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://reyhub.com"> Rey</a> ·2025 Sure.Exchange All Rights Reserved.
  `,
};
