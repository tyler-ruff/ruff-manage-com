function build_routes(page){
    let pageData = {};
    switch(page){
        case "about":
        case 1:
        default:
            pageData = {
                pageNum: 1,
                content: about()
            };
            break;
    }
    return pageData;
}
function about(){
    return `<div class="dark:bg-gray-800 dark:text-gray-100">
    <div class="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
            <h2 class="text-3xl pt-5 font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
                About Ruff Management
            </h2>
            <p class="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
                On a mission to provide exceptional service, <br /> to realize immense innovation, and to help stabilize the market.
            </p>
        </div>
        <hr />
        <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
                <h3 class="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                    We take business serious.
                </h3>
                <p class="mt-3 text-lg dark:text-gray-400">
                    Our companies have been built and cradled with adherence to local laws and regulations.
                    All our policy records, filings, and reports are transparently published to our <a class="text-blue-800 hover:underline" href="https://ir.ruff-manage.com">investor relations</a> site.
                </p>
                <div class="mt-12 space-y-12">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="ml-4">
                            <h4 class="text-lg font-medium leading-6 dark:text-gray-50">
                                Company Policy
                            </h4>
                            <p class="mt-2 dark:text-gray-400">
                                Our company's bylaws are integrated within our investor relations site, other policy documents can be found there as well.
                            </p>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="ml-4">
                            <h4 class="text-lg font-medium leading-6 dark:text-gray-50">
                                Financial Records
                            </h4>
                            <p class="mt-2 dark:text-gray-400">
                                The company's cash flow, asset holdings, and general valuation is open to be investigated by investors.
                                We publish Income statements, Cash flow statements, Balance sheets, and Statements of change in equity.
                            </p>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="ml-4">
                            <h4 class="text-lg font-medium leading-6 dark:text-gray-50">
                                Project Management
                            </h4>
                            <p class="mt-2 dark:text-gray-400">
                                We work with our companies to help track projects and campaigns.
                                We closely follow these projects and campaigns to support the project.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" class="mt-10 lg:mt-0">
                <img src="https://blazed.sirv.com/logo/interactive-ibis.png?w=360&h=480" alt="" class="mx-auto rounded-lg shadow-lg dark:bg-gray-500">
            </div>
        </div>
        <div>
            <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div class="lg:col-start-2">
                    <h3 class="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                        We make sure you can have fun.
                    </h3>
                    <p class="mt-3 text-lg dark:text-gray-400">
                        Our job is only done when the customer and investor are satisfied.
                        It is our pleasure to serve you.
                    </p>
                    <div class="mt-12 space-y-12">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="ml-4">
                                <h4 class="text-lg font-medium leading-6 dark:text-gray-50">
                                    We stand by our employees, contractors, and partners.
                                </h4>
                                <p class="mt-2 dark:text-gray-400">
                                    When workers are happy, that creates a positive company culture.
                                    Positive culture promotes well being to customers, as well, and drives sales.
                                </p>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="ml-4">
                                <h4 class="text-lg font-medium leading-6 dark:text-gray-50">
                                    We stand by our software and products.
                                </h4>
                                <p class="mt-2 dark:text-gray-400">
                                    When half-hearted engineers and developers make software, many mistakes are made.
                                    However, when whole-hearted developers make software: we make bugs go away.
                                </p>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="ml-4 pb-5">
                                <h4 class="text-lg font-medium leading-6 dark:text-gray-50">
                                    We offer FREE support!
                                </h4>
                                <p class="mt-2 dark:text-gray-400">
                                    Just submit a support ticket, and we will follow-through until the problem has been resolved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                    <img src="https://blazed.sirv.com/ibis/blazed-arena.jpg?w=360&h=480" alt="" class="mx-auto rounded-lg shadow-lg dark:bg-gray-500">
                </div>
            </div>
        </div>
    </div>
    <hr />
    <div id="Divisions">
        <h2 class="text-center bg-gray-100 text-2xl font-bold pt-10">
            Divisions
        </h2>
        <div class="h-screen flex items-center justify-center bg-gray-100">
            <div class="grid grid-cols-1 md:grid-cols-12 max-w-5xl gap-4">
                <!-- Card 1 -->
                <div class="grid col-span-4 relative">
                <a class="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-white rounded-sm py-6 pr-6 pl-9" href="https://www.ruff-manage.com/divisions/index.html?p=vending">
            
                    <!-- Title -->
                    <p class="text-2xl font-bold text-gray-500 group-hover:text-gray-700"> 
                    Vending 
                    </p>
            
                    <!-- Description -->
                    <p class="text-sm font-semibold text-gray-500 group-hover:text-gray-700 mt-2 leading-6"> 
                    We manage vending machines for dry snacks and cold drinks. We've developed an awesome asset management solution to help us track our machines.
                    </p>
            
                    <!-- Color -->
                    <div class="bg-blue-400 group-hover:bg-blue-600 h-full w-4 absolute top-0 left-0"> </div>
            
                </a>
                </div>
            
                <!-- Card 2 -->
                <div class="grid col-span-4 relative">
                <a class="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-white rounded-sm py-6 pr-6 pl-9" href="https://www.ruff-manage.com/divisions/index.html?p=properties">
            
                    <!-- Title -->
                    <p class="text-2xl font-bold text-gray-500 group-hover:text-gray-700"> 
                    Properties 
                    </p>
            
                    <!-- Description -->
                    <p class="text-sm font-semibold text-gray-500 group-hover:text-gray-700 mt-2 leading-6"> 
                    We manage residential, commercial, and mixed-use properties. Our motto is quality conditions and fair policy. We pride ourselves in our sites and their cleanliness and renters' satisfaction. 
                    </p>
            
                    <!-- Color -->
                    <div class="bg-blue-400 group-hover:bg-blue-600 h-full w-4 absolute top-0 left-0"> </div>
            
                </a>
                </div>
            
                <!-- Card 3 -->
                <div class="grid col-span-4 relative">
                    <a class="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-white rounded-sm py-6 pr-6 pl-9" href="https://www.ruff-manage.com/divisions/index.html?p=data">
                
                        <!-- Title -->
                        <p class="text-2xl font-bold text-gray-500 group-hover:text-gray-700"> 
                        Data  
                        </p>
                
                        <!-- Description -->
                        <p class="text-sm font-semibold text-gray-500 group-hover:text-gray-700 mt-2 leading-6"> 
                        From data security to data governance, we manage all aspects of data. Together with Blazed Labs, we also store data. We always store data securely to prevent fraud and theft.
                        </p>
                
                        <!-- Color -->
                        <div class="bg-blue-400 group-hover:bg-blue-600 h-full w-4 absolute top-0 left-0"> </div>
                
                    </a>
                </div>
            
            </div>
        
        </div>
    </div>
    <hr />
    <div class="bg-gray-50 dark:bg-gray-800 dark:text-gray-100">
        <div class="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 class="text-4xl font-bold leading-none sm:text-5xl">
                How can <span class="text-blue-400">Ruff Management Inc.</span> Work For You?
            </h1>
            <br />
            <div class="flex flex-wrap justify-center">
                <a href="https://www.ruff-manage.com/contact.html" class="flex px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 hover:underline">
                    Contact Us
                </a>
                <a href="https://www.ruff-manage.com/companies.html" class="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700 bg-blue-600 hover:bg-blue-700 text-white">
                    Companies
                </a>
            </div>
        </div>
    </div>
</div>`;
}