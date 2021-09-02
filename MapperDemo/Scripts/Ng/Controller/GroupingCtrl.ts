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

        DepartmentId: number;
        DepartmentLead: string;
        DepartmentName: string;
        DeptLeadEmail: string;

        isDisabled: boolean;

        project: IEmployeeModel;
    }

    //----------------- Controller : Start ------------------//
    export class GroupingCtrl extends wp.angularBase.BaseCtrl implements angular.IController {


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
           // this.GetEmployeeList();
            this.Grouping();
        }

        $onInit() {
        }

        private init(): void {
        }
        
        //-----------------Function For LINQ Group : Start------------------//
        grouplist: IEmployeeModel[];
        Grouping = () => {
            this.dataSvc.Grouping(this.$scope.project).then((data) => {
                var Employee: String[] = new Array(100);
                this.grouplist = data;
                //this.employeeList = data;
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }
        //-----------------Function For LINQ Group : End------------------//
        //-----------------Function to Redirect View in UI : Start------------------//
        ViewEmployee = (id, flag) => {
            this.ShowInput(id, flag);
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
                    this.Grouping();
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
            window.location.href = "/Employee/ViewEmployee/" + id + "?screenview=" + flag;
        }
        //-----------------Function for Rediract : Start------------------//
    }
    GroupingCtrl.$inject = ['$scope', 'EmployeeDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("EmployeeApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('EmployeeDataService', ['$http', '$q', EmployeeDataService.EmployeeDataServiceFactory]);
    app.controller('GroupingCtrl', GroupingCtrl);
}