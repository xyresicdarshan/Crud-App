var wp;
(function (wp) {
    var angularBase;
    (function (angularBase) {
        // Base Angular controller
        var BaseCtrl = /** @class */ (function () {
            function BaseCtrl($scope, $mdToast) {
                var _this = this;
                this.toastPosition = angular.extend({}, {
                    bottom: false,
                    top: true,
                    left: false,
                    right: true
                });
                this.getToastPosition = function () {
                    var self = _this;
                    return Object.keys(_this.toastPosition)
                        .filter(function (pos) {
                        return self.toastPosition[pos];
                    }).join(' ');
                };
                this.showMessage = function (message) {
                    var pinTo = _this.getToastPosition();
                    _this.$mdToast.show(_this.$mdToast.simple()
                        .textContent(message)
                        .position(pinTo)
                        .toastClass("toasterMessage")
                        .hideDelay(4000))
                        .then(function () {
                        //$log.log('Toast dismissed.');
                    }).catch(function () {
                        //$log.log('Toast failed or was forced to close early by another toast.');
                    });
                };
                this.showError = function (message) {
                    var pinTo = _this.getToastPosition();
                    _this.$mdToast.show(_this.$mdToast.simple()
                        .textContent(message)
                        .toastClass("toasterError")
                        .position(pinTo)
                        .hideDelay(4000))
                        .then(function () {
                        //$log.log('Toast dismissed.');
                    }).catch(function () {
                        //$log.log('Toast failed or was forced to close early by another toast.');
                    });
                };
                this.showWarning = function (message) {
                    var pinTo = _this.getToastPosition();
                    _this.$mdToast.show(_this.$mdToast.simple()
                        .textContent(message)
                        .toastClass("toasterWarning")
                        .position(pinTo)
                        .hideDelay(4000))
                        .then(function () {
                        //$log.log('Toast dismissed.');
                    }).catch(function () {
                        //$log.log('Toast failed or was forced to close early by another toast.');
                    });
                };
                this.$mdToast = $mdToast;
                $(window).resize(function () {
                });
            }
            return BaseCtrl;
        }());
        angularBase.BaseCtrl = BaseCtrl;
    })(angularBase = wp.angularBase || (wp.angularBase = {}));
})(wp || (wp = {}));
//# sourceMappingURL=BaseController.js.map