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

        DepartmentId: number;
        DepartmentLead: string;
        DepartmentName: string;
        DeptLeadEmail: string;

        project: IEmployeeModel;
    }

    //----------------- Controller : Start ------------------//
    export class JoiningCtrl extends wp.angularBase.BaseCtrl implements angular.IController {


        EmployeeId: number;
        EmployeeName: string;
        Designation: string;
        Department: string;
        EmployeeEmail: string;
        Tos: boolean;
        Wfh: boolean;
        isDisabled: boolean;

        DepartmentId: number;
        DepartmentLead: string;
        DepartmentName: string;
        DeptLeadEmail: string;


        $scope: EmployeeAppExtension.IPathwayScope;
        private $mdDialog: any;
        private $mdSelect: any;

        constructor($scope: EmployeeAppExtension.IPathwayScope, private dataSvc: EmployeeDataService,
            $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any, $filter: any) {
            super($scope, $mdToast);
            this.$scope = $scope;
            this.$mdDialog = $mdDialog; 
            this.Joining();
        }

        $onInit() {
        }

        private init(): void {
        }
       
        //-----------------Function For LINQ Group : Start------------------//
        joinlist: IEmployeeModel[];
        Joining = () => {
            this.dataSvc.Joining(this.$scope.project).then((data) => {
                var Employee: String[] = new Array(100);
                this.joinlist = data;
                //this.employeeList = data;
                //this.GetEmployeeList();
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
            })
        }
        //-----------------Function For LINQ Group : End------------------//




    }
        JoiningCtrl.$inject = ['$scope', 'EmployeeDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

     var app = angular.module("EmployeeApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('EmployeeDataService', ['$http', '$q', EmployeeDataService.EmployeeDataServiceFactory]);
    app.controller('JoiningCtrl', JoiningCtrl);
}