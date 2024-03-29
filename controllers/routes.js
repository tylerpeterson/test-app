module.exports = function(app) {

  /* Optionally include this to use this alternative template when wanting to create your own header and footer
  app.set("view options", {
    layout: "layout/layout-skills"
  });
  */
  app.get('/name', function(req, res) {
    res.send("Hi! My name is Tyler.");
  });
  app.get('/:page', function(req, res){
    res.render(req.params.page, {pathName: req.params.page});
  });
  app.get('/', function(req, res){
    res.render("index", {});
  });
};
