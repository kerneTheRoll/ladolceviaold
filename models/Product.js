var keystone = require("keystone");
var Types = keystone.Field.Types;

/**
 * Prodotti Model
 * ==========
 */

var Prodotti = new keystone.List("Prodotti");

Prodotti.add({
	nome: { type: String, required: true, initial: true },
	categoria: {
		type: Types.Relationship,
		ref: "Categorie",
		initial: true,
		many: false
	},

	descrizione: { type: String, initial: true }
});

/**
 * Registration
 */
Prodotti.defaultColumns = "name, categoria, descrizione";
Prodotti.register();
