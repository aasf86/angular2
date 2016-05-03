System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Point;
    return {
        setters:[],
        execute: function() {
            Point = (function () {
                function Point(p) {
                    this._x = 0;
                    this._y = 0;
                    this._z = null;
                    this._x = p.x;
                    this._y = p.y;
                    if (p.z)
                        this._z = p.z;
                }
                Point.prototype.is3d = function () {
                    return this._z != null;
                };
                return Point;
            }());
            exports_1("Point", Point);
        }
    }
});
//# sourceMappingURL=geo.js.map