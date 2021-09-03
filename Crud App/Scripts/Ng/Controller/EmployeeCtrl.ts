/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />

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

    }
    

    //----------------- Controller : Start ------------------//
    export class EmployeeCtrl extends wp.angularBase.BaseCtrl implements angular.IController {


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
        }

        $onInit() {
        }

        private init(): void {
        }
        //-----------------Function to Add Employee : Start ------------------//
        AddEmployee = () => {
            this.dataSvc.AddEmployee(this.$scope.project).then((data) => {
                console.log(data);
                this.showMessage("Emplyee Added Sucessfully");
                this.$scope.project = null;
                this.GotoList();
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }
        //-----------------Function to Add Employee : End ------------------//

        //-----------------Function to Get List : Start ------------------//
        employeeList: IEmployeeModel[];
        GetEmployeeList = () => {
            this.dataSvc.GetEmployeeList(this.$scope.project).then((data) => {
                var Employee: String[] = new Array(100);
                this.employeeList = data;
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }
        //-----------------Function to Get List : End ------------------//
        GotoList = () => {
            window.location.href = "/Employee/List/"
        }
    }
    //----------------- Controller : End ------------------//

    EmployeeCtrl.$inject = ['$scope', 'EmployeeDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("EmployeeApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('EmployeeDataService', ['$http', '$q', EmployeeDataService.EmployeeDataServiceFactory]);
    app.controller('EmployeeCtrl', EmployeeCtrl);
}
