# Founders checker

# Description

This service works with `founders.txt` file and returns founders' names listed in them. It also checks if a name provided in a request is in the file or not.

# How to run?

1. Clone GitHub repository
2. Run `nvm use`
3. Run `npm install`
4. Run `npm run start`

# How to test?

Following CURLs can be used to test the functionality.

### GET `/founders`

```curl
curl --location --request GET 'http://localhost:8000/founders'
```

### POST `/founders/check`

```curl
curl --location --request POST 'http://localhost:8000/founders/check' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Inga Konovalova"
}'
```
