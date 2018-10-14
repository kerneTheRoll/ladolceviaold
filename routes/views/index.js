var keystone = require("keystone");

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	// qui settiamo la lingua


	




	locals.section = "home";
	locals.lang = res.locals.locale;
	view.on("init", function(next) {
		var currentUrl = ' ';
	
		console.log("richiesta da "+currentUrl);
		var categorie = keystone.list("Categorie").model.find();
		var homepage = keystone.list("HomePage").model.find();
		categorie.exec(function(err, results) {
			locals.categ = results;
		});

		homepage.exec(function(err, content) {
			locals.content = content;
			locals.currentUrl = '';
			next(err);
		});
	});

	// Render the view
	view.render("index");
};
