"use strict";
/* A mock data source for testing
 * in the local workbench
*/
var MockList = (function () {
    function MockList() {
    }
    MockList.get = function (restUrl, options) {
        return this.items;
    };
    MockList.items = [{ Title: 'Test List Item', Id: '1' }];
    return MockList;
}());
exports.MockList = MockList;

//# sourceMappingURL=mock.list.js.map
