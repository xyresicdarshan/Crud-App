using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AutoMapper.Startup))]
namespace AutoMapper
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
        public void ConfigureServices(IServiceCollection services)
        {
            // .... Ignore code before this

            // Auto Mapper Configurations

            var config = new MapperConfiguration(cfg =>
            {
                // cfg.AddProfile<AppProfile>();
                //  cfg.CreateMap<Employee, EmployeeViewModel>();
                // cfg.CreateMap<Department, DepartmentViewModel>();
                //cfg.CreateMap<EmployeeViewModel, Employee>();
            });

            IMapper mapper = config.CreateMapper();

            services.AddSingleton(mapper);
        }
    }
}
