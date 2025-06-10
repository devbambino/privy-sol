<<<<<<< HEAD
# Privy Auth + Solana `create-next-solana-app` Starter

This is a template for integrating Privy's Solana capabilities into a Next.js application. It provides a simple setup for wallet login, embedded wallets, and transaction signing using the [Privy React SDK](https://docs.privy.io/basics/react/installation).

This demo uses NextJS's [App Router](https://nextjs.org/docs/app).

## Setup

1. Clone this repository and open it in your terminal.

```bash
git clone https://github.com/privy-io/create-next-solana-app.git && cd create-next-solana-app
```

2. Install the dependencies.

```bash
npm install
```

3. Define the environment variables in a `.env.local` file.

```bash
cp .env.local.example .env.local
```

## Building locally

In your project directory, run npm run dev. You can now visit [http://localhost:3000](http://localhost:3000) to see your app and login with Privy!

## Check out

- `components/providers.tsx` for how to use the `PrivyProvider` and initialize it with your Privy App ID.
- `app/page.tsx` for how to verify if a user is logged in from a server component.
- `components/loginButton.tsx` for how to use the `useLogin` Privy hook to log in a user and create an embedded wallet.
- `app/dashboard/page.tsx` for how to use the `usePrivy` hook to access the Privy SDK in a client component, and how to use the embedded and EOA wallets to sign a message and send a transaction.
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> db8e403 (Initial commit from Create Next App)
