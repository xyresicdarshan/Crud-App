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
    var GroupingCtrl = /** @class */ (function (_super) {
        __extends(GroupingCtrl, _super);
        function GroupingCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast, $filter) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            _this.Grouping = function () {
                _this.dataSvc.Grouping(_this.$scope.project).then(function (data) {
                    var Employee = new Array(100);
                    _this.grouplist = data;
                    //this.employeeList = data;
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            //-----------------Function For LINQ Group : End------------------//
            //-----------------Function to Redirect View in UI : Start------------------//
            _this.ViewEmployee = function (id, flag) {
                _this.ShowInput(id, flag);
                console.log(id);
            };
            //-----------------Function to Redirect View in UI : Start------------------//
            //-----------------Function to Redirect Update in UI : Start------------------//
            _this.UpdateEmployee = function (id, flag) {
                _this.ShowInput(id, flag);
                console.log(id);
            };
            //-----------------Function to Redirect Update in UI : End------------------//
            //-----------------Function to Delete Employee : Start------------------//
            _this.DeleteEmployee = function (id) {
                var confirm = _this.$mdDialog.confirm()
                    .title('Would you like to delete')
                    .textContent('')
                    .ariaLabel('')
                    .targetEvent(null)
                    .ok('Yes')
                    .cancel('Cancel');
                _this.$mdDialog.show(confirm).then(function () {
                    _this.dataSvc.DeleteEmployee(id).then(function (data) {
                        _this.showWarning("Deleted Sucessfully");
                        console.log(data);
                        _this.Grouping();
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
            // this.GetEmployeeList();
            _this.Grouping();
            return _this;
        }
        GroupingCtrl.prototype.$onInit = function () {
        };
        GroupingCtrl.prototype.init = function () {
        };
        return GroupingCtrl;
    }(wp.angularBase.BaseCtrl));
    EmployeeAppExtension.GroupingCtrl = GroupingCtrl;
    GroupingCtrl.$inject = ['$scope', 'EmployeeDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("EmployeeApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('EmployeeDataService', ['$http', '$q', EmployeeAppExtension.EmployeeDataService.EmployeeDataServiceFactory]);
    app.controller('GroupingCtrl', GroupingCtrl);
})(EmployeeAppExtension || (EmployeeAppExtension = {}));
//# sourceMappingURL=GroupingCtrl.js.map