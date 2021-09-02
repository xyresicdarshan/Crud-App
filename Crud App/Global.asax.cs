using AutoMapper;
using Crud_App.Models;
using Crud_App.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace Crud_App
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            var config = new MapperConfiguration(cfg =>
            {
                // cfg.AddProfile<AppProfile>();
                cfg.CreateMap<Employee, EmployeeViewModel>();
                cfg.CreateMap<Department, DepartmentViewModel>();
                cfg.CreateMap<EmployeeViewModel, Employee>();
            });

            IMapper mapper = config.CreateMapper();

           

        }
    }
}
