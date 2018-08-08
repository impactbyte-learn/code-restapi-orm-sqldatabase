# Code Express ORM MariaDB

Express-based REST API server with ORM and MariaDB/MySQL.

---

## Preparation

### Database Installation

**macOS:**

```sh
brew install mariadb
brew services start mariadb
```

**Ubuntu:**

- [Install MariaDB 10.3 on Ubuntu 18.04 and CentOS 7 - Computingforgeeks](https://computingforgeeks.com/install-mariadb-10-on-ubuntu-18-04-and-centos-7)
- [How To Install MySQL on Ubuntu 18.04 | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04)

## Installation and Configuration

Install dependencies:

```sh
yarn
```

Run `setup` script:

```sh
yarn setup
# this will copy .env.schema to .env
```

Then edit `.env` contents in your editor:

```conf
DB_USERNAME=yourusername
DB_PASSWORD=yourpassword
DB_NAME=yourdatabase
DB_HOST=localhost
DB_PORT=3306
DB_DIALECT=mysql
```

Create the `yourdatabase` (change this) database to your own database server.

Run `migrate` script to migrate the tables and seed data into the database.

```sh
yarn migrate
```

---

## Running

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

### Data Schema

![Data Schema](./assets/data-schema.png)

### How to Use Sequelize

- <http://docs.sequelizejs.com/manual/tutorial/migrations.html>

```sh
yarn add sequelize mysql2 mariadb sqlite
```

```sh
yarn global add sequelize-cli sequelize mysql2 mariadb sqlite

sequelize init

sequelize model:generate --name User --attributes username:string,email:string

# edit migration/model files

sequelize db:migrate

sequelize seed:generate --name demo-users

# edit seed file

sequelize db:seed:all
```

### How to Backup Database

```sh
mysqldump yourdatabase --single-transaction --user=yourusername -p > yourfile.sql
```

```sh
mysql yourdatabase --user=yourusername -p < yourfile.sql
```
