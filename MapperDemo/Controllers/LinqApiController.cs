using Crud_App.service;
using Crud_App.Service;
using Crud_App.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Crud_App.Controllers
{
    public class LinqApiController : Controller
    {
        LinqService service = new LinqService();

        public JsonResult Filter()
        {
            var result = service.Filter();
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Grouping()
        {
            var result = service.Grouping();
           return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Ordering()
        {
            var result = service.Ordering();
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Joining()
        {
            var result = service.Joining();
            return Json(result, JsonRequestBehavior.AllowGet);
        }


    }
}