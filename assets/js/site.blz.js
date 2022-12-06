const siteConfig = {
    siteTitle: "Ruff Management",
    website: 'www.ruff-manage.com', 
    icon: 'https://blazed.sirv.com/ruff-manage.com/ruff-lion.png', 
    twitter: 'RuffManage',
    fbAppId: '503698127531557',
    theme: 'ffffff',
    company: 'Ruff Management Inc.',
    motto: 'We turn Dreams into Reality.',
    nav: [{
        text: "Home",
        url: "https://www.ruff-manage.com/"
    },
    {
        text: "About",
        url: "https://www.ruff-manage.com/about.html"
    },
    {
        text: "Investors",
        url: "https://ir.ruff-manage.com/"
    }, 
    {
        text: "Companies",
        url: "https://www.ruff-manage.com/companies.html"
    }, 
    {
        text: "Contact",
        url: "https://www.ruff-manage.com/contact.html"
    }],
    footer: [{
        text: "Home",
        url: "https://www.ruff-manage.com/"
    },
    {
        text: "About",
        url: "https://www.ruff-manage.com/about.html"
    },
    {
        text: "Investors",
        url: "https://ir.ruff-manage.com/"
    }, 
    {
        text: "Companies",
        url: "https://www.ruff-manage.com/companies.html"
    }, 
    {
        text: "Contact",
        url: "https://www.ruff-manage.com/contact.html"
    }]
};

function show_burger(event){
    document.getElementById('header-mobile').classList.remove('hidden');
}

function hide_burger(event){
    document.getElementById('header-mobile').classList.add('hidden');
}

/*
function toggleBurger(){
    if(document.getElementById('').classList.contains('hidden')){
        document.getElementById('off-canvas-menu').classList.remove('hidden');
    } else {
        document.getElementById('off-canvas-menu').classList.add('hidden');
    }
}
*/

function build_menu(config, page){
    const header = f('header');
    header.classList.add('w-full', 'border-b');
    header.id = "Top";
    const innerWrapper = f('div');
    innerWrapper.classList.add('py-5', 'md:py-0', 'container', 'mx-auto', 'px-6', 'flex', 'items-center', 'justify-between');
    const logoLink = f('a');
    logoLink.title = config.siteTitle;
    logoLink.href = 'https://' + config.website;
    const logo = f('img');
    logo.src = config.icon + "?w=60&h=60";
    logo.width = "60";
    logo.height = "60";
    logo.classList.add('w-12', 'md:w-auto', 'hover:opacity-75');
    logoLink.appendChild(logo);
    innerWrapper.appendChild(logoLink);
    const menuWrapper = f('div');
    const burgerButton = f('button');
    burgerButton.classList.add('sm:block', 'md:hidden', 'text-gray-500', 'hover:text-gray-700', 'focus:text-gray-700', 'focus:outline-none', 'focus:ring-2', 'focus:ring-gray-500');
    burgerButton.innerHTML = `<svg aria-haspopup="true" aria-label="open Main Menu" xmlns="http://www.w3.org/2000/svg" class="md:hidden icon icon-tabler icon-tabler-menu" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round">
        <path stroke="none" d="M0 0h24v24H0z"></path>
        <line x1="4" y1="8" x2="20" y2="8"></line>
        <line x1="4" y1="16" x2="20" y2="16"></line>
    </svg>`;
    burgerButton.addEventListener('mouseup', hide_burger)
    const menu = f('nav');
    menu.classList.add('hidden', 'md:block');
    const menuList = f('ul');
    menuList.classList.add('flex', 'text-3xl', 'md:text-base', 'items-center', 'py-10', 'md:flex', 'flex-col', 'md:flex-row', 'justify-center', 'fixed', 'md:relative', 'top-0', 'bottom-0', 'left-0', 'right-0', 'bg-white', 'md:bg-transparent', 'z-20');
    for(let i = 0; i < config.menu.length; i++){
        const listElement = f('li');
        listElement.classList.add('text-gray-700', 'hover:text-blue-700', 'cursor-pointer', 'text-base', 'lg:text-lg', 'pt-10', 'md:pt-0', 'md:ml-5', 'lg:ml-10')
        const menuItem = f('a');
        if(i === page){
            menuItem.classList.add('underline');
        }
        menuItem.href = config.menu[i].url;
        menuItem.innerHTML = config.menu[i].text;
        listElement.appendChild(menuItem);
        menuList.appendChild(listElement);
    }
    menu.appendChild(menuList);
    menuWrapper.appendChild(menu);
    innerWrapper.appendChild(menuWrapper);
    const closeButtonWrapper = f('div');
    closeButtonWrapper.classList.add('block', 'md:hidden');
    const closeButton = f('button');
    closeButton.classList.add('p-2', 'text-white', 'transition', 'bg-gray-800', 'rounded', 'hover:text-white/75');
    closeButton.addEventListener('mouseup', show_burger);
    closeButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    `;
    closeButtonWrapper.appendChild(closeButton);
    innerWrapper.appendChild(closeButtonWrapper);
    header.appendChild(innerWrapper);
    return header;
}

function build_mobile_menu(config, page){
    const section = f('section');
    section.classList.add('md:hidden');
    const menuWrapper = f('div');
    menuWrapper.classList.add('hidden', 'fixed', 'inset-y-0', 'right-0', 'z-50', 'flex');
    menuWrapper.id = "header-mobile";
    const innerWrapper = f('div');
    innerWrapper.classList.add('w-screen');
    const innerWrapperColor = f('div');
    innerWrapperColor.classList.add('flex', 'flex-col', 'h-full', 'divide-y', 'divide-gray-200', 'bg-gray-50');
    const inmostWrapper = f('div');
    const header = f('header');
    header.classList.add('flex', 'items-center', 'justify-between', 'h-16', 'pl-6');
    const menuLabel = f('span');
    menuLabel.classList.add('text-sm', 'font-medium', 'tracking-widest', 'uppercase');
    menuLabel.innerHTML = 'Menu';
    const burgerButton = f('button');
    burgerButton.classList.add('w-16', 'h-16', 'border-l', 'border-gray-200')
    burgerButton.type = "button";
    burgerButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
    `;
    burgerButton.addEventListener('mouseup', hide_burger);

    
    header.appendChild(menuLabel);
    header.appendChild(burgerButton);
    inmostWrapper.appendChild(header);
    innerWrapperColor.appendChild(inmostWrapper);
    innerWrapper.appendChild(innerWrapperColor);
    menuWrapper.appendChild(innerWrapper);

    const nav = f('nav');
    nav.classList.add('flex', 'flex-col', 'text-sm', 'font-medium', 'text-gray-500', 'border-t', 'border-b', 'border-gray-200', 'divide-y', 'divide-gray-200');

    for(let i = 0; i < config.menu.length; i++){
        const menuItem = f('a');
        menuItem.href = config.menu[i].url;
        menuItem.innerHTML = config.menu[i].text;
        menuItem.classList.add('px-6', 'py-3', 'hover:bg-gray-200');
        if(page === i){
            menuItem.classList.remove('hover:bg-gray-200')
            menuItem.classList.add('bg-gray-100', 'hover:bg-gray-100');
        }
        nav.appendChild(menuItem);
    }
    inmostWrapper.appendChild(nav);

    section.appendChild(menuWrapper);
    return section;
}

function build_header(config, page){
    const blz_header = f('blz-header');
    const mobile_menu = build_mobile_menu(config, page);
    const menu = build_menu(config, page);
    blz_header.appendChild(mobile_menu);
    blz_header.appendChild(menu);
    document.body.appendChild(blz_header);
}

function build_content(config, content){
    const main = f('main');
    const article = f('article');
    article.classList.add('bg-gray-50');
    article.innerHTML = content;
    main.appendChild(article);
    document.body.appendChild(main);
}

function build_footer(config){
    const blz_footer = f('blz-footer');
    const footer = f('footer');
    footer.classList.add('bg-gray-900');
    const innerWrapper = f('div');
    innerWrapper.classList.add('relative', 'max-w-screen-xl', 'px-4', 'py-16', 'mx-auto', 'sm:px-6', 'lg:px-8', 'lg:pt-24');
    const toTopWrapper = f('div');
    toTopWrapper.classList.add('absolute', 'top-4', 'sm:top-6', 'lg:top-8', 'right-4', 'sm:right-6', 'lg:right-8');
    const toTopLink = f('a');
    toTopLink.classList.add('inline-block', 'p-2', 'text-teal-300', 'transition', 'bg-gray-700', 'rounded-full', 'sm:p-3', 'lg:p-4', 'hover:bg-gray-600');
    toTopLink.href = "#Top";
    toTopLink.innerHTML = `
        <span class="sr-only">Back to top</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"/>
        </svg>
    `;
    toTopWrapper.appendChild(toTopLink);
    innerWrapper.appendChild(toTopWrapper);

    const logoWrapper = f('div');
    logoWrapper.classList.add('lg:flex', 'lg:items-end', 'lg:justify-between');
    const logoInnerWrapper = f('div');
    const logoInnermostWrapper = f('div');
    logoInnermostWrapper.classList.add('flex', 'justify-center', 'text-teal-300', 'lg:justify-start'); 
    const logo = f('img');
    logo.src = config.icon + "?w=50&h=50";

    logoInnermostWrapper.appendChild(logo);
    logoInnerWrapper.appendChild(logoInnermostWrapper);
    logoWrapper.appendChild(logoInnerWrapper);
    innerWrapper.appendChild(logoWrapper);
    

    const motto = f('p');
    motto.classList.add('max-w-md', 'mx-auto', 'mt-6', 'leading-relaxed', 'text-center', 'text-gray-400', 'lg:text-left')
    logoInnerWrapper.appendChild(motto);

    const menu = f('nav');
    menu.classList.add('mt-12', 'lg:mt-0');
    
    const menuList = f('ul');
    menuList.classList.add('flex', 'flex-wrap', 'justify-center', 'gap-6', 'lg:justify-end', 'md:gap-8', 'lg:gap-12');

    for(let i = 0; i < config.footer.length; i++){
        const listItem = f('li');
        const linkItem = f('a');
        linkItem.classList.add('text-white', 'transition', 'hover:text-white/75');
        linkItem.href = config.footer[i].url;
        linkItem.innerHTML = config.footer[i].text;
        listItem.appendChild(linkItem);
        menuList.appendChild(listItem);
    }
    menu.appendChild(menuList);
    logoWrapper.appendChild(menu);
    const year = new Date().getFullYear();
    const copyright = f('p');
    copyright.classList.add('mt-12', 'text-sm', 'text-center', 'text-gray-400', 'lg:text-right');
    copyright.innerHTML = `Copyright &copy; ${year}, Ruff Management Inc. All rights reserved.`;
    logoInnerWrapper.appendChild(logoInnermostWrapper);
    logoInnerWrapper.appendChild(copyright);
    footer.appendChild(innerWrapper);
    blz_footer.appendChild(footer);
    document.body.appendChild(blz_footer);
}