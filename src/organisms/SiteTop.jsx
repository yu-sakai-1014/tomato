export const SiteTop = () => {
    return(
        <div>
            <div style={{backgroundImage: 'url(img/main_bg.jpg)'}} className="h-screen w-screen bg-cover absolute"></div>
            <div className="w-screen h-screen relative flex flex-col items-center justify-end pb-32">
                <div className="xs:text-xs sm:text-sm md:text-md  text-white font-serif mb-10 tracking-widest font-extralight">SOGA FARM SPECIALITY</div>
                <div className="flex mb-10 space-x-4">
                    <img style={{width:'8vw'}} src="img/animation_logo__01.svg"/>
                    <img style={{width:'7vw'}} src="img/animation_logo__02.svg"/>
                    <img style={{width:'7vw'}} src="img/animation_logo__03_2.svg"/>
                    <img style={{width:'6vw'}} src="img/animation_logo__04_2.svg"/>
                    <img style={{width:'7vw'}} src="img/animation_logo__03_2.svg"/>
                </div>
                <div className="xs:text-xs sm:text-sm md:text-md lg:text-lg text-white font-serif tracking-widest font-extralight">トマトの甘みは冬が育てた</div>
            </div>
        </div>
    )
}