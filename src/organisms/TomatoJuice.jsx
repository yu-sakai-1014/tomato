import { SecondMoreBotton } from "../atmos/SecondMoreBotton"

export const TomatoJuice = () => {
    return(
        <div className="xs:hidden lg:flex justify-center w-screen bg-white py-36">
            <div className="flex w-full"
                style={{maxWidth:'1200px'}}>
                <div style={{width: '650px', height: '850px', background: '#F2F0EC'}} className="absolute" >
                    <div className="tracking-wide text-gray-500 text-xs w-40 transform -rotate-90 z-10" style={{position:'relative',top:'80px',left:'-50px'}}>2021 NEW PRODUCT</div>
                </div>
                <div className="flex flex-col items-center">
                    <img src="img/wine_bottle.png" width="580" className="mb-6" style={{position:'relative', top:'-90px', left:'40px'}}/>
                    <div className="flex flex-col items-center" style={{position:'relative',top:'-100px',left:'40px' }}>
                        <img src="img/tomatojuice_name.svg" width="170" className="mb-2"/>
                        <p className="font-serif mb-2 tracking-widest">フルーツトマトジュース</p>
                        <p className="text-sm text-gray-500">¥4968 / 税込</p>
                    </div>
                </div>
                <div className="z-10">
                    <p className="text-7xl font-serif tracking-wide leading-tight whitespace-nowrap"
                        style={{position:'relative',top:'90px'}}>
                        Etto tomato<br/>
                        Fruits tomato<br/>
                        Juice
                    </p>
                    <div className="text-sm mt-56 leading-8 mb-6"
                        style={{position:'relative',left:'200px'}}>
                        「越冬トマト」100%の美味しさを堪能できる、食べる系トマ<br/>
                        トジュースです。1本あたりに換算して約20個文のトマトを<br/>
                        使用したリッチ感。塩・添加物・保存料は使わず、素材を蒸気<br/>
                        釜で加熱後裏漉ししただけの、トロリと濃厚な味に仕上げました。<br/>
                        <div className="mt-14">
                            <SecondMoreBotton>商品詳細を見る</SecondMoreBotton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}