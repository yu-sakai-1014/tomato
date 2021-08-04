import { SecondMoreBotton } from "../atmos/SecondMoreBotton"

export const TomatoJuice = () => {
    return(
        <div className="w-screen">
        <div className="flex justify-between bg-white px-64 pt-36 pb-36">
            <div style={{width: '580px', height: '730px', background: '#F2F0EC'}} className="absolute pb-28">
                <div className="text-gray-500 text-xs w-40 transform -rotate-90 relative -left-14 top-28">2021 NEW PRODUCT</div>
            </div>
            <div className="relative -top-20 left-10 flex flex-col items-center">
                <img src="img/wine_bottle.png" width="500" className="mb-6"/>
                <img src="img/tomatojuice_name.svg" width="170" className="mb-2"/>
                <p className="font-serif mb-2 tracking-widest">フルーツトマトジュース</p>
                <p className="text-sm text-gray-500">¥4968 / 税込</p>
            </div>
            <div className="z-10">
                <div className="">
                    <p className="text-6xl font-serif tracking-wide relative top-16 -left-56 leading-tight">Etto tomato
                    <br/>Fruits tomato
                    <br/>Juice</p>
                </div>
                <div className="text-sm mt-56 leading-loose mb-6">「越冬トマト」100%の美味しさを堪能できる、食べる系トマ<br/>
                    トジュースです。1本あたりに換算して約20個文のトマトを<br/>
                    使用したリッチ感。塩・添加物・保存料は使わず、素材を蒸気<br/>
                    釜で加熱後裏漉ししただけの、トロリと濃厚な味に仕上げました。<br/>
                </div>
                <SecondMoreBotton>商品詳細を見る</SecondMoreBotton>
            </div>
        </div>
        </div>
    )
}