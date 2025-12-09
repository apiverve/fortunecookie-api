using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.FortuneCookieGenerator
{
    /// <summary>
    /// Query options for the Fortune Cookie Generator API
    /// </summary>
    public class FortuneCookieGeneratorQueryOptions
    {
        /// <summary>
        /// Number of fortunes to generate (1-50)
        /// Example: 3
        /// </summary>
        [JsonProperty("count")]
        public string Count { get; set; }

        /// <summary>
        /// Type of fortune (all, wisdom, prediction, advice, humor, motivational)
        /// Example: wisdom
        /// </summary>
        [JsonProperty("type")]
        public string Type { get; set; }
    }
}
