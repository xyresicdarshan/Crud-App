/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
/// <reference path="../../typings/devexpress-web/devexpress-web.d.ts" />

module EmployeeAppExtension {
    export interface IPathwayScope extends ng.IScope {
        loading: boolean;
        loadingTask: boolean;

        EmployeeId: number;
        EmployeeName: string;
        Designation: string;
        Department: string;
        EmployeeEmail: string;
        Tos: boolean;
        Wfh: boolean;
        isDisabled: boolean;

        project: IEmployeeModel;
    }

    //----------------- Controller : Start ------------------//
    export class ListCtrl extends wp.angularBase.BaseCtrl implements angular.IController {


        EmployeeId: number;
        EmployeeName: string;
        Designation: string;
        Department: string;
        EmployeeEmail: string;
        Tos: boolean;
        Wfh: boolean;
        isDisabled: boolean;


        $scope: EmployeeAppExtension.IPathwayScope;
        private $mdDialog: any;
        private $mdSelect: any;
       
        constructor($scope: EmployeeAppExtension.IPathwayScope, private dataSvc: EmployeeDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any, $filter: any) {
            super($scope, $mdToast);
            this.$scope = $scope;
            this.$mdDialog = $mdDialog;
            this.GetEmployeeList();
            //this.Filter();

           
            
        }

        $onInit() {
        }

        private init(): void {
        }
        //-----------------Function to Get List : Start------------------//
        employeeList: IEmployeeModel[];
        GetEmployeeList = () => {
            this.dataSvc.GetEmployeeList(this.$scope.project).then((data) => {
                var Employee: String[] = new Array(100);
                this.employeeList = data;
                console.log(data);
                this.bindEmployeeGrid();
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }
        //-----------------Function to Get List : End------------------//

        //-----------------Function For LINQ Filter : Start------------------//
        filterlist: IEmployeeModel[];
        Filter = () => {
            this.dataSvc.Filter(this.$scope.project).then((data) => {
                var Employee: String[] = new Array(100);
                this.filterlist = data;
                this.employeeList = data;
                console.log(data);
                this.bindEmployeeGrid();
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }
        //-----------------Function For LINQ Filter : End------------------//

        //-----------------Function For LINQ Order : Start------------------//
        orderlist: IEmployeeModel[];
        Ordering = () => {
            this.dataSvc.Ordering(this.$scope.project).then((data) => {
                var Employee: String[] = new Array(100);
                this.orderlist = data;
                this.employeeList = data;
                console.log(data);
                this.bindEmployeeGrid();
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }
        //-----------------Function For LINQ Order : End------------------//

        //-----------------Function For LINQ Group : Start------------------//
        grouplist: IEmployeeModel[];
        Grouping = () => {
            this.dataSvc.Grouping(this.$scope.project).then((data) => {
                var Employee: String[] = new Array(100);
                this.grouplist = data;
                this.employeeList = data;
                console.log(data);
                this.bindEmployeeGrid();
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }
        //-----------------Function For LINQ Group : End------------------//

        //-----------------Function For LINQ JOIN : Start------------------//
        joinlist: IEmployeeModel[];
        Joining = () => {
            this.dataSvc.Joining(this.$scope.project).then((data) => {
                var Employee: String[] = new Array(100);
                this.grouplist = data;
                this.employeeList = data;
                console.log(data);
                this.bindEmployeeGrid();
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }
        //-----------------Function For LINQ Join : End------------------//



        //-----------------DevExtme Datagrid : Start------------------//
        bindEmployeeGrid=()=> {
            $("#gridContainer").dxDataGrid({
                dataSource: this.employeeList,
                keyExpr: 'EmployeeId',


                columns: [
                    { caption: "Employee Id", dataField: "EmployeeId", allowSorting: false },
                    {caption: "Employee Name", dataField: "EmployeeName", allowSorting: false },
                    { caption: "Employee Email", dataField: "EmployeeEmail",  allowSorting: false},
                    { caption: "Designation", dataField: "Designation", allowSorting: false, width: 150 },
                    { caption: "Department", dataField: "Department", allowSorting: false, width: 100, onclick: (e) => { this.Filter() }},
                    { caption: "T & S", dataField: "Tos", allowSorting: false, width: 50},
                    { caption: "W F H", dataField: "Wfh", allowSorting: false, width: 80},
                    {
                        caption: "Action",
                        minWidth: 325,
                        cellTemplate:  (container, options)=> {
                            container.addClass("chart-cell");
                            console.log("rowc clci", options.data);
                            //View Button
                            $("<div/>").dxButton({
                                icon: "check",
                                type: "default",
                                text: "View",
                                onClick: (e) => {
                                    this.ShowInput(options.data.EmployeeId, 'View');
                                    
                                }
                            }).appendTo(container);
                            //-
                            //Update Button
                            $("<div/>").dxButton({
                                icon: "edit",
                                type: "success",
                                text: "Update",
                                onClick: (e) => {
                                    this.ShowInput(options.data.EmployeeId, 'Update');
                                  
                                }
                            }).appendTo(container);
                            //-
                            //Delete Button
                            $("<div/>").dxButton({
                                icon: "trash",
                                type: "danger",
                                text: "Delete",
                                onClick: (e) => {
                                    this.DeleteEmployee(options.data.EmployeeId);
                                }
                            }).appendTo(container);
                        }
                    },
                   
                ],
                
                paging: {
                    pageSize:10
                },

                showBorders: true,
                //allowColumnReordering: true,
                //allowColumnResizing : true,
                //columnAutoWidth: true,
            });
            $("#filter").dxButton({
                text: 'Test Filter',
                onClick: (e) => {
                    this.Filter();
                }
            }),

                $("#order").dxButton({
                    text: 'Test OrderBy',
                    onClick: (e) => {
                        this.Ordering();
                    }
                }),

                $("#group").dxButton({
                    text: 'Test GroupBy',
                    onClick: (e) => {
                        this.Grouping();
                    }
                }),

            $("#join").dxButton({
                text: "Test Join By",
                onClick: (e) => {
                    this.Joining();
                }
            })
        }
        //-----------------DevExtme Datagrid : End------------------//

        //-----------------Function to Redirect View in UI : Start------------------//
        ViewEmployee = (id, flag) => {
            this.ShowInput(id,flag);
            console.log(id);
        }
        //-----------------Function to Redirect View in UI : Start------------------//

        //-----------------Function to Redirect Update in UI : Start------------------//
        UpdateEmployee = (id, flag) => {
            this.ShowInput(id, flag);
            console.log(id);
        }
        //-----------------Function to Redirect Update in UI : End------------------//

        //-----------------Function to Delete Employee : Start------------------//
        DeleteEmployee = (id) => {

            var confirm = this.$mdDialog.confirm()
                .title('Would you like to delete')
                .textContent('')
                .ariaLabel('')

                .targetEvent(null)
                .ok('Yes')
                .cancel('Cancel');

            this.$mdDialog.show(confirm).then(() => {
                this.dataSvc.DeleteEmployee(id).then((data) => {
                    this.showWarning("Deleted Sucessfully");
                    console.log(data);
                    this.GetEmployeeList();
                }).catch((error) => {
                    console.log(error);
                }).finally(() => {

                })
            }, () => {
            });
        }
        //-----------------Function to Delete Employee : End------------------//
        
        //-----------------Function for Rediract : Start------------------//
        ShowInput = (id: number, flag: string) => {
            window.location.href = "/Employee/ViewEmployee/" +id+"?screenview="+flag;
        }
        //-----------------Function for Rediract : Start------------------//
    }
    //----------------- Controller : End ------------------//

    ListCtrl.$inject = ['$scope', 'EmployeeDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("EmployeeApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('EmployeeDataService', ['$http', '$q', EmployeeDataService.EmployeeDataServiceFactory]);
    app.controller('ListCtrl', ListCtrl);
}
