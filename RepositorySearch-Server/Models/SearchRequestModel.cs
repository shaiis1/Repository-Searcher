using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RepoSearch.Models
{
    public class SearchRequestModel
    {
        [Required]
        public string Name { get; set; }
    }
}