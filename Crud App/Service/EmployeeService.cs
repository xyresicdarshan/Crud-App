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
                EmployeeViewModel EmployeeView = new EmployeeViewModel()
                {
                    EmployeeId = input.EmployeeId,
                    EmployeeName = input.EmployeeName,
                    EmployeeEmail = input.EmployeeEmail,
                    Department = input.Department,
                    Designation = input.Designation,
                    Tos = input.Tos,
                    Wfh = input.Wfh
                };
                ev.Add(EmployeeView);
            }
            return ev;
        }

        public EmployeeViewModel GetEmployee(int id)
        {
            var input = db.Employees.Where(s => s.EmployeeId == id).FirstOrDefault();
            if (input != null)
            {
                EmployeeViewModel EmployeeView = new EmployeeViewModel()
                {
                    EmployeeId = input.EmployeeId,
                    EmployeeName = input.EmployeeName,
                    EmployeeEmail = input.EmployeeEmail,
                    Department = input.Department,
                    Designation = input.Designation,
                    Tos = input.Tos,
                    Wfh = input.Wfh
                };
                return EmployeeView;
            }
            else
            {
                return null;
            }
        }

        public int UpdateEmployee(EmployeeViewModel model)
        {
            var input = db.Employees.Where(s => s.EmployeeId == model.EmployeeId).FirstOrDefault();
            if (input != null)
            {
                input.EmployeeId = model.EmployeeId;
                input.EmployeeName = model.EmployeeName;
                input.EmployeeEmail = model.EmployeeEmail;
                input.Department = model.Department;
                input.Designation = model.Designation;
                input.Tos = model.Tos;
                input.Wfh = model.Wfh;

                db.Entry<Employee>(input).State = System.Data.Entity.EntityState.Modified;
                return db.SaveChanges();

            }
            else
            {
                return -1;
            }
        }

        public int DeleteEmployee(int id)
        {
            var input = db.Employees.Where(s => s.EmployeeId == id).FirstOrDefault();
            if (input != null)
            {
                db.Employees.Remove(input);
                return db.SaveChanges();
            }
            else
            {
                return 0;
            }
        }
    }
}