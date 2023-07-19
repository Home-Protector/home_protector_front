import { fetchPosts } from "../../../api/post/post";
import * as S from "./style";
import { useQuery } from "react-query";

const Posts = () => {
	const { data: posts, isLoading, error } = useQuery("posts", fetchPosts);

	if (isLoading) {
		return <div></div>;
	}
	if (error) {
		return <div>잠시 후 다시 시도해주세요. </div>;
	}
	return (
		<div>
			<S.MainUl>
				{!isLoading &&
					posts?.map((post) => (
						<S.MainLi key={post.id}>
							<S.MainLink to={`/detail/${post.id}`}>
								<S.ImgWrapper>
									<S.MainLiImg src={post.images[0]} alt="thumbnail" />
								</S.ImgWrapper>
								<S.MainTextSpan fontSize="17">{post.title}</S.MainTextSpan>
								<S.MainTextSpan fontSize="11">{post.nickname}</S.MainTextSpan>
								<S.MainTextSpan fontSize="10">
									좋아요 {post.countLikes}ㆍ 조회 {post.viewCount}
								</S.MainTextSpan>
							</S.MainLink>
						</S.MainLi>
					))}
			</S.MainUl>
		</div>
	);
};

export default Posts;
