using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Crud_App.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult List()
        {
            return View();
        }
        public ActionResult ViewEmployee(int id, string screenview)
        {
            ViewBag.Id = id;
            ViewBag.View = screenview;
            
            return View();
        }
        public ActionResult Grouping()
        {
            return View();
        }
        public ActionResult Joining()
        {
            return View();
        }
    }
}