using RepoSearch.Models;
using RepoSearch.ServicesUtil;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Script.Serialization;

namespace RepoSearch.Controllers
{
    [RoutePrefix("repository")]
    public class RepositoryController : ApiController
    {
        [HttpGet]
        [Route("getRepo")]
        public async Task<IHttpActionResult> GetRepositoryAsync(string name/*SearchRequestModel searchRequest*/)
        {
            try
            {
                List<RepoItemModel> repositories = await GitAPISVC.getAllRepositoriesAsync(name);
                if (repositories == null)
                {
                    return BadRequest();
                }

                else
                {
                    return Ok(repositories);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
        }

       
    }
}
