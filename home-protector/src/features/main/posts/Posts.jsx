import { fetchPosts } from "../../../api/post/post";
import * as S from "./style";
import { useQuery } from "react-query";

const Posts = () => {
	const query = useQuery("posts", fetchPosts);
	console.log(query);

	return (
		<div>
			<S.MainUl>
				{!query.isLoading &&
					query.data.map((post) => (
						<S.MainLi key={post.id}>
							<S.MainLink>
								<S.MainLiImg src={post.imageUrl} alt="thumbnail" />
								<S.MainTextSpan fontSize="17">{post.title}</S.MainTextSpan>
								<S.MainTextSpan fontSize="11">{post.user_id}</S.MainTextSpan>
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
