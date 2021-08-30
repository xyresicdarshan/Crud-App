/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
/// <reference path="../../typings/devexpress-web/devexpress-web.d.ts" />
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
    var ListCtrl = /** @class */ (function (_super) {
        __extends(ListCtrl, _super);
        function ListCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast, $filter) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            _this.GetEmployeeList = function () {
                _this.dataSvc.GetEmployeeList(_this.$scope.project).then(function (data) {
                    var Employee = new Array(100);
                    _this.employeeList = data;
                    console.log(data);
                    _this.bindEmployeeGrid();
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.bindEmployeeGrid = function () {
                $("#gridContainer").dxDataGrid({
                    dataSource: _this.employeeList,
                    keyExpr: 'EmployeeId',
                    columns: [
                        { caption: "Employee Name", dataField: "EmployeeName" },
                        { caption: "Employee Email", dataField: "EmployeeEmail" },
                        { caption: "Designation", dataField: "Designation" },
                        { caption: "Department", dataField: "Department" },
                        { caption: "T & S", dataField: "Tos" },
                        { caption: "Work From Home", dataField: "Wfh" },
                        {
                            caption: "",
                            minWidth: 325,
                            cellTemplate: function (container, options) {
                                container.addClass("chart-cell");
                                console.log("rowc clci", options.data);
                                //View Button
                                $("<div/>").dxButton({
                                    icon: "check",
                                    type: "default",
                                    text: "View",
                                    onClick: function (e) {
                                        _this.ShowInput(options.data.EmployeeId, 'View');
                                    }
                                }).appendTo(container);
                                //-
                                //Update Button
                                $("<div/>").dxButton({
                                    icon: "edit",
                                    type: "success",
                                    text: "Update",
                                    onClick: function (e) {
                                        _this.ShowInput(options.data.EmployeeId, 'Update');
                                    }
                                }).appendTo(container);
                                //-
                                //Delete Button
                                $("<div/>").dxButton({
                                    icon: "trash",
                                    type: "danger",
                                    text: "Delete",
                                    onClick: function (e) {
                                        _this.DeleteEmployee(options.data.EmployeeId);
                                    }
                                }).appendTo(container);
                            }
                        }
                    ],
                    paging: {
                        pageSize: 10
                    },
                    showBorders: true
                });
            };
            _this.ViewEmployee = function (id, flag) {
                _this.ShowInput(id, flag);
                console.log(id);
                //this.isDisabled = true;
                // this.dataSvc.GetEmployee(id, flag).then((data) => {
                //console.log(data);
                //this.$scope.project = data;
                //this.isDisabled = true;
                //}).catch((error) => {
                //console.log(error);
                //}).finally(() => {
                //})
            };
            _this.UpdateEmployee = function (id, flag) {
                _this.ShowInput(id, flag);
                console.log(id);
                //this.dataSvc.UpdateEmployee(id).then((data) => {
                // console.log(data);
                //}).catch((error) => {
                //    console.log(error);
                //}).finally(() => {
                //})
            };
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
                        _this.GetEmployeeList();
                    }).catch(function (error) {
                        console.log(error);
                    }).finally(function () {
                    });
                }, function () {
                });
            };
            _this.ShowInput = function (id, flag) {
                window.location.href = "/Employee/ViewEmployee/" + id + "?screenview=" + flag;
            };
            _this.$scope = $scope;
            _this.$mdDialog = $mdDialog;
            _this.GetEmployeeList();
            return _this;
        }
        ListCtrl.prototype.$onInit = function () {
        };
        ListCtrl.prototype.init = function () {
        };
        return ListCtrl;
    }(wp.angularBase.BaseCtrl));
    EmployeeAppExtension.ListCtrl = ListCtrl;
    ListCtrl.$inject = ['$scope', 'EmployeeDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("EmployeeApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('EmployeeDataService', ['$http', '$q', EmployeeAppExtension.EmployeeDataService.EmployeeDataServiceFactory]);
    app.controller('ListCtrl', ListCtrl);
})(EmployeeAppExtension || (EmployeeAppExtension = {}));
//# sourceMappingURL=ListCtrl.js.map