import * as S from "./style.js";
import * as C from "../../../common/constants/styles.js";
import Sidebar from "../sidebar/Sidebar";
import { useQuery } from "react-query";
import { fetchPost } from "../../../api/post/post.js";
import { useParams } from "react-router-dom";

const Content = () => {
	const { postId } = useParams();
	const {
		data: post,
		isLoading,
		error,
		status,
	} = useQuery(["post", postId], () => fetchPost(postId), {
		refetchOnWindowFocus: true,
	});
	console.log(post, isLoading, status);

	if (isLoading) {
		return <div></div>;
	}
	if (error) {
		return <div>잠시 후 다시 시도해주세요. </div>;
	}

	const formattedCreatedAt = new Intl.DateTimeFormat("ko-KR", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	}).format(new Date(post.createdAt));

	return (
		<div>
			<S.ImgWrapper>
				<S.ContentImg src={post.images[0]} alt="postBanner" />
			</S.ImgWrapper>
			<C.Wrapper>
				<C.Span fontSize="21" fontWeight="700">
					{post.title}
				</C.Span>
				<S.SpanWrapper>
					<C.Span fontSize="14">
						{post.nickname} ㆍ {formattedCreatedAt}
					</C.Span>
					<C.Span fontSize="14">
						좋아요 {post.countLikes} ㆍ 조회 {post.viewCount}
					</C.Span>
				</S.SpanWrapper>
				<C.Span>{post.content}</C.Span>
				<Sidebar />
			</C.Wrapper>
		</div>
	);
};

export default Content;
