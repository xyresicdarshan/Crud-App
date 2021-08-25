﻿/// <reference path="../../typings/angularjs/angular.d.ts" />
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

        project: IEmployeeModel;
    }

    export class ListCtrl extends wp.angularBase.BaseCtrl implements angular.IController {


        EmployeeId: number;
        EmployeeName: string;
        Designation: string;
        Department: string;
        EmployeeEmail: string;
        Tos: boolean;
        Wfh: boolean;


        $scope: EmployeeAppExtension.IPathwayScope;
        private $mdDialog: any;
        private $mdSelect: any;
        constructor($scope: EmployeeAppExtension.IPathwayScope, private dataSvc: EmployeeDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any, $filter: any) {
            super($scope, $mdToast);
            this.$scope = $scope;
            this.$mdDialog = $mdDialog;
            this.GetEmployeeList();

           
            
        }

        $onInit() {
        }

        private init(): void {
        }

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
        bindEmployeeGrid=()=> {
            $("#gridContainer").dxDataGrid({
                dataSource: this.employeeList,
                keyExpr: 'EmployeeId',
                columns: [{ caption: "Employee Name", dataField: "EmployeeName" },
                    { caption: "Employee Email", dataField: "EmployeeEmail" },
                    { caption: "Designation", dataField: "Designation" },
                    { caption: "Department", dataField: "Department" },
                    { caption: "T & S", dataField: "Tos" },
                    { caption: "Work From Home", dataField: "Wfh" },
                    ],
                showBorders: true
            });
        }
    }

    ListCtrl.$inject = ['$scope', 'EmployeeDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("EmployeeApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('EmployeeDataService', ['$http', '$q', EmployeeDataService.EmployeeDataServiceFactory]);
    app.controller('ListCtrl', ListCtrl);
}