/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EmployeeAppExtension;
(function (EmployeeAppExtension) {
    var ViewCtrl = /** @class */ (function (_super) {
        __extends(ViewCtrl, _super);
        function ViewCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            _this.ViewEmployee = function (id) {
                console.log(id);
                _this.dataSvc.GetEmployee(id).then(function (data) {
                    console.log(data);
                    _this.$scope.project = data;
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.UpdateEmployee = function () {
                _this.dataSvc.UpdateEmployee(_this.$scope.project).then(function (data) {
                    _this.showMessage("Updated Sucesfully");
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.$scope = $scope;
            _this.EmployeeId = $("#hdnid").val();
            _this.ViewEmployee(_this.EmployeeId);
            return _this;
        }
        ViewCtrl.prototype.$onInit = function () {
        };
        ViewCtrl.prototype.init = function () {
        };
        return ViewCtrl;
    }(wp.angularBase.BaseCtrl));
    EmployeeAppExtension.ViewCtrl = ViewCtrl;
    ViewCtrl.$inject = ['$scope', 'EmployeeDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("EmployeeApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('EmployeeDataService', ['$http', '$q', EmployeeAppExtension.EmployeeDataService.EmployeeDataServiceFactory]);
    app.controller('ViewCtrl', ViewCtrl);
})(EmployeeAppExtension || (EmployeeAppExtension = {}));
//# sourceMappingURL=ViewCtrl.js.map