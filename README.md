# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```
## Users created in seed to use test

```Admin

email: test1@test.com
password: User2021.L1

email: test3@test.com
password: User2021.L3

```Standard

email: test12@test.com
password: User12.L2021

email: test14@test.com
password: User14.L2021