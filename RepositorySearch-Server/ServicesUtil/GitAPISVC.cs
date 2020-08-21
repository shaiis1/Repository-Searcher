using RepoSearch.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Script.Serialization;

namespace RepoSearch.ServicesUtil
{
    public class GitAPISVC
    {
        public static async Task<List<RepoItemModel>> getAllRepositoriesAsync(string id)
        {
            using (var client = new HttpClient())
            {
                try
                {
                    client.DefaultRequestHeaders.Add("User-Agent", "RepositoryApp");
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    Uri uri = new Uri("https://api.github.com/search/repositories?q=" + id);
                    ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12; // carrying of SSL access to the API
                    var response = await client.GetAsync(uri);
                    string jsonResult = await response.Content.ReadAsStringAsync();

                    JavaScriptSerializer serializer = new JavaScriptSerializer();
                    RepositoryModel result = serializer.Deserialize<RepositoryModel>(jsonResult);

                    return result.items;

                }
                catch (Exception ex)
                {
                    throw new Exception(ex.Message);
                }
            }
        }
    }
}