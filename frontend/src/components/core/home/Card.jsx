import { Link } from "react-router-dom";

export default function Card({img, title, description, cta}) {
    return (
        <div className="rounded-md shadow-xs shadow-primary w-56">
            <div className="space-y-4">
                <img className="h-60 w-56 rounded-md" src={img} alt="img" />
               
                <div className="px-4 space-y-4">
                    <div className="flex gap-1 flex-col">
                        <h2 className="text-[16px] font-semibold text-primary">{title}</h2>
                        <p className="text-sm text-primary">{description.substring(0, 40)}.</p>
                    </div>

                    <button className="bg-primary/10 text-center w-full mb-4 px-1 py-2 rounded-md font-bold">
                        <Link to="/products">
                            {cta}
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}