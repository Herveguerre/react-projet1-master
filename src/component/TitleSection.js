

export default function TitleSection({title,subtitle,description}) {
    return (
        <div className="text-center" >
            <p className="upercase text-purple-500 text-sm pt-10" >{title}</p>
            <p className="font-bold text-3xl pb-2" >{subtitle}</p>
            <p className="font-light pb-10" >{description}</p>
        </div>
    );
}
