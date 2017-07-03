jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SalesOrderSet in the list
// * All 3 SalesOrderSet have at least one ToLineItems

sap.ui.require([
	"sap/ui/test/Opa5",
	"de/nlsltz/test/ci/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"de/nlsltz/test/ci/test/integration/pages/App",
	"de/nlsltz/test/ci/test/integration/pages/Browser",
	"de/nlsltz/test/ci/test/integration/pages/Master",
	"de/nlsltz/test/ci/test/integration/pages/Detail",
	"de/nlsltz/test/ci/test/integration/pages/Create",
	"de/nlsltz/test/ci/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "de.nlsltz.test.ci.view."
	});

	sap.ui.require([
		"de/nlsltz/test/ci/test/integration/MasterJourney",
		"de/nlsltz/test/ci/test/integration/NavigationJourney",
		"de/nlsltz/test/ci/test/integration/NotFoundJourney",
		"de/nlsltz/test/ci/test/integration/BusyJourney",
		"de/nlsltz/test/ci/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});