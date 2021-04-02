# Create React App with Cypress & Percy Example

This is example project for Cypress & Percy

# Setup

## First Step

Please make sure your PC have installed Node.js & yarn.

```
% node -v
v14.xx

% yarn -v
1.22.10
```

Also you need install dependencies.

```
yarn install
```

## Install Cypress

Also plase install Cypress client:
https://www.cypress.io/

## Craete Percy project

Create Percy project & get your token:
https://percy.io/login

After get your token, set your local env:
```
export PERCY_TOKEN=***********
```

## Run Cypress

You can check Cypress is running with the following command:

```
yarn cy:run-ci
```

You can check test result.

```

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  app.spec.js                              403ms        2        2        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        403ms        2        2        -        -        -  

✨  Done in 24.80s.
```

Also you can check your Percy result on your Percy project.
