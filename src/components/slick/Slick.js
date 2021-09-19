import Slider from 'react-slick';

const Slick = ({ children, settings }) => (
    <Slider {...settings }>
        {children}
    </Slider>
);

export default Slick;
