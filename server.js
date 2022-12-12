const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();
const PORT = process.env.PORT || 3001;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Connect Db to mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
    // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

// Add routes, both API and view
app.use(require('./routes'));

// Start the API server
app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`));


