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
    //----------------- Controller : Start ------------------//
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
            _this.Filter = function () {
                _this.dataSvc.Filter(_this.$scope.project).then(function (data) {
                    var Employee = new Array(100);
                    _this.filterlist = data;
                    _this.employeeList = data;
                    console.log(data);
                    _this.bindEmployeeGrid();
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.Ordering = function () {
                _this.dataSvc.Ordering(_this.$scope.project).then(function (data) {
                    var Employee = new Array(100);
                    _this.orderlist = data;
                    _this.employeeList = data;
                    console.log(data);
                    _this.bindEmployeeGrid();
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.Grouping = function () {
                _this.dataSvc.Grouping(_this.$scope.project).then(function (data) {
                    var Employee = new Array(100);
                    _this.grouplist = data;
                    _this.employeeList = data;
                    console.log(data);
                    _this.bindEmployeeGrid();
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.Joining = function () {
                _this.dataSvc.Joining(_this.$scope.project).then(function (data) {
                    var Employee = new Array(100);
                    _this.grouplist = data;
                    _this.employeeList = data;
                    console.log(data);
                    _this.bindEmployeeGrid();
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            //-----------------Function For LINQ Join : End------------------//
            //-----------------DevExtme Datagrid : Start------------------//
            _this.bindEmployeeGrid = function () {
                $("#gridContainer").dxDataGrid({
                    dataSource: _this.employeeList,
                    keyExpr: 'EmployeeId',
                    columns: [
                        { caption: "Employee Id", dataField: "EmployeeId", allowSorting: false },
                        { caption: "Employee Name", dataField: "EmployeeName", allowSorting: false },
                        { caption: "Employee Email", dataField: "EmployeeEmail", allowSorting: false },
                        { caption: "Designation", dataField: "Designation", allowSorting: false, width: 150 },
                        { caption: "Department", dataField: "Department", allowSorting: false, width: 100, onclick: function (e) { _this.Filter(); } },
                        { caption: "T & S", dataField: "Tos", allowSorting: false, width: 50 },
                        { caption: "W F H", dataField: "Wfh", allowSorting: false, width: 80 },
                        {
                            caption: "Action",
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
                        },
                    ],
                    paging: {
                        pageSize: 10
                    },
                    showBorders: true,
                    //allowColumnReordering: true,
                    //allowColumnResizing : true,
                    //columnAutoWidth: true,
                });
                $("#filter").dxButton({
                    text: 'Test Filter',
                    onClick: function (e) {
                        _this.Filter();
                    }
                }),
                    $("#order").dxButton({
                        text: 'Test OrderBy',
                        onClick: function (e) {
                            _this.Ordering();
                        }
                    }),
                    $("#group").dxButton({
                        text: 'Test GroupBy',
                        onClick: function (e) {
                            _this.Grouping();
                        }
                    }),
                    $("#join").dxButton({
                        text: "Test Join By",
                        onClick: function (e) {
                            _this.Joining();
                        }
                    });
            };
            //-----------------DevExtme Datagrid : End------------------//
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
                        _this.GetEmployeeList();
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
            _this.GetEmployeeList();
            return _this;
            //this.Filter();
        }
        ListCtrl.prototype.$onInit = function () {
        };
        ListCtrl.prototype.init = function () {
        };
        return ListCtrl;
    }(wp.angularBase.BaseCtrl));
    EmployeeAppExtension.ListCtrl = ListCtrl;
    //----------------- Controller : End ------------------//
    ListCtrl.$inject = ['$scope', 'EmployeeDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("EmployeeApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('EmployeeDataService', ['$http', '$q', EmployeeAppExtension.EmployeeDataService.EmployeeDataServiceFactory]);
    app.controller('ListCtrl', ListCtrl);
})(EmployeeAppExtension || (EmployeeAppExtension = {}));
//# sourceMappingURL=ListCtrl.js.map