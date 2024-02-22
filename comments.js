//Create web server
// 1. Import express
const express = require('express');
// 2. Create an instance of express
const app = express();
// 3. Create a port
const port = 3000;
// 4. Create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// 5. Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
// 6. Create a route
app.get('/comments', (req, res) => {
    res.send('This is a list of comments');
});
// 7. Create a route
app.get('/comments/:id', (req, res) => {
    res.send('This is a single comment');
});
// 8. Create a route
app.post('/comments', (req, res) => {
    res.send('Create a comment');
});
// 9. Create a route
app.put('/comments/:id', (req, res) => {
    res.send('Update a comment');
});
// 10. Create a route
app.delete('/comments/:id', (req, res) => {
    res.send('Delete a comment');
});