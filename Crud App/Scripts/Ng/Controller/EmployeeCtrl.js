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
    //----------------- Controller : Start ------------------//
    var EmployeeCtrl = /** @class */ (function (_super) {
        __extends(EmployeeCtrl, _super);
        function EmployeeCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast, $filter) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            //-----------------Function to Add Employee : Start ------------------//
            _this.AddEmployee = function () {
                _this.dataSvc.AddEmployee(_this.$scope.project).then(function (data) {
                    console.log(data);
                    _this.showMessage("Emplyee Added Sucessfully");
                    _this.$scope.project = null;
                    _this.GotoList();
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.GetEmployeeList = function () {
                _this.dataSvc.GetEmployeeList(_this.$scope.project).then(function (data) {
                    var Employee = new Array(100);
                    _this.employeeList = data;
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            //-----------------Function to Get List : End ------------------//
            _this.GotoList = function () {
                window.location.href = "/Employee/List/";
            };
            _this.$scope = $scope;
            _this.$mdDialog = $mdDialog;
            return _this;
        }
        EmployeeCtrl.prototype.$onInit = function () {
        };
        EmployeeCtrl.prototype.init = function () {
        };
        return EmployeeCtrl;
    }(wp.angularBase.BaseCtrl));
    EmployeeAppExtension.EmployeeCtrl = EmployeeCtrl;
    //----------------- Controller : End ------------------//
    EmployeeCtrl.$inject = ['$scope', 'EmployeeDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("EmployeeApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('EmployeeDataService', ['$http', '$q', EmployeeAppExtension.EmployeeDataService.EmployeeDataServiceFactory]);
    app.controller('EmployeeCtrl', EmployeeCtrl);
})(EmployeeAppExtension || (EmployeeAppExtension = {}));
//# sourceMappingURL=EmployeeCtrl.js.map