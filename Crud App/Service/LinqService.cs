using AutoMapper;
using Crud_App.Models;
using Crud_App.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Crud_App.Service
{
    //--------------- Service_Class :  Start ---------------//
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

        //--------------- LINQ Filter Service :  Start ---------------//
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
        //--------------- LINQ Filter Service :  End ---------------//


        //--------------- LINQ Grouping Service :  Start ---------------//
        public List<DepartmentViewModel> Grouping()
        {
            var inputs = db.Employees.GroupBy(s => s.Department).ToList();
            List<DepartmentViewModel> dv = new List<DepartmentViewModel>();
            foreach (var input in inputs)
            {
                var employees = input.ToList();
                List<EmployeeViewModel> empList = new List<EmployeeViewModel>();
                foreach (var emp in employees)
                {
                    EmployeeViewModel EmployeeView = new EmployeeViewModel()
                    {
                        EmployeeId = emp.EmployeeId,
                        EmployeeName = emp.EmployeeName,
                        EmployeeEmail = emp.EmployeeEmail,
                        Department = emp.Department,
                        Designation = emp.Designation,
                        Tos = emp.Tos,
                        Wfh = emp.Wfh
                    };
                    empList.Add(EmployeeView);
                }
                DepartmentViewModel department = new DepartmentViewModel()
                {
                    DepartmentName = input.Key,
                    Employees = empList
                };
                dv.Add(department);
            }
            return dv;
        }
        //--------------- LINQ Grouping Service :  End ---------------//

        //--------------- LINQ Ordering Service :  Start ---------------//
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
        //--------------- LINQ Ordering Service :  End ---------------//


        //--------------- LINQ Joining Service :  Start ---------------//
        public List<DepartmentViewModel>Joining()
        {
            var inputs = db.Departments.GroupJoin(db.Employees,
                    e => e.DeptName,
                    d => d.Department,
                    (department, employee) => new
                    {
                        Department = department,
                        Employee = employee,
                    });
            List<DepartmentViewModel> dv = new List<DepartmentViewModel>();
            foreach (var input in inputs)
            {
                var employees = input.Employee.ToList();
                List<EmployeeViewModel> empList = new List<EmployeeViewModel>();
                foreach (var emp in employees)
                {
                    EmployeeViewModel EmployeeView = new EmployeeViewModel()
                    {

                        EmployeeId = emp.EmployeeId,
                        EmployeeName = emp.EmployeeName,
                        EmployeeEmail = emp.EmployeeEmail,
                        Department = emp.Department,
                        Designation = emp.Designation,
                        Tos = emp.Tos,
                        Wfh = emp.Wfh
                    };
                    empList.Add(EmployeeView);
                }
                DepartmentViewModel department = new DepartmentViewModel()
                {
                    DepartmentId = input.Department.DeptId,
                    DepartmentName = input.Department.DeptName,
                    DepartmentLead = input.Department.DeptLead,
                    DeptLeadEmail = input.Department.LeadEmail,
                    Employees = empList
                };
                dv.Add(department);
            }
            return dv;
        }
        //--------------- LINQ Joining Service :  Start ---------------//
    }
    //--------------- Service_Class :  Start ---------------//
}