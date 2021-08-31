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
            var inputs = db.Employees.Where(s => s.Department == "Dot Net").ToList();
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

        public List<EmployeeViewModel> Grouping()
        {
            var inputs = db.Employees.GroupBy(s => s.Department).ToList();
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
    
        public List<EmployeeViewModel> Ordering()
        {
            var inputs = db.Employees.OrderBy(s => s.EmployeeName).ToList();
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
    }
}