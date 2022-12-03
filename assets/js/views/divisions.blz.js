function build_routes(page){
    let pageData = {};
    switch(page){
        case "data":
        case 5:
        default:
            pageData = {
                pageNum: 5,
                content: data()
            };
            break;
        case "properties":
        case 6:
            pageData = {
                pageNum: 6,
                content: properties()
            };
            break;
        case "vending":
        case 7:
            pageData = {
                pageNum: 7,
                content: vending()
            };
            break;
    }
    return pageData;
}
function vending(){
    return `
    <div class="p-3">
        <nav aria-label="Breadcrumb" class="py-10">
            <ol role="list" class="flex items-center space-x-1 text-sm text-gray-500">
            <li>
                <a class="block transition-colors hover:text-gray-700" href="https://www.ruff-manage.com/">
                <span class="sr-only"> Home </span>
        
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                </a>
            </li>
        
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </li>
        
            <li>
                <a class="block transition-colors hover:text-gray-700" href="#"> Divisions </a>
            </li>
        
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </li>
        
            <li>
                <a class="block transition-colors hover:text-gray-700" href="https://www.ruff-manage.com/divisions/index.html?p=vending"> Vending </a>
            </li>
            </ol>
        </nav>
        <hr />
        <h1 class="text-3xl font-bold text-center py-5">
            Ruff Vending
        </h1>
        <div>
            <img class="relative mx-auto" src="https://blazed.sirv.com/ruff-manage.com/wolf-icon-and-symbol-illustration-free-vector.webp?h=120&w=120">
        </div>
        <p class="py-3 text-center">
            We manage vending machines, cold (drink), dry (snack), and frozen.
        </p>
        <hr />
        <h3 class="text-xl p-1">
            Chief Officer
        </h3>
        <p class="py-2 pl-3">
            Matthew Ruff
            <br />
            <a href="mailto:pickle@blazed.space" class="hover:underline">pickle@blazed.space</a>
        </p>
        <hr />
        <p class="py-2">
            Contact Phone: <a href="tel:+18338870061" class="hover:underline">+1(833)887-0061</a><br />
            Contact Form: <a href="https://blazed.company/contact" class="hover:underline">Click Here</a>
        </p>
    </div>
    `;
}
function properties(){
    return `
    <div class="p-3">
        <nav aria-label="Breadcrumb" class="py-10">
            <ol role="list" class="flex items-center space-x-1 text-sm text-gray-500">
            <li>
                <a class="block transition-colors hover:text-gray-700" href="https://www.ruff-manage.com/">
                <span class="sr-only"> Home </span>
        
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                </a>
            </li>
        
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </li>
        
            <li>
                <a class="block transition-colors hover:text-gray-700" href="#"> Divisions </a>
            </li>
        
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </li>
        
            <li>
                <a class="block transition-colors hover:text-gray-700" href="https://www.ruff-manage.com/divisions/index.html?p=properties"> Property </a>
            </li>
            </ol>
        </nav>
        <hr />
        <h1 class="text-3xl font-bold text-center py-5">
            Ruff Property Management
        </h1>
        <div>
            <img class="relative mx-auto" src="https://blazed.sirv.com/ruff-manage.com/b149ada45d334cd00f9b1cf92d475184.webp?h=120&w=120">
        </div>
        <p class="py-3 text-center">
            We manage commercial and residential properties.
        </p>
        <hr />
        <h3 class="text-xl p-1 font-bold">
            Sites
        </h3>
        <p class="py-2 pl-3">
            &bull; 1650 Simpson
            <br />
            Ocean City, NJ
        </p>
        <hr />
        <p class="py-2">
            Contact Phone: <a href="tel:+18338870061" class="hover:underline">+1(833)887-0061</a><br />
            Contact Form: <a href="https://blazed.company/contact" class="hover:underline">Click Here</a>
        </p>
        <hr />
        <h3 class="text-xl py-2 font-bold">
            Investment Opportunity
        </h3>
        <p class="py-2">
            Open Collective: <a href="https://opencollective.com/ruff-management-inc" class="hover:underline">Click Here</a>
        </p>
    </div>
`;
}
function data(){
    return `
    <div class="p-3">
        <nav aria-label="Breadcrumb" class="py-10">
            <ol role="list" class="flex items-center space-x-1 text-sm text-gray-500">
            <li>
                <a class="block transition-colors hover:text-gray-700" href="https://www.ruff-manage.com/">
                <span class="sr-only"> Home </span>
        
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                </a>
            </li>
        
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </li>
        
            <li>
                <a class="block transition-colors hover:text-gray-700" href="#"> Divisions </a>
            </li>
        
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </li>
        
            <li>
                <a class="block transition-colors hover:text-gray-700" href="https://www.ruff-manage.com/divisions/index.html?p=data"> Data </a>
            </li>
            </ol>
        </nav>
        <hr />
        <h1 class="text-3xl font-bold text-center py-5">
            Ruff Data Management
        </h1>
        <div>
            <img class="relative mx-auto" src="https://blazed.sirv.com/ruff-manage.com/96463b1fe6ea07ad206fa9cf4c657e1a.jpg?h=120&w=120">
        </div>
        <p class="py-3 text-center">
            We manage data. This includes data security and governance.
        </p>
        <hr />
        <h3 class="text-xl p-1">
            GDPR Officer
        </h3>
        <p class="py-2 pl-3">
            <a href="https://tyler-ruff.com/" class="hover:underline">Tyler Ruff</a>
            <br />
            <a href="mailto:tyler.ruff@outlook.com" class="hover:underline">tyler.ruff@outlook.com</a>
        </p>
        <hr />
        <p class="py-2">
            Contact Phone: <a href="tel:+18338870061" class="hover:underline">+1(833)887-0061</a><br />
            Contact Form: <a href="https://blazed.company/contact" class="hover:underline">Click Here</a>
        </p>
        <hr />
        <p class="py-2">
            Privacy Policy: <a target="_blank" href="https://github.com/ruff-org/ruff-org/blob/main/policy/PRIVACY.md" class="hover:underline">Click Here</a><br />
            DMCA (Copyright) Policy: <a target="_blank" href="https://github.com/ruff-org/ruff-org/blob/main/policy/DMCA.md" class="hover:underline">Click Here</a>
        </p>
    </div>`;
}