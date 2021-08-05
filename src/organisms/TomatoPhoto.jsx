export const TomatoPhoto = () => {
    return(
        <div className="xs:py-20 md:py-10 flex justify-center items-center w-screen bg-white">
            <div className="flex xs:flex-col-reverse md:flex-row xs:justify-center  md:justify-between items-center max-w-screen-lg w-full px-6">
                <img width="500" className="min-w-0 max-w-xl xs:px-20 md:px-0" src="img/home_about_02.jpg"/>
                <img width="300" className="xs:mb-10 md:mb-0" src="img/home_about_03.jpg"/>
            </div>
        </div>
    )
}