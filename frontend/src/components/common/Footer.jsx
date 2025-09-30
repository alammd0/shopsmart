import { Link } from "react-router-dom"
import { footerData } from "../../data/footer-data"
import { Instagram, Twitter, Facebook} from "lucide-react"

export default function Footer() {
    return (
        <div className="bg-secondary px-4 py-3 font-serif mt-20">
            <div className="max-w-10/12 mx-auto flex items-center justify-center flex-col gap-10 px-2 py-8">
                <div className="flex gap-30">
                    {
                        footerData.map((item) => (
                            <Link className="text-gray-700" to={item.url} key={item.id}>
                                {item.label}
                            </Link>
                        ))
                    }
                </div>
                <div className="flex gap-10 text-gray-700">
                    <Instagram />
                    <Twitter />
                    <Facebook />
                </div>
                <div className="text-gray-700">
                    {new Date().getFullYear()} © ShopSmart
                </div>
            </div>
        </div>
    )
}