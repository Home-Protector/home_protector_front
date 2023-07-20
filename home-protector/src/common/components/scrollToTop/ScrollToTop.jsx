import * as S from "./style";
import { useState, useEffect } from 'react';

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
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
	}});
	
	const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
	
	return (
		<aside>
			<S.ScrollToTop onClick={scrollToTop} visible={isVisible.toString()}>▲</S.ScrollToTop>
		</aside>
	);
};

export default ScrollToTop;