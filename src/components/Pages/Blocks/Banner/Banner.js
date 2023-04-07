import imageHills from '../../../../assets/images/hills.jpg';

const Banner = () => {
    return(
        <aside>
            <img src={imageHills} alt={'Hills'} className={'w-screen'} />
        </aside>
    )
}

export default Banner;
