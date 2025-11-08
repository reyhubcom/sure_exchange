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
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
  ],
  actions: [{ text: 'Get Wallet', href: 'https://braavos.app/', target: '_blank' }],
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
