using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class FishTO
    {
        public int id { get; set; }
        public string name { get; set; }
        public double weight { get; set; }
        public double length { get; set; }
        public string species { get; set; }
        public System.DateTime caughtDate { get; set; }
        public int tripId { get; set; }
        public string notes { get; set; }
        public System.TimeSpan caughtTime { get; set; }
        public double girth { get; set; }
        public string spot { get; set; }
        public string presentation { get; set; }
        public double depth { get; set; }
        public double clarity { get; set; }
        public double temperature { get; set; }

        public Fish toFish()
        {
            Fish fish = new Fish
            {
                id = this.id,
                name = this.name,
                weight = this.weight,
                length = this.length,
                species = this.species,
                caughtDate = this.caughtDate,
                tripId = this.tripId,
                notes = this.notes,
                caughtTime = this.caughtTime,
                girth = this.girth,
                spot = this.spot,
                presentation = this.presentation,
                depth = this.depth,
                clarity = this.clarity,
                temperature = this.temperature
            };
            return fish;
        }

        public FishTO() { }

        public FishTO(Fish other)
        {
            this.name = other.name;
            this.id = other.id;
            if (other.weight != null)
                this.weight = other.weight.Value;
            if (other.length != null)
                this.length = other.length.Value;
            this.species = other.species;
            if (other.caughtDate != null)
                this.caughtDate = other.caughtDate.Value;
            if (other.tripId != null)
                this.tripId = other.tripId.Value;
            this.notes = other.notes;
            if (other.caughtTime != null)
                this.caughtTime = other.caughtTime.Value;
            if (other.girth != null)
                this.girth = other.girth.Value;
            this.spot = other.spot;
            this.presentation = other.presentation;
            if (other.depth != null)
                this.depth = other.depth.Value;
            if (other.clarity != null)
                this.clarity = other.clarity.Value;
            if (other.temperature != null)
                this.temperature = other.temperature.Value;
        }
    }
}