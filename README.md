## Chat Application

Messenger that allows you to add contacts by their ID and chat with them by sending text messages.

## Getting Started

Install dependencies in the client and server folders using comands below

```
npm run clientDependencies
```

```
npm run serverDependencies
```

Once denendencies are sucessfully installed start the application. Server and client will run concurrently.

```
npm run devStart
```

## Recommended Testing

Open two browser windows, one normally and the second in incognito mode (this is because the website uses local storage).\
On each widnow head to the URL below and create a new ID.

```
http://localhost:3000/
```

Now you can save these IDs as contacts or text between them regardless of whether they are in contacts.

## What's Used

- React
- react-bootstrap
- socket.io
