using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WA1.Startup))]
namespace WA1
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
