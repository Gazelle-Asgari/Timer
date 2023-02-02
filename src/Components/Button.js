function Button({buttonName , onClick , className}) {
    return(
        <>
            <button className={className} onClick={onClick}>
                {buttonName}
            </button>
        </>
    )
}
export default Button