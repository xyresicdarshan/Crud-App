using Crud_App.Models;
using Crud_App.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Crud_App.service
{
    public class EmployeeService
    {
        OrganisationEntities db;
        public EmployeeService()
        {
            db = new OrganisationEntities(); 
        }
        public EmployeeService(OrganisationEntities _db)
        {
            db = _db;
        }

        public int AddEmployee(EmployeeViewModel model)
        {
            Employee input = new Employee()
            {
                EmployeeId = model.EmployeeId,
                EmployeeName = model.EmployeeName,
                EmployeeEmail = model.EmployeeEmail,
                Department = model.Department,
                Designation = model.Designation,
                Tos = model.Tos,
                Wfh = model.Wfh
            };
            db.Employees.Add(input);
            return db.SaveChanges();
        }

        public List<EmployeeViewModel> GetEmployeeList()
        {
            var inputs = db.Employees.OrderByDescending(s => s.EmployeeId).ToList();
            List<EmployeeViewModel> ev = new List<EmployeeViewModel>();
            foreach (var input in inputs)
            {
                EmployeeViewModel formView = new EmployeeViewModel()
                {
                    EmployeeId = input.EmployeeId,
                    EmployeeName = input.EmployeeName,
                    EmployeeEmail = input.EmployeeEmail,
                    Department = input.Department,
                    Designation = input.Designation,
                    Tos = input.Tos,
                    Wfh = input.Wfh
                };
                ev.Add(formView);
            }
            return ev;
        }
    }
}