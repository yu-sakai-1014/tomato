export const FooterNav = () => {
    const navList = [
        'HOME', 'SHOPPING', 'ABOUT', 'STRIES', 'Q&A', 'NEWS'
    ]
    const navList2 = [
        'ご利用案内', '直売所案内', 'お問い合わせ', 'プライパシー・ポリシー', '特定商取引に基づく表記'
    ]
    return(
        <div style={{background:'#9eb091'}} className="w-screen flex justify-center py-20">
            <div className="xs:flex xs:justify-center xs:space-x-6 sm:space-x-0 xs:px-16 sm:block max-w-5xl sm:space-y-10 text-white text-sm w-full">
                <div className="sm:flex xs:space-y-3 sm:space-y-0 sm:space-x-10">
                    {navList.map((nav) => {
                        return(
                            <div>{nav}</div>
                        )
                    })}
                </div>
                <div className="xs:border-0 sm:border border-gray-200"></div>
                <div className="sm:flex xs:space-y-3 sm:space-y-0 sm:space-x-10">
                    {navList2.map((nav) => {
                        return(
                            <div>{nav}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
