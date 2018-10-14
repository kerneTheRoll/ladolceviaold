var keystone = require("keystone");
var i18n = require('i18n');
exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.

	view.on("init", function(next) {

		// proviamo a settare la lingua 







		var categorie = keystone
			.list("Categorie")
			.model.find()
			.where("categoria")
			.equals(req.params.categorie);

		categorie.exec(function(err, results) {
			if (!results.length) {
				return res.status(301).redirect("/");
			}
			locals.categ = results;
			locals.currentUrl = req.params.categorie;
			console.log("siamo dai prodotto "+locals.currentUrl)

			var prodotto = keystone.list("Prodotti").model.find();
			prodotto.exec(function(err, res) {
				console.log("qui prodotto " + res);
				console.log("il mio locale è "+req.getLocale())
			});

			next(err);
		});
	});

	// Render the view

	view.render("categorie");
};
