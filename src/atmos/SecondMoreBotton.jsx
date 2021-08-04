export const SecondMoreBotton = (props) => {
    const { children } = props;
    return(
        <div className="text-xs bg-gray-100 py-4 px-4 w-36 flex justify-between">
            <div>{children}</div>
            <div>→</div>
        </div>
    )
}