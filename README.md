# CodeSense demo shop

A tiny shop checkout in plain JavaScript, used to show [CodeSense](https://pr-reviewer-omega-liard.vercel.app) reviewing real pull requests.

CodeSense is a GitHub App. Before it reviews a pull request, it searches the rest of this repository for code the change could affect, so it can say things like "this function is still called with the old arguments in another file".

## The pull requests

Each open or closed pull request here was reviewed by the bot. Open one and look for the comments from **codesense-pr**.

## Run it

```
npm test
```

No dependencies are needed (Node 20 or newer).

## Files

- `src/pricing.js` discounts and tax
- `src/checkout.js` charges a cart
- `src/orders.js` stores orders and writes invoices
- `src/cart.js`, `src/customers.js`, `src/promos.js`, `src/payments.js`, `src/invoice.js`, `src/money.js`, `src/config.js`

See the reviews in one place: [the CodeSense showcase](https://pr-reviewer-omega-liard.vercel.app/showcase).
