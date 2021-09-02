/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
var EmployeeAppExtension;
(function (EmployeeAppExtension) {
    var ajaxApi = Workpulse.Site.AjaxApi;
    var EmployeeDataService = /** @class */ (function () {
        function EmployeeDataService(httpService, qService) {
            this.httpService = httpService;
            this.qService = qService;
        }
        //-----------------To Add Employee Start------------------//
        EmployeeDataService.prototype.AddEmployee = function (employee) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44349/employeeapi/AddEmployee";
            ajaxApi({
                url: apiUrl,
                data: JSON.stringify(employee),
                type: 'POST',
                contentType: 'application/json',
                success: function (response) {
                    deferred.resolve(response);
                    //Workpulse.Site.AlertJS("Added Sucessfully")
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        //-----------------To Add Employee End------------------//
        //-----------------To Get List Start------------------//
        EmployeeDataService.prototype.GetEmployeeList = function (employee) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44349/employeeapi/GetEmployeeList";
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        //-----------------To Get List End------------------//
        //-----------------To Get Single Employee Start------------------//
        EmployeeDataService.prototype.GetEmployee = function (id) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44349/employeeapi/GetEmployee/" + id;
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                //contentType: 'application/json',
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        //-----------------To Get Single Employee End------------------//
        //-----------------To Update Employee Start------------------//
        EmployeeDataService.prototype.UpdateEmployee = function (student) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44349/employeeapi/UpdateEmployee   ";
            ajaxApi({
                url: apiUrl,
                data: JSON.stringify(student),
                type: 'POST',
                contentType: 'application/json',
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        //-----------------To Update Employee End------------------//
        //-----------------To Delete Employee Start------------------//
        EmployeeDataService.prototype.DeleteEmployee = function (id) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44349/employeeapi/DeleteEmployee/" + id;
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        //-----------------To Delete Employee End------------------//
        //-----------------To LINQ Filter Start------------------//
        EmployeeDataService.prototype.Filter = function (employee) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44349/LinqApi/Filter";
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        //-----------------To LINQ Filter End------------------//
        //-----------------To LINQ Group Start------------------//
        EmployeeDataService.prototype.Grouping = function (employee) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44349/LinqApi/Grouping";
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        //-----------------To LINQ Group End------------------//
        //-----------------To LINQ Order Start------------------//
        EmployeeDataService.prototype.Ordering = function (employee) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44349/LinqApi/Ordering";
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        //-----------------To LINQ Order End------------------//
        //-----------------To LINQ Join Start------------------//
        EmployeeDataService.prototype.Joining = function (employee) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44349/LinqApi/Joining";
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        //-----------------To LINQ Join End------------------//
        EmployeeDataService.EmployeeDataServiceFactory = function ($http, $q) {
            return new EmployeeDataService($http, $q);
        };
        return EmployeeDataService;
    }());
    EmployeeAppExtension.EmployeeDataService = EmployeeDataService;
})(EmployeeAppExtension || (EmployeeAppExtension = {}));
//# sourceMappingURL=EmployeeDataService.js.map