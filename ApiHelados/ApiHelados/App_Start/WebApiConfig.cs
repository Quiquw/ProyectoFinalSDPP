﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace ApiHelados
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Configuración y servicios de API web
            config.EnableCors();

            // Rutas de API web
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "MiApi/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
