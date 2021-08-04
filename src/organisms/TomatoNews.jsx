import { MoreBotton } from "../atmos/MoreBotton"

export const TomatoNews = () => {
    const newsList = [
        {date: '2021/07/05', title: '当園の越冬トマト・闇落ちトマトの販売について'},
        {date: '2021/04/29', title: '春の期間限定商品「越冬フルーツトマト」の予約販売を開始しました'},
        {date: '2021/03/17', title: '曽我農園の公式オンラインショップがリニューアルオープンしました'}
    ]

    return(
        <div style={{height: '600px'}} className="flex justify-center items-center bg-gray-100">
            <div className="flex">
                <div className="flex flex-col justify-start font-serif pr-20">
                    <p className="tracking-wider">最新のお知らせ</p>
                    <p className="tracking-widest text-4xl pl-2">RECENT NEWS</p>
                </div>
                <div>
                <div className="border-b border-gray-300" style={{width: '700px'}}>
                    {newsList.map((news) => {
                        return(
                            <div className="flex border-t border-gray-300 py-7 text-sm">
                                <div className="text-gray-400 text-sm mr-6">{news.date}</div>
                                <div className="font-serif">{news.title}</div>
                            </div>
                        )
                    })}
                </div>
                    <MoreBotton>一覧を表示</MoreBotton>
                </div>
            </div>
        </div>
    )
}