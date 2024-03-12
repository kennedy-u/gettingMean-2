/* GET homepage */
const index = (req, res) => {      // Creates an index function that takes a request and response object as arguments
  res.render('index', { title: 'Express' }); // Renders the index view and passes the title 'Express' to the view
};
module.exports = {  // Exports the index function as a module
    index
};