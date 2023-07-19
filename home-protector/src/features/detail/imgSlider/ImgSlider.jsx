import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./style";

const ImgSlider = ({ images }) => {
	const settings = {
		customPaging: function (i) {
			return (
				<S.PagingAnchor>
					<S.Paging src={images[i]} alt={`${i + 1}`} />
				</S.PagingAnchor>
			);
		},
		dots: true,
		dotsClass: "slick-dots slick-thumb",
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<S.SliderWrapper>
			<Slider {...settings}>
				{images.map((imageUrl, index) => (
					<S.ImageWrapper key={index}>
						<img src={imageUrl} alt={`${index + 1}`} />
					</S.ImageWrapper>
				))}
			</Slider>
		</S.SliderWrapper>
	);
};

export default ImgSlider;
