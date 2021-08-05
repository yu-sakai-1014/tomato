import { SecondMoreBotton } from "../atmos/SecondMoreBotton"

export const TomatoJuice2 = () => {
    return(
        <div className="xs:flex lg:hidden justify-center w-screen bg-white">
            <div className="py-36 flex flex-col items-center">
                <div style={{width: '400px', height: '600px', background: '#F2F0EC'}} className="min-w-0 w-full absolute"></div>
                <div className="tracking-wide text-gray-500 text-xs w-40 transform -rotate-90 z-10 relative right-44 top-16">2021 NEW PRODUCT</div>
                <img width="350" src="img/wine_bottle.png" className="relative bottom-14"/>
                <div className="flex flex-col items-center space-y-3 relative bottom-10">
                    <img width="140" src="img/tomatojuice_name.svg"/>
                    <div className="text-sm">フルーツトマトジュース</div>
                    <div className="text-sm text-gray-400">¥4,968 / 税込</div>
                </div>
                <p className="text-4xl font-serif tracking-wide leading-tight whitespace-nowrap relative right-20">
                    Etto tomato<br/>
                    Fruits tomato<br/>
                    Juice
                </p>
                <div className="text-sm leading-8 px-32 mt-10">
                    「越冬トマト」100%の美味しさを堪能できる、食べる系トマトジュースです。1本あたりに換算して約20個文のトマトを使用したリッチ感。塩・添加物・保存料は使わず、素材を蒸気釜で加熱後裏漉ししただけの、トロリと濃厚な味に仕上げました。
                </div>
                <div className="mt-10">
                    <SecondMoreBotton>商品詳細を見る</SecondMoreBotton>
                </div>
            </div>
        </div>
    )
}