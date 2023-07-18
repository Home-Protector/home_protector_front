import { fetchPosts } from "../../../api/post/post";
import { getUsernameById } from "../../../api/user/user";
import * as S from "./style";
import { useQuery } from "react-query";

const Posts = () => {
	const { data: posts, isLoading, status } = useQuery("posts", fetchPosts);
	console.log(status, isLoading);
	const { data: userName } = useQuery("userName", () =>
		Promise.all(posts.map((post) => getUsernameById(post.user_id)))
	);
	console.log(userName);

	return (
		<div>
			<S.MainUl>
				{!isLoading &&
					posts.map((post) => (
						<S.MainLi key={post.id}>
							<S.MainLink to={`/detail/${post.id}`}>
								<S.ImgWrapper>
									<S.MainLiImg src={post.imageUrl} alt="thumbnail" />
								</S.ImgWrapper>
								<S.MainTextSpan fontSize="17">{post.title}</S.MainTextSpan>
								<S.MainTextSpan fontSize="11">11{post.user_id}</S.MainTextSpan>
								<S.MainTextSpan fontSize="10">
									좋아요 100ㆍ 조회 {post.view_count}
								</S.MainTextSpan>
							</S.MainLink>
						</S.MainLi>
					))}
			</S.MainUl>
		</div>
	);
};

export default Posts;
