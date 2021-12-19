using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ApiHelados.Models;

namespace ApiHelados.Controllers
{
    [System.Web.Http.Cors.EnableCors(origins: "http://localhost:3000,http://localhost:5500", headers: "*", methods: "*")]
    public class HeladosController : ApiController
    {
        private HeladosDbContext db = new HeladosDbContext();

        // GET: api/Helados
        public IQueryable<Helado> GetHelados()
        {
            return db.Helados;
        }

        // GET: api/Helados/5
        [ResponseType(typeof(Helado))]
        public IHttpActionResult GetHelado(int id)
        {
            Helado helado = db.Helados.Find(id);
            if (helado == null)
            {
                return NotFound();
            }

            return Ok(helado);
        }

        // PUT: api/Helados/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutHelado(int id, Helado helado)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != helado.ID)
            {
                return BadRequest();
            }

            db.Entry(helado).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HeladoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Helados
        [ResponseType(typeof(Helado))]
        public IHttpActionResult PostHelado(Helado helado)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Helados.Add(helado);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = helado.ID }, helado);
        }

        // DELETE: api/Helados/5
        [ResponseType(typeof(Helado))]
        public IHttpActionResult DeleteHelado(int id)
        {
            Helado helado = db.Helados.Find(id);
            if (helado == null)
            {
                return NotFound();
            }

            db.Helados.Remove(helado);
            db.SaveChanges();

            return Ok(helado);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool HeladoExists(int id)
        {
            return db.Helados.Count(e => e.ID == id) > 0;
        }
    }
}