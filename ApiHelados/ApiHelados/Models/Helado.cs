using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ApiHelados.Models
{
    public class Helado
    {
        public int ID { get; set; }

        public string Sabor { get; set; }

        public decimal Precio { get; set; }

        public int UnidadesDisponibles { get; set; }

        public string Url { get; set; }
    }

    class HeladosDbContext : DbContext
    {
        public DbSet<Helado> Helados { get; set; }
    }
}