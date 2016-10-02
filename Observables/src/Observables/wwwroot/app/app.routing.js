"use strict";
var router_1 = require('@angular/router');
var simple_component_1 = require('./simple.component');
var time_component_1 = require('./time.component');
var product_component_1 = require('./product.component');
var routes = [
    { path: 'time', component: time_component_1.TimeComponent },
    { path: 'product', component: product_component_1.ProductComponent },
    { path: '**', component: simple_component_1.SimpleComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map