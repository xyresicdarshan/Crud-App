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
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
var EmployeeAppExtension;
(function (EmployeeAppExtension) {
    //----------------- Controller : Start ------------------//
    var JoiningCtrl = /** @class */ (function (_super) {
        __extends(JoiningCtrl, _super);
        function JoiningCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast, $filter) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            _this.Joining = function () {
                _this.dataSvc.Joining(_this.$scope.project).then(function (data) {
                    var Employee = new Array(100);
                    _this.joinlist = data;
                    //this.employeeList = data;
                    //this.GetEmployeeList();
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            //-----------------Function For LINQ Group : End------------------//
            //-----------------Function to Redirect View in UI : Start------------------//
            _this.ViewEmployee = function (id, flag) {
                if (id === void 0) { id = _this.EmployeeId; }
                if (flag === void 0) { flag = 'View'; }
                _this.ShowInput(id, flag);
                console.log(id);
            };
            //-----------------Function to Redirect View in UI : Start------------------//
            //-----------------Function to Redirect Update in UI : Start------------------//
            _this.UpdateEmployee = function (id, flag) {
                if (id === void 0) { id = _this.EmployeeId; }
                if (flag === void 0) { flag = 'Update'; }
                _this.ShowInput(id, flag);
                console.log(id);
            };
            //-----------------Function to Redirect Update in UI : End------------------//
            //-----------------Function to Delete Employee : Start------------------//
            _this.DeleteEmployee = function (id) {
                if (id === void 0) { id = _this.EmployeeId; }
                var confirm = _this.$mdDialog.confirm()
                    .title('Would you like to delete')
                    .textContent('')
                    .ariaLabel('')
                    .targetEvent(null)
                    .ok('Yes')
                    .cancel('Cancel');
                _this.$mdDialog.show(confirm).then(function () {
                    _this.dataSvc.DeleteEmployee(id = _this.EmployeeId).then(function (data) {
                        _this.showWarning("Deleted Sucessfully");
                        console.log(data);
                        _this.Joining();
                    }).catch(function (error) {
                        console.log(error);
                    }).finally(function () {
                    });
                }, function () {
                });
            };
            //-----------------Function to Delete Employee : End------------------//
            //-----------------Function for Rediract : Start------------------//
            _this.ShowInput = function (id, flag) {
                window.location.href = "/Employee/ViewEmployee/" + id + "?screenview=" + flag;
            };
            _this.$scope = $scope;
            _this.$mdDialog = $mdDialog;
            _this.Joining();
            return _this;
        }
        JoiningCtrl.prototype.$onInit = function () {
        };
        JoiningCtrl.prototype.init = function () {
        };
        return JoiningCtrl;
    }(wp.angularBase.BaseCtrl));
    EmployeeAppExtension.JoiningCtrl = JoiningCtrl;
    JoiningCtrl.$inject = ['$scope', 'EmployeeDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("EmployeeApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('EmployeeDataService', ['$http', '$q', EmployeeAppExtension.EmployeeDataService.EmployeeDataServiceFactory]);
    app.controller('JoiningCtrl', JoiningCtrl);
})(EmployeeAppExtension || (EmployeeAppExtension = {}));
//# sourceMappingURL=JoiningCtrl.js.map