

export default function CategoryCard({img, title}) {
    return (
        <div className="bg-background/10 px-4 max-w-fit py-2 rounded-md shadow-sm shadow-primary/90 space-y-1 hover:cursor-pointer hover:scale-105 transition-all duration-200">
            <img className="h-48 w-48 bg-center rounded-md border-1 border-black" src={img} alt="img"/>
            <p className="text-[16px] text-primary pl-1">{title}</p>
        </div>
    )
}