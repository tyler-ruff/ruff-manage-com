export default function ContactCTA(){
    return (
        <div className="py-6 bg-gray-200 text-gray-900 border-t border-b border-gray-600">
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                <h4 className="text-3xl font-semibold leading-tight text-center lg:text-left">
                    Ready to streamline your shipping and distribution?
                </h4>
                <a title="Contact us for a quote." href="/contact" className="px-8 py-3 text-lg font-semibold rounded bg-blue-600 hover:bg-blue-500 focus:ring ring-blue-300 text-gray-50">
                    Contact Us
                </a>
            </div>
        </div>
    );
}