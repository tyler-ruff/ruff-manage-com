function build_routes(page){
    let pageData = {};
    switch(page){
        case "home":
        case 1:
        default:
            pageData = {
                pageNum: 0,
                content: home()
            };
            break;
    }
    return pageData;
}


function home(){
    return `
            <div class="bg-gray-100">
                <div class="container mx-auto flex flex-col items-center py-12 sm:py-24">
                <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                    <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                    Ruff Management Inc.
                    <span class="text-indigo-700">Websites</span>
                    Your Way.
                    </h1>
                    <p class="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
                    We are an executive management firm from South Jersey.
                    </p>
                </div>
                <div class="flex justify-center items-center">
                    <a href="https://www.ruff-manage.com/companies.html" class="flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">
                    Our Companies
                    </q>
                    <a href="https://www.ruff-manage.com/about.html" class="flex ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-gray-200 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">
                    Learn More
                    </a>
                </div>
                </div>
            </div>
            <hr />
            <h2 class="text-4xl font-bold text-center pt-10">
                Current Stats
            </h2>
            <div class="p-6 dark:bg-gray-800 dark:text-gray-100 pb-10">
                <div class="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                <div class="flex flex-col justify-start m-2 lg:m-6">
                    <p class="text-4xl font-bold leading-none lg:text-6xl">
                    3
                    </p>
                    <p class="text-sm sm:text-base">
                    Companies
                    </p>
                </div>
                <div class="flex flex-col justify-start m-2 lg:m-6">
                    <p class="text-4xl font-bold leading-none lg:text-6xl">
                    26
                    </p>
                    <p class="text-sm sm:text-base">
                    Websites
                    </p>
                </div>
                <div class="flex flex-col justify-start m-2 lg:m-6">
                    <p class="text-4xl font-bold leading-none lg:text-6xl">
                    4
                    </p>
                    <p class="text-sm sm:text-base">
                    Shareholders
                    </p>
                </div>
                <div class="flex flex-col justify-start m-2 lg:m-6">
                    <p class="text-4xl font-bold leading-none lg:text-6xl">
                    10k
                    </p>
                    <p class="text-sm sm:text-base">
                    Total Shares
                    </p>
                </div>
                <div class="flex flex-col justify-start m-2 lg:m-6">
                    <p class="text-4xl font-bold leading-none lg:text-6xl">
                    $3
                    </p>
                    <p class="text-sm sm:text-base">
                    Share Price
                    </p>
                </div>
                <div class="flex flex-col justify-start m-2 lg:m-6">
                    <p class="text-4xl font-bold leading-none lg:text-6xl">
                    3k+
                    </p>
                    <p class="text-sm sm:text-base">
                    Average Daily Requests
                    </p>
                </div>
                </div>
            </div>
            <hr />
            <div class="py-6 bg-gray-50 dark:bg-gray-800 dark:text-gray-50">
                <div class="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                <h1 class="text-4xl font-bold leading-none text-center">
                    Invest in Ruff Management Inc.
                </h1>
                <p class="text-xl font-medium text-center">
                    We sell liquid and illiquid virtual assets and services.
                    But we always follow SEC regulations carefully, so your money is safe.
                </p>
                <div class="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
                    <a href="https://ir.ruff-manage.com/" class="hover:underline flex px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                    Investors
                    </a>
                    <a href="https://www.ruff-manage.com/contact.html" class="flex px-8 py-3 text-lg font-normal border transition duration-250 ease-in-out rounded hover:bg-gray-300 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-300">
                    Contact Us
                    </a>
                </div>
            </div>
        </div>
    `;
}