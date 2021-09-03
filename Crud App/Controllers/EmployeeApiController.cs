using Crud_App.service;
using Crud_App.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Crud_App.Controllers
{
    public class EmployeeApiController : Controller
    {
        EmployeeService service = new EmployeeService();
        //----------- Add_Employee Api : Start -----------//
        public JsonResult AddEmployee(EmployeeViewModel model)
        {
            var result = service.AddEmployee(model);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        //----------- Add_Employee Api : End -----------//


        //----------- Get_Employee_List Api : Start -----------//
        public JsonResult GetEmployeeList()
        {
            var result = service.GetEmployeeList();
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        //----------- Get_Employee_List Api : End -----------//


        //----------- Get_Employee Api : Start -----------//
        public JsonResult GetEmployee(int id)
        {
            var result = service.GetEmployee(id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        //----------- Get_Employee Api : End -----------//


        //----------- Update_Employee Api : Start -----------//
        public JsonResult UpdateEmployee(EmployeeViewModel model)
        {
            
            var result = service.UpdateEmployee(model);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        //----------- Update_Employee Api : End -----------//


        //----------- Delete_Employee Api : Start -----------//
        public JsonResult DeleteEmployee(int id)
        {
            var result = service.DeleteEmployee(id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        //----------- Delete_Employee Api : End -----------//

    }
}