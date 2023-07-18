import * as S from "./style.js";
import { useState} from "react";
import { useLocation } from "react-router-dom";

const Sidebar = (commentRef) => {
	const [liked, setLiked] = useState(false);

	const handleClick = () => {
		setLiked(!liked);
	};
	
	const location = useLocation();

	const handleCopyClipBoard = async (text) => {
		try {
			await navigator.clipboard.writeText(text);
			alert("클립보드에 링크가 복사되었어요.");
		} catch (err) {
			console.log(err);
		}
	};

// const navigate = useNavigate();
// const handleGoBack = () => {
// navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
// };
// };

	// 댓글 위치로 이동
	const handleClickCommentBtn = (scrollToId) => {
		const element = document.getElementById(scrollToId);
		if (element) {
			window.scrollTo({
				top: element.offsetTop,
				behavior: 'smooth',
			});
		}
	};

	return (
		<S.Aside>
			<S.AsideBtn onClick={handleClick} liked={liked}>🤍</S.AsideBtn>
			<S.AsideBtn onClick={() => handleClickCommentBtn("commentId")}>💬</S.AsideBtn>
			<S.AsideBtn onClick={() => handleCopyClipBoard(`http://localhost:3000${location.pathname}`)}>📎</S.AsideBtn>
		</S.Aside>
	);
};
export default Sidebar;
