import Header from "../common/components/header/Header";
import Footer from "../common/components/footer/Footer";
import ScrollToTop from "../common/components/scrollToTop/ScrollToTop";
import Posts from "../features/main/posts/Posts";
import SortingOption from "../features/main/sortingOption/SortingOption";
import * as C from "../common/constants/styles";
import {useEffect} from 'react'

const Main = () => {
	useEffect(()=>{
		const accessToken = document.cookie
      .split(";")
      .filter((cookies) => cookies.includes("accessToken"))[0]
      ?.split("=")[1];

			/* 
				> accessToken=Bearer adfadsfa12341324asdfasdfasdf1241adsf12edsfq123r23;refreshToken=adsfasdfasdfasdfa;
			 	> ["accessToken=Bearer adfadsfa12341324asdfasdfasdf1241adsf12edsfq123r23", "refreshToken=adsfasdfasdfasdfa"]
				> accessToken=Bearer adfadsfa12341324asdfasdfasdf1241adsf12edsfq123r23
				> Bearer adfadsfa12341324asdfasdfasdf1241adsf12edsfq123r23
			*/	

		console.log(accessToken);	
	}, [])
	return (
		<C.Container>
			<Header />
			<SortingOption />
			<Posts />
			<ScrollToTop />
			<Footer />
		</C.Container>
	);
};

export default Main;