export default function Footer() {
    const date  = new Date();

    return (
        <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8 mt-10 border-t border-gray-100">
            <div className="text-center text-sm">
                Copyright @ {date.getFullYear()}.
            </div>
        </div>
    )
}