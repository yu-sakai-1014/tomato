import { AboutSogaFarm } from "../organisms/AboutSogaFarm"
import { AboutTomato } from "../organisms/AboutTomato"
import { BottomTemplate } from "../templates/BottomTemplate"
import { HeaderTemplate } from "../templates/HeaderTemplate"
import { MiddleTemplate } from "../templates/MiddleTemplate"
import { SecondTomatoProducts } from "../organisms/SecondTomatoProducts"
import { SiteTop } from "../organisms/SiteTop"
import { TomatoDescription } from "../organisms/TomatoDescription"
import { TomatoJuice } from "../organisms/TomatoJuice"
import { TomatoNews } from "../organisms/TomatoNews"
import { TomatoPhoto } from "../organisms/TomatoPhoto"
import { TomatoProducts } from "../organisms/TomatoProducts"
import { Stories } from "../organisms/Stories"
import { FooterNav } from "../organisms/FooterNav"
import { SiteBottom } from "../organisms/SiteBottom"
import { TomatoJuice2 } from "../organisms/TomatoJuice2"

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
            <TomatoJuice/>{/* 画面幅によって */}
            <TomatoJuice2/>{/* 出し分ける */}
            <TomatoProducts/>
            <SecondTomatoProducts/>
            <Stories/>
            <FooterNav/>
            <SiteBottom/>
        </>
    )
}