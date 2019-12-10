# RESTful API Scaffold
> This project is a simple RESTful API boilerplate for quick use

## Installing
1. Clone the repository, and run `cd rest-api-scaffold`
2. Install the dependencies `npm install`
3. Add the following environment variables for the database authentication `$REST_API_SCAFFOLD_USER` and
`$REST_API_SCAFFOLD_PASS`
4. Run the service by running `npm start`

## Endpoints
* `GET /items`: Returns all the items currently stored
* `GET /items?name=<name>`: Returns the item that matches the query name passed
* `POST /items?name=<name>`: Creates a new item with `<name>`
* `DELETE /items?name=<name>`: Deletes an item with `<name>` from the datastore


## Response
The following is the JSON structure of the response

```
{
    items: [
        { name: "cookie" },
        { name: "muffin" },
        ...
    ]
}
```

## Building
The service is bundled togther inside a Docker container. There are two parts, the running REST API container and the 
MongoDB container.

Make sure both the `Dockerfile` for the RESTful API service and the `docker-compose.yml` file are in the same directory.
To start the application, run `docker-compose up` (it will automatically build the `Dockerfile` into an image and start
both containers).