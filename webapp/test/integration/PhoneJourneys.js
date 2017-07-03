jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"de/nlsltz/test/ci/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"de/nlsltz/test/ci/test/integration/pages/App",
	"de/nlsltz/test/ci/test/integration/pages/Browser",
	"de/nlsltz/test/ci/test/integration/pages/Master",
	"de/nlsltz/test/ci/test/integration/pages/Detail",
	"de/nlsltz/test/ci/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "de.nlsltz.test.ci.view."
	});

	sap.ui.require([
		"de/nlsltz/test/ci/test/integration/NavigationJourneyPhone",
		"de/nlsltz/test/ci/test/integration/NotFoundJourneyPhone",
		"de/nlsltz/test/ci/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});