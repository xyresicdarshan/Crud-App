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
        EmployeeDataService.prototype.AddEmployee = function (employee) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44332/employeeapi/AddEmployee";
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
        EmployeeDataService.prototype.GetEmployeeList = function (employee) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44332/employeeapi/GetEmployeeList";
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
        EmployeeDataService.prototype.GetEmployee = function (id) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44332/employeeapi/GetEmployee/" + id;
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
        EmployeeDataService.prototype.UpdateEmployee = function (student) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44332/employeeapi/UpdateEmployee   ";
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
        EmployeeDataService.prototype.DeleteEmployee = function (id) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44332/employeeapi/DeleteEmployee/" + id;
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
        EmployeeDataService.EmployeeDataServiceFactory = function ($http, $q) {
            return new EmployeeDataService($http, $q);
        };
        return EmployeeDataService;
    }());
    EmployeeAppExtension.EmployeeDataService = EmployeeDataService;
})(EmployeeAppExtension || (EmployeeAppExtension = {}));
//# sourceMappingURL=EmployeeDataService.js.map