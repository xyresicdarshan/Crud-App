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

        project: IEmployeeModel;
    }

    export class ViewCtrl extends wp.angularBase.BaseCtrl implements angular.IController {


        EmployeeId: number;
        EmployeeName: string;
        Designation: string;
        Department: string;
        EmployeeEmail: string;
        Tos: boolean;
        Wfh: boolean;



        $scope: EmployeeAppExtension.IPathwayScope;
        private $mdDialog: any;
        constructor($scope: EmployeeAppExtension.IPathwayScope, private dataSvc: EmployeeDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any) {

            super($scope, $mdToast);
            this.$scope = $scope;

            this.EmployeeId = $("#hdnid").val();
            this.ViewEmployee(this.EmployeeId);
            

        }

        $onInit() {
        }

        private init(): void {
        }

        ViewEmployee = (id: number) => {
            console.log(id);
            this.dataSvc.GetEmployee(id).then((data) => {
                console.log(data);
                this.$scope.project = data;
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

        UpdateEmployee = () => {
            this.dataSvc.UpdateEmployee(this.$scope.project).then((data) => {
                this.showMessage("Updated Sucesfully");
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
          
        }

    }
    ViewCtrl.$inject = ['$scope', 'EmployeeDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("EmployeeApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('EmployeeDataService', ['$http', '$q', EmployeeDataService.EmployeeDataServiceFactory]);
    app.controller('ViewCtrl', ViewCtrl);
}