import { AboutSogaFarm } from "../organisms/AboutSogaFarm"
import { AboutTomato } from "../organisms/AboutTomato"
import { BottomTemplate } from "../organisms/BottomTemplate"
import { HeaderTemplate } from "../organisms/HeaderTemplate"
import { MiddleTemplate } from "../organisms/MiddleTemplate"
import { SecondTomatoProducts } from "../organisms/SecondTomatoProducts"
import { SiteTop } from "../organisms/SiteTop"
import { TomatoDescription } from "../organisms/TomatoDescription"
import { TomatoJuice } from "../organisms/TomatoJuice"
import { TomatoNews } from "../organisms/TomatoNews"
import { TomatoPhoto } from "../organisms/TomatoPhoto"
import { TomatoProducts } from "../organisms/TomatoProducts"

export const Top = () => {
    return(
        <>
            <SiteTop/>
            <HeaderTemplate/>
            <MiddleTemplate/>
            <BottomTemplate/>
            <TomatoDescription/>
            <AboutSogaFarm/>
            <AboutTomato/>
            <TomatoPhoto/>
            <TomatoNews/>
            <TomatoJuice/>
            <TomatoProducts/> {/*レスポンシブ完了*/}
            <SecondTomatoProducts/>
        </>
    )
}