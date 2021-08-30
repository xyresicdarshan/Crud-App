/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />

module EmployeeAppExtension {

    import ajaxApi = Workpulse.Site.AjaxApi;


    export class EmployeeDataService {

        constructor(private httpService: ng.IHttpService, private qService: ng.IQService) {

        }


        AddEmployee(employee: IEmployeeModel): ng.IPromise<IEmployeeModel> {
            var self = this;
            var deferred = self.qService.defer<IEmployeeModel>();
            var apiUrl = "https://localhost:44332/employeeapi/AddEmployee";
            ajaxApi({
                url: apiUrl,
                data: JSON.stringify(employee),
                type: 'POST',
                contentType: 'application/json',
                success: (response: IEmployeeModel) => {
                    deferred.resolve(response);
                    //Workpulse.Site.AlertJS("Added Sucessfully")
                },
                error: (xhr) => {
                    console.log(xhr)
                    Workpulse.Site.AlertJS(xhr)
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        }

        GetEmployeeList(employee: IEmployeeModel): ng.IPromise<IEmployeeModel[]> {
            var self = this;
            var deferred = self.qService.defer<IEmployeeModel[]>();
            var apiUrl = "https://localhost:44332/employeeapi/GetEmployeeList";
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                success: (response: IEmployeeModel[]) => {
                    deferred.resolve(response);
                },
                error: (xhr) => {
                    console.log(xhr)
                    Workpulse.Site.AlertJS(xhr)
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        }

        GetEmployee(id: number): ng.IPromise<IEmployeeModel> {
            var self = this;
            var deferred = self.qService.defer<IEmployeeModel>();
            var apiUrl = "https://localhost:44332/employeeapi/GetEmployee/" + id;
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                //contentType: 'application/json',
                success: (response: IEmployeeModel) => {
                    deferred.resolve(response);
                },
                error: (xhr) => {
                    console.log(xhr)
                    Workpulse.Site.AlertJS(xhr)
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        }

        UpdateEmployee(student: IEmployeeModel): ng.IPromise<IEmployeeModel> {
            var self = this;
            var deferred = self.qService.defer<IEmployeeModel>();
            var apiUrl = "https://localhost:44332/employeeapi/UpdateEmployee   "
            ajaxApi({
                url: apiUrl,
                data: JSON.stringify(student),
                type: 'POST',
                contentType: 'application/json',
                success: (response: IEmployeeModel) => {
                    deferred.resolve(response);
                },
                error: (xhr) => {
                    console.log(xhr)
                    Workpulse.Site.AlertJS(xhr)
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        }

        DeleteEmployee(id: number): ng.IPromise<IEmployeeModel> {
            var self = this;
            var deferred = self.qService.defer<IEmployeeModel>();
            var apiUrl = "https://localhost:44332/employeeapi/DeleteEmployee/" + id;
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                success: (response: IEmployeeModel) => {
                    deferred.resolve(response);
                },
                error: (xhr) => {
                    console.log(xhr)
                    Workpulse.Site.AlertJS(xhr)
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        }

        public static EmployeeDataServiceFactory($http: ng.IHttpService, $q: ng.IQService): EmployeeDataService {
            return new EmployeeDataService($http, $q);
        }

    }
}