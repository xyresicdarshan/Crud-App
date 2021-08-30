/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />

module EmployeeAppExtension
{
    import ajaxApi = Workpulse.Site.AjaxApi;

    export class LinqDataService {

        constructor(private httpService: ng.IHttpService, private qService: ng.IQService) {

        }
        Filter(employee: IEmployeeModel): ng.IPromise<IEmployeeModel[]>
        {
            var self = this;
            var deferred = self.qService.defer<IEmployeeModel[]>();
            var apiUrl = "https://localhost:44332/employeeapi/Filter";
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
    }
}