var keystone = require("keystone");

var Types = keystone.Field.Types;

var HomePage = new keystone.List("HomePage");
HomePage.add({
	FraseIniziale: { type: String, initial: true },
	TitoloStoria: { type: String, initial: true },
	Storia: {
		type: Types.Textarea,

		initial: true
	},

	imageCover: {
		type: Types.CloudinaryImage,
		autoCleanup: true
	},

	imageColonna1: {
		type: Types.CloudinaryImage,
		autoCleanup: true
	},
	imageColonna2: {
		type: Types.CloudinaryImage,
		autoCleanup: true
	}
});

HomePage.defaultColumns =
	"FraseIniziale, TitoloStoria, Storia, imageCover, imageColonna1, imageColonna2";
HomePage.register();
