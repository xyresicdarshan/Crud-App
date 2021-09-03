using AutoMapper;
using Crud_App.Models;
using Crud_App.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Crud_App.service
{
    //--------------- Service_Class :  Start ---------------//
    public class EmployeeService
    {
        OrganisationEntities db;
        public EmployeeService()
        {
            db = new OrganisationEntities();
        }

        //--------------- Add_Employee Service :  Start ---------------//
        public int AddEmployee(EmployeeViewModel model)
        {
            Employee input = new Employee();
            Mapper.CreateMap<EmployeeViewModel,Employee >();
            var EmployeeView = Mapper.Map< EmployeeViewModel, Employee>(model);
            db.Employees.Add(EmployeeView);
            return db.SaveChanges();
        }
        //--------------- Add_Employee Service :  End ---------------//


        //--------------- Get_Employee_List Service :  Start ---------------//
        public List<EmployeeViewModel> GetEmployeeList()
        {
            var inputs = db.Employees.OrderByDescending(s => s.EmployeeId).ToList();
            Mapper.CreateMap<Employee, EmployeeViewModel>();
            var employeeView = Mapper.Map<List<Employee>, List<EmployeeViewModel>>(inputs);
            return employeeView; 
        }
        //--------------- Get_Employee_List Service :  End ---------------//


        //--------------- Get_Employee Service :  Start ---------------//
        public EmployeeViewModel GetEmployee(int id)
        {
            var input = db.Employees.Where(s => s.EmployeeId == id).FirstOrDefault();
            if (input != null)
            {
                Mapper.CreateMap<Employee, EmployeeViewModel>();
                var EmployeeView = Mapper.Map<Employee,EmployeeViewModel>(input);
                return EmployeeView;
            }
            else
            {
                return null;
            }
        }
        //--------------- Get_Employee Service :  End ---------------//


        //--------------- Update_Employee Service :  Start ---------------//
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

                // db.Entry<Employee>(input).State = System.Data.Entity.EntityState.Modified;
                return db.SaveChanges();

            }
            else
            {
                return -1;
            }
        }
        //--------------- Update_Employee Service :  End ---------------//


        //--------------- Delete_Employee Service :  Start ---------------//
        public int DeleteEmployee(int id)
        {
            var input = db.Employees.Where(s => s.EmployeeId == id).FirstOrDefault();
            if (input != null)
            {
                Mapper.CreateMap<Employee, EmployeeViewModel>();
                var EmployeeView = Mapper.Map<Employee,EmployeeViewModel>(input);
                db.Employees.Remove(input);
                return db.SaveChanges();
            }
            else
            {
                return 0;
            }
        }
        //--------------- Delete_Employee Service :  Start ---------------//
    }
    //--------------- Service_Class :  Start ---------------//
}