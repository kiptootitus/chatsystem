const require = require('require');
const app= express();
const port=8080;
app.use (express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});