using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Crud_App.ViewModel
{
    public class DepartmentViewModel
    {
        public int DepartmentId { get; set; }
        public string DepartmentLead { get; set; }
        public string DepartmentName { get; set; }
        public String DeptLeadEmail { get; set; }
        public List<EmployeeViewModel> Employees { get; set; }
    }
    public class EmployeeViewModel
    {
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string EmployeeEmail { get; set; }
        public string Designation { get;  set; }
        public string Department { get; set; }
        public bool Tos { get;  set; }
        public bool Wfh { get; set; }
    }
}