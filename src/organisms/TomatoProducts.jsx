export const TomatoProducts = () => {
    const tomatoItem = [
        {img:'https://cdn.shopify.com/s/files/1/0532/0556/5605/products/12014f9683a775e7c31ace880272b23b_23cb3186-5540-4258-827d-71f0c81fcbfa_360x.jpg?v=1618074556', title: '越冬フルーツトマト', salesStatus: '売り切れ'},
        {img:'https://cdn.shopify.com/s/files/1/0532/0556/5605/products/12014f9683a775e7c31ace880272b23b_360x.jpg?v=1618792949', title: '【一番人気!】曽我農園 定番2種セット', salesStatus: '¥4,320 / 税込'},
        {img:'https://cdn.shopify.com/s/files/1/0532/0556/5605/products/12014f9683a775e7c31ace880272b23b_335bbf6e-ac65-4814-911a-c888f7ec78b9_360x.jpg?v=1618074448', title: '越冬フルーツトマトジュース720ml-2本', salesStatus: '¥8,600 / 税込'},
        {img:'https://cdn.shopify.com/s/files/1/0532/0556/5605/products/12014f9683a775e7c31ace880272b23b_f0798a60-a265-4170-ae90-3b45c4ade22d_360x.jpg?v=1618073888', title: '越冬フルーツトマトケチャップ-1本', salesStatus: '¥2,160 / 税込'},
        {img:'https://cdn.shopify.com/s/files/1/0532/0556/5605/products/12014f9683a775e7c31ace880272b23b_2bb693d0-736b-4c22-b06b-716588a79c2d_360x.jpg?v=1618074109', title: '越冬フルーツトマトジュース180ml 3本', salesStatus: '¥3.800 / 税込'}
    ]
    return(
        <div className="w-screen flex justify-center bg-white">
            <div className="grid xs:justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mb-32">
                <div className="pr-12 pl-4 pt-4 xs:px-16">
                    <div className="text-sm">定番商品</div>
                    <div className="text-3xl tracking-wider font-serif mt-4">LONG SELLER</div>
                    <div className="text-sm mt-5">雪国・新潟の気候風土によって恵まれた「越冬トマト」。この特別なフルーツトマトとともに、その甘みと旨みを凝縮させた、贅沢なトマトジュースとケチャップソースを販売しています。</div>
                </div>
                {tomatoItem.map((tomato) => {
                    return(
                        <div className="mt-5 max-w-3xl">
                            <img src={tomato.img} className=""/>
                            <div className="font-serif mt-2 flex justify-between">
                                {tomato.title}
                                <p>→</p>
                            </div>
                            <div className="text-sm text-gray-500">{tomato.salesStatus}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}