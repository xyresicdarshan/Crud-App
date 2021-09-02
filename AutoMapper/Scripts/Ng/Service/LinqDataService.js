/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
var EmployeeAppExtension;
(function (EmployeeAppExtension) {
    var ajaxApi = Workpulse.Site.AjaxApi;
    var LinqService = /** @class */ (function () {
        function LinqService(httpService, qService) {
            this.httpService = httpService;
            this.qService = qService;
        }
        /*Filter(employee: IEmployeeModel): ng.IPromise<IEmployeeModel[]> {
            var self = this;
            var deferred = self.qService.defer<IEmployeeModel[]>();
            var apiUrl = "https://localhost:44332/LinqApi/Filter";
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
        }*/
        LinqService.prototype.Group = function (employee) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44332/LinqApi/Group";
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
        LinqService.prototype.Ordering = function (employee) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44332/LinqApi/Ordering";
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
        LinqService.prototype.Joining = function (employee) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44332/LinqApi/Joining";
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
        return LinqService;
    }());
    EmployeeAppExtension.LinqService = LinqService;
})(EmployeeAppExtension || (EmployeeAppExtension = {}));
//# sourceMappingURL=LinqDataService.js.map