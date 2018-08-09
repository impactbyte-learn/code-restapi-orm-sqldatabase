# Code REST API ORM SQL Database

Code example to build a REST API with ORM and SQL Database.

Technologies:

- [Express](https://expressjs.com) REST API server
- [Sequelize](http://docs.sequelizejs.com) ORM
- [MariaDB](https://mariadb.org)/[MySQL](https://mysql.com) database

## Table of Contents

<!-- TOC -->

- [Code REST API ORM SQL Database](#code-rest-api-orm-sql-database)
  - [Table of Contents](#table-of-contents)
  - [Preparation](#preparation)
    - [Database Installation](#database-installation)
  - [Installation and Configuration](#installation-and-configuration)
  - [Running](#running)
    - [Development](#development)
    - [Production](#production)
  - [Extra Information](#extra-information)
    - [REST API Endpoints](#rest-api-endpoints)
    - [Data Schema](#data-schema)
    - [How to Setup Sequelize](#how-to-setup-sequelize)
    - [How to Integrate with Express](#how-to-integrate-with-express)
    - [Database Dump](#database-dump)
    - [How to Deploy with Heroku](#how-to-deploy-with-heroku)

<!-- /TOC -->

---

## Preparation

### Database Installation

We recommend using `mariadb` instead of `mysql`.
Although the `node` adapter can be using `mysql2` adapter.

**macOS:**

```sh
brew install mariadb
brew services start mariadb
```

**Ubuntu:**

- [Install MariaDB 10.3 on Ubuntu 18.04 and CentOS 7 - Computingforgeeks](https://computingforgeeks.com/install-mariadb-10-on-ubuntu-18-04-and-centos-7)
- [How To Install MySQL on Ubuntu 18.04 | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04)

## Installation and Configuration

Install dependencies.

```sh
yarn
```

This will also run the `setup` script automatically.

```sh
yarn setup
# this will copy .env.schema to .env if not exist yet
```

Then edit [`.env`](./.env) contents in your editor. Refer to [`.env.defaults`](./.env.defaults) for the default values.

```conf
DEVELOPMENT_DB_USERNAME=yourusername
DEVELOPMENT_DB_PASSWORD=yourpassword
DEVELOPMENT_DB_NAME=yourdatabasename
DEVELOPMENT_DB_HOST=localhost
DEVELOPMENT_DB_PORT=3306
DEVELOPMENT_DB_DIALECT=mysql

TEST_DB_USERNAME=yourusername
TEST_DB_PASSWORD=yourpassword
TEST_DB_NAME=yourdatabasename-test
TEST_DB_HOST=localhost
TEST_DB_PORT=3306
TEST_DB_DIALECT=mysql

PRODUCTION_DB_USERNAME=yourusername
PRODUCTION_DB_PASSWORD=yourpassword
PRODUCTION_DB_NAME=yourdatabasename
PRODUCTION_DB_HOST=0.0.0.0
PRODUCTION_DB_PORT=3306
PRODUCTION_DB_DIALECT=mysql
```

Create that `yourdatabase` (change this) database to your own database server.
You can use CLI or GUI application.

Run `migrate` script _only once_ to run the migration files, create the tables and seed initial data into the database.

```sh
yarn migrate
# this will run all migrations/*.js and seeders/*.js
```

---

## Running

Only run after the preparation, installation, and configuration are finished.

### Development

```sh
yarn dev
```

### Production

```sh
yarn start
```

---

## Extra Information

### REST API Endpoints

| Endpoint     | HTTP   | Description           |
| ------------ | ------ | --------------------- |
| `/`          | GET    | Get root API          |
| `/users`     | GET    | Get all users         |
| `/users/:id` | GET    | Get one user by id    |
| `/users`     | POST   | Create new user       |
| `/users/:id` | PUT    | Update one user by id |
| `/users/:id` | DELETE | Delete one user by id |
| `/users`     | DELETE | Delete all users      |

**Request body example**

```json
{
  "email": "yourname@yourdomain.com",
  "password": "yourpassword",
  "username": "yourusername",
  "name": "Your Full Name"
}
```

---

### Data Schema

![Data Schema](./assets/data-schema.png)

**Users**

```json
{
  "id": 0,
  "email": "",
  "password": "",
  "salt": "",
  "username": "",
  "name": ""
}
```

**Tasks**

```json
{
  "id": 0,
  "user_id": 0,
  "text": ""
}
```

---

### How to Setup Sequelize

Follow this official guide: <http://docs.sequelizejs.com/manual/tutorial/migrations.html>

Install `sequelize` dependencies in your project.

```sh
yarn add sequelize mysql2
```

Use `sequelize-cli` to initialize and configure the project.

```sh
# install sequelize-cli globally
yarn global add sequelize-cli sequelize mysql2

# so you can use it anywhere
sequelize init

# change config.json to config.js

# change '/../config/config.js' in models/index.js

# configure config.js based on your database settings
# change database name, username, password, host, port, dialect

# generate model via cli
sequelize model:generate --name User --attributes username:string,email:string

# edit migrations file
# migrations/20180000000000-create-user.js

# edit models file
# models/user.js

# do the migration from the configuration to the actual database
sequelize db:migrate

# generate seeder via cli
sequelize seed:generate --name demo-users

# edit seeders file
# seeders/20180000000000-demo-users.js

# do the seeding from the configuration to the actual database
sequelize db:seed:all
```

---

### How to Integrate with Express

Change the `server.listen` code block.

```js
server.listen(port, function() {
  console.log('Express server listening on port ' + server.address().port)
})
server.on('error', onError)
server.on('listening', onListening)
```

Into this, to be wrapped with `models.sequelize`.

```js
const models = require('./models')

// ...

models.sequelize.sync().then(function() {
  server.listen(port, function() {
    console.log('Express server listening on port ' + server.address().port)
    debug('Express server listening on port ' + server.address().port)
  })
  server.on('error', onError)
  server.on('listening', onListening)
})
```

Use the model from anywhere. For instance, in your controller functions.

```js
const models = require('../../models')

// ...

models.User.findAll()
  .then(users => {
    res.send({
      users
    })
  })
  .catch(error => {
    res.status(400).send({
      error
    })
  })
```

Run `express` server as usual.

### Database Dump

How to backup/export & restore/import database from/to a file.

**Export:**

```sh
mysqldump yourdatabase --single-transaction --user=yourusername -p > yourfile.sql
```

**Import:**

```sh
mysql yourdatabase --user=yourusername -p < yourfile.sql
```

---

### How to Deploy with Heroku

Create and login to your account on Heroku.

**On Heroku Dashboard**

Create the app on Heroku.

Setup your "Config Vars": <https://dashboard.heroku.com/apps/yourappname/settings>, then "Reveal Config Vars".

Put your `KEY` and `VALUE` respectively.

```conf
PRODUCTION_DB_USERNAME = yourusername
PRODUCTION_DB_PASSWORD = yourpassword
PRODUCTION_DB_NAME = yourdatabasename
PRODUCTION_DB_HOST = 0.0.0.0
PRODUCTION_DB_PORT = 3306
PRODUCTION_DB_DIALECT = mysql
```

Make sure it's set correctly.

You can also make it auto deploy in "Deployment Method" by connecting with GitHub: <https://dashboard.heroku.com/apps/yourappname/deploy/github>, then "Enable Automatic deploys".

**On Your Local Computer**

Install Heroku toolbelt CLI.

```sh
# on linux
sudo apt install heroku

# on mac
brew install heroku
```

Login in CLI.

```sh
heroku login
```

Create `Procfile` and add this line.
It will be used for Heroku on how to start the app.

```txt
web: yarn start
```

Create `app.json` and add these lines.
It will be used for Heroku to identify the app.

```json
{
  "name": "yourappname",
  "description": "Your App Description",
  "repository": "https://github.com/yourusername/yourappname",
  "keywords": ["your", "key", "words"],
  "image": "heroku/nodejs"
}
```

You can also install Heroku in your development dependencies.
Please note that `devDependencies` will not be installed on production.

```sh
yarn add --dev heroku
```

Test your local app as if run using Heroku.

```sh
heroku local web
```

Test your local app as if run using Heroku on `PRODUCTION` mode/environment.

```sh
yarn start:production
# this will run
# NODE_ENV=production heroku local web
```

Go to your repo, then add heroku remote.

```sh
heroku git:remote -a yourappname
# set git remote heroku to https://git.heroku.com/yourappname.git
```

Push to Heroku through Git.

```sh
git push heroku master
```

On Heroku server, the Heroku platform will in order:

- Be cloned fresh either from push or GitHub new commit trigger.
- Detect the repo if it's a Node.js app.
- Create runtime environment, especially set `NODE_ENV=production`.
- Install Node.js, npm, and yarn binaries.
- Restore cache.
- Build dependencies.
  - Install node modules.
  - Run `install` script. In this case, run `npm run setup` and `npm run migrate` scripts.
- Run the dependency installation based on `package.json`'s `dependencies`.
- Run `Procfile`'s `web` script. In this case, run `yarn start`.

You can see those in details in "Activity" panel: <https://dashboard.heroku.com/apps/yourappname/activity>.

If there's something wrong with your database, connect to its server and resolve the issue.
