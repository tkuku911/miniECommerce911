const CardInfo = (props) => {
    return(
        <div className={'flex flex-col'}>
            <h1 className={'text-center'}>{props.title}</h1>
            <p className={'text-center'}>{props.price} $</p>
        </div>
    )
}

export default CardInfo;
