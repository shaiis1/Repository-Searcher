using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RepoSearch.Models
{
    public class RepoItemModel
    {
        public string name { get; set; }
        public OwnerModel owner { get; set; }
    }
}