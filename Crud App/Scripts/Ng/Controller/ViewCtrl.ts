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
        isDisabled: boolean;

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
        isDisabled: boolean;



        $scope: EmployeeAppExtension.IPathwayScope;
        private $mdDialog: any;
        flag: boolean;
        flag1: boolean;
        constructor($scope: EmployeeAppExtension.IPathwayScope, private dataSvc: EmployeeDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any) {

            super($scope, $mdToast);
            this.$scope = $scope;

            this.EmployeeId = $("#hdnid").val();
            this.ViewEmployee(this.EmployeeId);
            this.flag = $("#hdnflg").val();
            

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
                console.log(data);
                    this.showMessage("Updated Sucesfully")
            }).catch((error) => {
                console.log(error);
                this.showMessage("Updated Error")
            }).finally(() => {

            })
          
        }

    }
    ViewCtrl.$inject = ['$scope', 'EmployeeDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("EmployeeApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('EmployeeDataService', ['$http', '$q', EmployeeDataService.EmployeeDataServiceFactory]);
    app.controller('ViewCtrl', ViewCtrl);
}