import imageHills from '../../../assets/images/hills.jpg';
import './Banner.scss';

const Banner = () => {
    return(
        <aside>
            <img src={imageHills} alt={'Hills'} />
        </aside>
    )
}

export default Banner;
