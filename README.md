# moments-api
GraphQL API for Moments app

## Setup

```shell
$ yarn
```

## Start the app
```shell
$ node index.js
```

Then open http://localhost:4000/ on your browser and see the playground, then use the following Query to fetch the data.

```graphql
{
  getMomentsDetailsByUserID(userID: "0") {
    userDetails {
      id
      name
      avatar
      backgroundImage
    }
    moments {
      id
      userDetails {
        name
        avatar
      }
      type
      title
      photos
      createdDate
    }
  }
}
```