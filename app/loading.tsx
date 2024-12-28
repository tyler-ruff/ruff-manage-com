export default function Loading(){
    return (
        <div className="py-20">
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse bg-emerald-600"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-emerald-600"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-emerald-600"></div>
            </div>
        </div>
    )
}