using AutoMapper;
using Crud_App.ViewModel;
using map.Models;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(map.Startup))]
namespace map
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }

        //public void ConfigureServices(IServiceCollection services)
        //{
        //    services.AddAutoMapper(typeof(Startup));
        //    //services.AddControllersWithViews();
        //}

        //public void ConfigureServices(IServiceCollection services)
        //{
        //    // .... Ignore code before this

        //    // Auto Mapper Configurations

        //    var config = new MapperConfiguration(cfg =>
        //    {
        //        // cfg.AddProfile<AppProfile>();
        //        cfg.CreateMap<Employee, EmployeeViewModel>();
        //        cfg.CreateMap<Department, DepartmentViewModel>();
        //        cfg.CreateMap<EmployeeViewModel, Employee>();
        //    });

        //    IMapper mapper = config.CreateMapper();

        //    services.AddSingleton(mapper);
        //}
    }
}
