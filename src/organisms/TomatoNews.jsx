import { MoreBotton } from "../atmos/MoreBotton"

import { useHistory } from "react-router-dom"
import { HighlightSpanKind } from "typescript"

export const TomatoNews = () => {
    const newsList = [
        {date: '2021/07/05', title: '当園の越冬トマト・闇落ちトマトの販売について'},
        {date: '2021/04/29', title: '春の期間限定商品「越冬フルーツトマト」の予約販売を開始しました'},
        {date: '2021/03/17', title: '曽我農園の公式オンラインショップがリニューアルオープンしました'}
    ]

    const history = useHistory();

    const onClickNews = () => history.push('/news/index')
    return(
        <div className="flex justify-center bg-gray-100 pt-28 pb-20">
            <div className="xs:px-10 md:flex justify-center max-w-screen-lg w-full">
                <div className="flex flex-col font-serif">
                    <p className="tracking-wider">最新のお知らせ</p>
                    <p className="tracking-widest text-4xl pl-2 whitespace-nowrap">RECENT NEWS</p>
                </div>
                <div className="xs:mt-3 md:mt-0 md:ml-10 w-full">
                    <div className="border-b border-gray-300">
                        {newsList.map((news) => {
                            return(
                                <div className="flex border-t border-gray-300 py-7 text-sm">
                                    <div className="text-gray-400 text-sm mr-6">{news.date}</div>
                                    <button onClick={onClickNews} className="font-serif hover:bg-gray-300">{news.title}</button>
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