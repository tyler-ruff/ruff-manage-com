function build_routes(page){
    let pageData = {};
    switch(page){
        case "companies":
        case 3:
        default:
            pageData = {
                pageNum: 3,
                content: companies()
            };
            break;
    }
    return pageData;
}
function companies(){
    return `
    <div class="w-full bg-white dark:bg-gray-800 dark:text-gray-100">
        <div class="container p-4 mx-auto my-6 space-y-1 text-center">
            <span class="text-xs font-semibold tracking-wider uppercase dark:text-violet-400">
                Ruff Management Inc.
            </span>
            <h2 class="pb-3 text-4xl font-bold md:text-5xl">
                Our Companies
            </h2>
        </div>
        <div class="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4 mb-8">
            <div class="flex flex-col px-8 py-6">
                <h2 class="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-100">
                    Blazed Labs LLC
                </h2>
                <p class="flex-1 mb-4 text-base leading-relaxed dark:text-gray-400">
                    We turn Dreams into Reality. Blazed Labs is a software development company who cares about our code.
                </p>
                <a class="mb-4 hover:underline" href="tel:+18557882348">
                    +1 (855) 788-2348
                </a>
                <a target="_blank" href="https://blazedlabs.com/" class="inline-flex items-center space-x-2 text-sm hover:underline dark:text-violet-400">
                    <span>
                        Learn More
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
            <div class="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
                <h2 class="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-100">
                    Concrete Games LLC
                </h2>
                <p class="flex-1 mb-4 text-base leading-relaxed dark:text-gray-400">
                    We are a game development studio who crafts interactive experiences for serious gamers.
                </p>
                <a class="mb-4 hover:underline" href="tel:+18882008103">
                    +1 (888) 200-8103
                </a>
                <a href="https://blazed.games/" target="_blank" class="hover:underline inline-flex items-center space-x-2 text-sm dark:text-violet-400">
                    <span>
                        Learn More
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
            <div class="flex flex-col px-8 py-6">
                <h2 class="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-100">
                    RTM Transportation LLC
                </h2>
                <p class="flex-1 mb-4 text-base leading-relaxed dark:text-gray-400">
                    We are a logistics and shipping company based out of the East Coast. RTM moves America forward.
                </p>
                <a class="mb-4 hover:underline" href="tel:+16092149678">
                    +1 (609) 214-9678
                </a>
                <a href="https://rtmtransit.com/" target="_blank" class="hover:underline inline-flex items-center space-x-2 text-sm dark:text-violet-400">
                    <span>
                        Learn More
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
            <div class="flex flex-col px-8 py-6">
                <h2 class="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-100">
                    Ocean Car Service
                </h2>
                <p class="flex-1 mb-4 text-base leading-relaxed dark:text-gray-400">
                    Car service based out of Ocean City, New Jersey. At OCS, we strive to get you there on time. Call or text us for a quote, today!
                </p>
                <a class="mb-4 hover:underline" href="tel:+16092149678">
                    +1 (609) 214-9678
                </a>
                <a href="https://oceancarservice.com/" target="_blank" class="hover:underline inline-flex items-center space-x-2 text-sm dark:text-violet-400">
                    <span>
                        Learn More
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
        <hr />
        <div class="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100 pb-10">
            <div class="container mx-auto p-4 my-6 space-y-2 text-center">
                <h2 class="text-4xl font-bold">
                    Our Platforms
                </h2>
                <p class="dark:text-gray-400">
                    Discover our amazing web platforms.
                </p>
            </div>
            <div class="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <a target="_blank" href="https://blz.one/" class="group flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 dark:text-violet-400">
                        <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                    </svg>
                    <h3 class="my-3 text-3xl font-semibold group-hover:underline">
                        Blazed One
                    </h3>
                    <div class="space-y-1 leading-tight">
                        <p>&bull; Cloud storage provider</p>
                        <p>&bull; Social network</p>
                        <p>&bull; BLZ-SH Terminal</p>
                    </div>
                </a>
                <a href="https://blazed.watch/" target="_blank" class="flex flex-col items-center p-4 group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 dark:text-violet-400">
                        <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                    </svg>
                    <h3 class="my-3 text-3xl font-semibold group-hover:underline">
                        Blazed Watch
                    </h3>
                    <div class="space-y-1 leading-tight">
                        <p>&bull; Video sharing site</p>
                        <p>&bull; Tools for film-makers</p>
                        <p>&bull; Community discussion</p>
                    </div>
                </a>
                <a href="https://blazed.city/" target="_blank" class="flex flex-col items-center p-4 group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 dark:text-violet-400">
                        <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                    </svg>
                    <h3 class="my-3 text-3xl font-semibold group-hover:underline">
                        Blazed City
                    </h3>
                    <div class="space-y-1 leading-tight">
                        <p>&bull; Virtual micronation</p>
                        <p>&bull; Business simulation</p>
                        <p>&bull; Multi-user domain</p>
                    </div>
                </a>
                <a href="https://blazed.software/" target="_blank" class="flex flex-col items-center p-4 group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 dark:text-violet-400">
                        <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                    </svg>
                    <h3 class="my-3 text-3xl font-semibold group-hover:underline">
                        Blazed Software
                    </h3>
                    <div class="space-y-1 leading-tight">
                        <p>&bull; Software sharing</p>
                        <p>&bull; Community governance</p>
                        <p>&bull; SDK sharing</p>
                    </div>
                </a>
                <a href="https://blazed.tel/" target="_blank" class="flex flex-col items-center p-4 group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 dark:text-violet-400">
                        <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                    </svg>
                    <h3 class="my-3 text-3xl font-semibold group-hover:underline">
                        Blazed Telecom
                    </h3>
                    <div class="space-y-1 leading-tight">
                        <p>&bull; Calling</p>
                        <p>&bull; SMS</p>
                        <p>&bull; Fax</p>
                    </div>
                </a>
                <a href="https://blazed.space" target="_blank" class="flex flex-col items-center p-4 group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 dark:text-violet-400">
                        <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                    </svg>
                    <h3 class="my-3 text-3xl font-semibold group-hover:underline">
                        Blazed Space
                    </h3>
                    <div class="space-y-1 leading-tight">
                        <p>&bull; Art and media</p>
                        <p>&bull; Simplistic</p>
                        <p>&bull; Just for fun</p>
                    </div>
                </a>
            </div>
        </div>
        <hr />
        <div class="dark:bg-gray-800 dark:text-gray-100">
          <div class="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-4xl">
            <h1 class="text-4xl font-bold leading-none sm:text-5xl">
              Check out our 
              <span class="text-blue-800">other services</span>
              we offer
            </h1>
            <p class="px-8 mt-8 mb-12 text-lg">
              Publishing and networking services to traverse time, space, and any other physical medium.
            </p>
            <div class="flex flex-wrap justify-center">
              <a href="https://blazed.systems/" target="_blank" class="hover:underline px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                Systems Admin
              </a>
              <a href="https://blazed.xyz/" target="_blank" class="px-8 py-3 m-2 hover:bg-gray-300 text-lg border rounded-md dark:text-gray-50 dark:border-gray-700">
                Publishing
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div class="bg-white dark:bg-gray-900">
          <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
              <h2 class="text-3xl font-semibold tracking-tight text-gray-700 sm:text-4xl dark:text-white">
                  Need some software built? <br> We do that too.
              </h2>
              
              <div class="mt-6 sm:-mx-2">
                  <div class="inline-flex w-full sm:w-auto sm:mx-2">
                      <a href="https://blazed.contact/website" target="_blank" class="inline-flex items-center justify-center w-full px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                          Website
                      </a>
                  </div>
  
                  <div class="inline-flex w-full mt-4 sm:w-auto sm:mx-2 sm:mt-0">
                      <a href="https://blazed.contact/app" target="_blank" class="inline-flex items-center justify-center w-full px-5 py-2 text-gray-700 transition-colors duration-150 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                          Application
                      </a>
                  </div>
              </div>
          </div>
        </div>
</div>`;
}