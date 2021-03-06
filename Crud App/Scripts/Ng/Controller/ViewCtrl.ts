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
    //----------------- Controller : Start ------------------//
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
        constructor($scope: EmployeeAppExtension.IPathwayScope, private dataSvc: EmployeeDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any) {

            super($scope, $mdToast);
            this.$scope = $scope;

            this.EmployeeId = $("#hdnid").val();
            this.ViewEmployee(this.EmployeeId);
            this.flag = $("#flag").val()=="View"? true:false;
        }

        $onInit() {
        }

        private init(): void {
        }
        //-----------------Function To View_Employee : Start ------------------//
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
        //-----------------Function For View_Employee : End ------------------//


        //-----------------Function To Update_Employee : Start ------------------//
        UpdateEmployee = () => {
            this.dataSvc.UpdateEmployee(this.$scope.project).then((data) => {
                console.log(data);
                this.showMessage("Updated Sucesfully")
                this.GotoList();
            }).catch((error) => {
                console.log(error);
                this.showMessage("Updated Error")
            }).finally(() => {

            })
        }
         //-----------------Function To Update_Employee : End ------------------//
        GotoList = () => {
            window.location.href = "/Employee/List/"
        }

    }
    //----------------- Controller : End ------------------//

    ViewCtrl.$inject = ['$scope', 'EmployeeDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("EmployeeApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('EmployeeDataService', ['$http', '$q', EmployeeDataService.EmployeeDataServiceFactory]);
    app.controller('ViewCtrl', ViewCtrl);
}