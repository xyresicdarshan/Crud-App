using System.Web;
using System.Web.Optimization;

namespace AutoMapper
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
            //Custom Bundles

            //Style Bundle
            bundles.Add(new StyleBundle("~/Content/Employee").Include(
                     "~/Content/Scss/EmployeeStyle.css",
                     "~/Content/angular-material.min.css"));

            //Script Bundle

            bundles.Add(new ScriptBundle("~/bundles/Common").Include(
                     "~/Scripts/Ng/BaseController.js",
                     "~/Scripts/Ng/Site.js"));

            bundles.Add(new ScriptBundle("~/bundles/Angular").Include(
                    "~/Scripts/angular.js",
                    "~/Scripts/angular-messages.js",
                    "~/Scripts/angular-sanitize.js",
                    "~/Scripts/angular-touch.js",
                    "~/Scripts/angular-animate.js",
                    "~/Scripts/angular-aria.js",
                    "~/Scripts/angular-material.js"));

            bundles.Add(new ScriptBundle("~/bundles/Employee").Include(
                    "~/Scripts/Ng/Service/EmployeeDataService.js",
                    "~/Scripts/Ng/Controller/EmployeeCtrl.js"));

            bundles.Add(new ScriptBundle("~/bundles/List").Include(
                    "~/Scripts/Ng/Service/EmployeeDataService.js",
                    "~/Scripts/Ng/Controller/ListCtrl.js"));

            bundles.Add(new ScriptBundle("~/bundles/View").Include(
                    "~/Scripts/Ng/Service/EmployeeDataService.js",
                    "~/Scripts/Ng/Controller/ViewCtrl.js"));

            bundles.Add(new ScriptBundle("~/bundles/Grouping").Include(
                   "~/Scripts/Ng/Service/EmployeeDataService.js",
                   "~/Scripts/Ng/Controller/GroupingCtrl.js"));

            bundles.Add(new ScriptBundle("~/bundles/Joining").Include(
                   "~/Scripts/Ng/Service/EmployeeDataService.js",
                   "~/Scripts/Ng/Controller/JoiningCtrl.js"));
        }
    }
}
