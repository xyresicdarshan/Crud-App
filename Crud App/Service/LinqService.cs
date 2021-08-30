using Crud_App.Models;
using Crud_App.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace Crud_App.Service
{
    public class LinqService
    {
        OrganisationEntities db;

        public LinqService()
        {
            db = new OrganisationEntities();
        }
        public LinqService(OrganisationEntities _db)
        {
            db = _db;
        }

        public List<EmployeeViewModel> Filter()
        {
            var Employees = db.Employees.OrderBy(s => s.EmployeeName).ToString();
            List<EmployeeViewModel> ev = new List<EmployeeViewModel>();
            foreach ( var Employee in Employees)
            {
                EmployeeViewModel EmployeeView = new EmployeeViewModel()
                {
                    EmployeeId = Employee.EmployeeId,
                    EmployeeName = Employee.EmployeeName,
                    EmployeeEmail = Employee.EmployeeEmail,
                    Department = Employee.Department,
                    Designation = Employee.Designation,
                    Tos = Employee.Tos,
                    Wfh = Employee.Wfh
                };
                ev.Add(EmployeeView);
            }
            return ev;
        }

    }
}