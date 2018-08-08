# Code Express ORM MariaDB

Express-based REST API server with ORM and MariaDB/MySQL.

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

## Configuration

Change `.env` contents:

```txt
DB_USER=yourusername
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_PORT=3306
```

## Running

### Development

```sh
yarn
yarn dev
```

### Production

```sh
yarn
yarn start
```
