using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace ClassLibrary1.Infrastructure
{
    public class BaseTest
    {
        public BaseTest()
        {
            var services = new ServiceCollection();

            services.AddEntityFramework()
                          .AddInMemoryDatabase()
                          .AddDbContext<ApplicationDbContext>();

            ServiceProvider = services.BuildServiceProvider();
        }

        public IServiceProvider ServiceProvider { get; set; }
    }
}
