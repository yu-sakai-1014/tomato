import { useHistory } from "react-router-dom"

export const AboutTomato = () => {
    const history = useHistory();
    const toTomatoPage = () => {
        history.push('/tomato');
    }
    return(
        <div className="xs:pt-4 md:pt-0 flex xs:justify-center md:justify-end 3xl:justify-center bg-white w-screen">
            <div className="3xl:flex 3xl:justify-end 3xl:max-w-screen-3xl 3xl:w-full">
                <div className="flex flex-col xs:items-center md:items-start md:mr-40 3xl:mr-0">
                    <div className="xs:text-center md:text-left font-serif text-sm leading-7">
                        <br/>トマト産地で、どのトマトより甘く、しっかり旨みを蓄えた
                        <br/>いと、寒さ深まる冬においしさを増す「越冬トマト」を育
                        <br/>てています。
                    </div>
                    <button 
                        className="w-40 py-2 mt-4 font-extralight text-sm border-b border-black hover:bg-gray-200"
                        onClick={toTomatoPage}>越冬トマトについて　→</button>
                </div>
            </div>
        </div>
    )
}