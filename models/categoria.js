var keystone = require("keystone");
var Types = keystone.Field.Types;

/**
 * Categoria Model
 * ==========
 */

var Categorie = new keystone.List("Categorie", {
	map: { name: "categoria" }
});

Categorie.add({
	categoria: {
		type: String,
		initial: true,
		required: true,
		unique: true
	},

	foto: {
		type: Types.CloudinaryImage,
		autoCleanup: true
	}
});

/**
 * Registration
 */
Categorie.defaultColumns = "categoria";
Categorie.register();
