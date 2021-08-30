/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
var EmployeeAppExtension;
(function (EmployeeAppExtension) {
    var ajaxApi = Workpulse.Site.AjaxApi;
    var LinqDataService = /** @class */ (function () {
        function LinqDataService(httpService, qService) {
            this.httpService = httpService;
            this.qService = qService;
        }
        LinqDataService.prototype.Filter = function (employee) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44332/employeeapi/Filter";
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
        return LinqDataService;
    }());
    EmployeeAppExtension.LinqDataService = LinqDataService;
})(EmployeeAppExtension || (EmployeeAppExtension = {}));
//# sourceMappingURL=LinqDataService.js.map