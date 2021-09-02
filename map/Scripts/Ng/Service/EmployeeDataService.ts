/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />

module EmployeeAppExtension {

    import ajaxApi = Workpulse.Site.AjaxApi;


    export class EmployeeDataService {
        

        constructor(private httpService: ng.IHttpService, private qService: ng.IQService) {

        }

        //-----------------To Add Employee Start------------------//
        AddEmployee(employee: IEmployeeModel): ng.IPromise<IEmployeeModel> {
            var self = this;
            var deferred = self.qService.defer<IEmployeeModel>();
            var apiUrl = "https://localhost:44349/employeeapi/AddEmployee";
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
        //-----------------To Add Employee End------------------//

        //-----------------To Get List Start------------------//
        GetEmployeeList(employee: IEmployeeModel): ng.IPromise<IEmployeeModel[]> {
            var self = this;
            var deferred = self.qService.defer<IEmployeeModel[]>();
            var apiUrl = "https://localhost:44349/employeeapi/GetEmployeeList";
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
        //-----------------To Get List End------------------//

        //-----------------To Get Single Employee Start------------------//
        GetEmployee(id: number): ng.IPromise<IEmployeeModel> {
            var self = this;
            var deferred = self.qService.defer<IEmployeeModel>();
            var apiUrl = "https://localhost:44349/employeeapi/GetEmployee/" + id;
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
        //-----------------To Get Single Employee End------------------//

        //-----------------To Update Employee Start------------------//
        UpdateEmployee(student: IEmployeeModel): ng.IPromise<IEmployeeModel> {
            var self = this;
            var deferred = self.qService.defer<IEmployeeModel>();
            var apiUrl = "https://localhost:44349/employeeapi/UpdateEmployee   "
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
        //-----------------To Update Employee End------------------//

        //-----------------To Delete Employee Start------------------//
        DeleteEmployee(id: number): ng.IPromise<IEmployeeModel> {
            var self = this;
            var deferred = self.qService.defer<IEmployeeModel>();
            var apiUrl = "https://localhost:44349/employeeapi/DeleteEmployee/" + id;
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
        //-----------------To Delete Employee End------------------//

        //-----------------To LINQ Filter Start------------------//
        Filter(employee: IEmployeeModel): ng.IPromise<IEmployeeModel[]> {
            var self = this;
            var deferred = self.qService.defer<IEmployeeModel[]>();
            var apiUrl = "https://localhost:44349/LinqApi/Filter";
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
        //-----------------To LINQ Filter End------------------//

        //-----------------To LINQ Group Start------------------//
        Grouping(employee: IEmployeeModel): ng.IPromise<IEmployeeModel[]> {
            var self = this;
            var deferred = self.qService.defer<IEmployeeModel[]>();
            var apiUrl = "https://localhost:44349/LinqApi/Grouping";
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
        //-----------------To LINQ Group End------------------//

        //-----------------To LINQ Order Start------------------//
        Ordering(employee: IEmployeeModel): ng.IPromise<IEmployeeModel[]> {
            var self = this;
            var deferred = self.qService.defer<IEmployeeModel[]>();
            var apiUrl = "https://localhost:44349/LinqApi/Ordering";
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
        //-----------------To LINQ Order End------------------//

        //-----------------To LINQ Join Start------------------//
        Joining(employee: IEmployeeModel): ng.IPromise<IEmployeeModel[]> {
            var self = this;
            var deferred = self.qService.defer<IEmployeeModel[]>();
            var apiUrl = "https://localhost:44349/LinqApi/Joining";
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
        //-----------------To LINQ Join End------------------//
        public static EmployeeDataServiceFactory($http: ng.IHttpService, $q: ng.IQService): EmployeeDataService {
            return new EmployeeDataService($http, $q);
        }

    }
}