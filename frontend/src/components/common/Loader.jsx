
export default function Loader() {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="bg-primary/10 px-4 py-8 max-w-sm w-full rounded-md">
                <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
                </div>
            </div>
        </div>
    )
}