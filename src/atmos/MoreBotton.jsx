export const MoreBotton =  (props) => {
    const { children } = props;
    return(
        <div className="flex justify-end">
            <p className="border-b border-gray-800 text-xs pb-2 pt-7">{ children }→</p>
        </div>
    )
}