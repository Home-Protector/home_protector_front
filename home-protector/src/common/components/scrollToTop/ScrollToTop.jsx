import * as S from "./style";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	// 스크롤 이벤트를 감지하는 함수
	const handleScroll = () => {
		if (window.scrollY > 100) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		// 윈도우에 스크롤이 발생하면 핸들스크롤 함수 실행
		window.addEventListener("scroll", handleScroll);
		return () => {
			//
			window.removeEventListener("scroll", handleScroll);
		};
	});

	// top 0으로 이동
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<aside>
			<S.ScrollToTop onClick={scrollToTop} visible={isVisible.toString()}>
				▲
			</S.ScrollToTop>
		</aside>
	);
};

export default ScrollToTop;
