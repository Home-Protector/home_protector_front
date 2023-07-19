import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./style";

const ImgSlider = () => {
	const settings = {
		dots: true,
		fade: true,
		dotsClass: "slick-dots slick-thumb",
		infinite: true,
		speed: 500,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const imagesContext = require.context("../../../img/temp", false, /\.(png|jpe?g|gif|svg)$/);
	const images = imagesContext.keys().map(imagesContext);
	return (
		<S.SliderWrapper>
			<Slider {...settings}>
				{images.map((imageUrl, index) => (
					<S.ImageWrapper key={index}>
						<img src={imageUrl} alt="content-images" />
					</S.ImageWrapper>
				))}
			</Slider>
		</S.SliderWrapper>
	);
};

export default ImgSlider;
