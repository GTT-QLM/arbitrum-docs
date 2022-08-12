/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  introSidebar: [
    {
      type: "doc",
      id: "intro/intro",
      label: "A Gentle Introduction"
    },
    {
      type: "doc",
      id: "intro/glossary",
      label: "Glossary"
    },
    {
      type: "doc",
      id: "mainnet-beta",
      label: "Mainnet Beta Status"
    }
  ],
  devsSideBar: [
    {
      type: "category",
      label: "Running Nodes",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "node-running/running-a-node",
          label: "Run an Arbitrum Node"
        },
        {
          type: "doc",
          id: "node-running/node-providers",
          label: "Node Providers"
        },
        {
          type: "doc",
          id: "das/daserver-instructions",
          label: "Data Availability Server"
        }
      ]
    },
    {
      type: "category",
      label: "BUIDLing on Arbitrum",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Classic-to-Nitro Migration",
          id: "migration/dapp_migration"
        },
        {
          type: "doc",
          label: "Precompiles",
          id: "arbos/precompiles"
        },
        {
          type: "link",
          label: "SDK",
          href: "/sdk"
        }
      ]
    },
    {
      type: "link",
      label: "Learn more",
      href: "https://example.com"
    }
  ],

  howItWorksSidebar: [
    {
      type: "doc",
      id: "arbos/arbos",
      label: "ArbOS"
    },
    {
      type: "category",
      label: "Fault Proofs",
      items: [
        {
          type: "doc",
          id: "proving/challenge-manager",
          label: "Interactive Challenges"
        },
        {
          type: "doc",
          id: "proving/wasm-to-wavm",
          label: "Wasm To WAVM"
        },
        {
          type: "doc",
          id: "proving/wavm-custom-opcodes",
          label: "Custom WAVM Opcodes"
        },
        {
          type: "doc",
          id: "proving/wavm-floats",
          label: "WAVM Floats"
        },
        {
          type: "doc",
          id: "proving/wavm-modules",
          label: "WAVM Modules"
        }
      ]
    },

    {
      type: "doc",
      id: "arbos/geth",
      label: "Geth"
    },
    {
      type: "doc",
      id: "arbos/gas",
      label: "L2 Gas"
    },
    {
      type: "doc",
      id: "arbos/l1-pricing",
      label: "L1 Pricing"
    },
    {
      type: "doc",
      id: "why-nitro",
      label: "Why Nitro?"
    },
    {
      type: "doc",
      id: "inside-anytrust",
      label: "Inside AnyTrust"
    }
  ]
};

module.exports = sidebars;
