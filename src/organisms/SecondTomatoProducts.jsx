import { SecondMoreBotton } from "../atmos/SecondMoreBotton"

export const SecondTomatoProducts = () => {
    const tomatoItemPickUp = [
        {img:'img/Rectangle_14_2048x2048.png', message:'圧倒的な甘みと旨味', title:'フルーツトマトジュース'},
        {img:'img/Rectangle_14_db25eec8-7af2-439f-abc1-c91e6da83130_2048x2048.png', message:'目指したのは、主役級トマトソース', title:'ケチャップソース'},
        {img:'img/Rectangle_14_4d860c34-850f-4c45-9167-906806f2e134_2048x2048.png', message:'ギフトとしても最適なセット', title:'セット商品'},
        {img:'img/Rectangle_14_fc62b824-9e8b-4188-aef4-57360402a8ea_2048x2048.png', message:'雪解けの季節のみの、春限定商品', title:'春限定　越冬野菜'}
    ]
    return(
        <div className="flex justify-center bg-white pt-20 pb-20">
            <div className="max-w-7xl grid sm:grid-cols-1 md:grid-cols-2">
                {tomatoItemPickUp.map((tomato) => {
                    return(
                        <div>
                            <img src={tomato.img} className="max-w-lg"/>
                            <div className="relative bottom-36 left-4 -mb-28">                                    
                                <div className="text-white font-serif mb-2 text-xs">{tomato.message}</div>
                                <div className="text-white font-serif mb-2 tracking-widest">{tomato.title}</div>
                                <SecondMoreBotton>詳しく見る</SecondMoreBotton>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}