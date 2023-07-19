import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./style";

const ImgSlider = ({ images }) => {
	const settings = {
		dots: true,
		fade: true,
		dotsClass: "slick-dots slick-thumb",
		infinite: true,
		speed: 500,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoPlay: true,
		autoPlayPause: true,
		autoPlaySpeed: 500,
		autoPlayHover: true,
	};

	const imagesToShow = images.slice(1);

	return (
		<S.SliderWrapper>
			<Slider {...settings}>
				{imagesToShow.map((imageUrl, index) => (
					<S.ImageWrapper key={index}>
						<img src={imageUrl} alt="content-images" />
					</S.ImageWrapper>
				))}
			</Slider>
		</S.SliderWrapper>
	);
};

export default ImgSlider;
