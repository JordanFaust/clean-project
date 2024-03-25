This repo shows a minimal replication of [this bug](https://github.com/cloudflare/workers-sdk/issues/5367).

To replicate:

1. Check out the **second-to-last** commit on this branch.
1. Run `npm run test` to see the test suite pass correctly.
1. Now check out the **last** commit on this branch.
1. Run `npm run test` to see the error.
