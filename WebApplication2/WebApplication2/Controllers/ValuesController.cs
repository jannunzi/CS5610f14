using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public List<FishTO> Get()
        {
            List<FishTO> fs = new List<FishTO>();
//            /*
            using (f360Entities model = new f360Entities())
            {
                var fishes = from f in model.Fish select f;
                foreach(Fish ff in fishes) {
                    fs.Add(new FishTO(ff));
                }
            }
  //          */
            return fs;
            //return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public List<FishTO> Post([FromBody]FishTO fishTO)
        {
            List<FishTO> fs = new List<FishTO>();
            Fish fish = fishTO.toFish();
            using (f360Entities model = new f360Entities())
            {
                model.Fish.Add(fish);
                model.SaveChanges();

                var fishes = from f in model.Fish select f;
                foreach (Fish ff in fishes)
                {
                    fs.Add(new FishTO(ff));
                }
            }
            return fs;
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
