import * as S from "./style";

const SortingOption = () => {
	return (
		<S.SortUi>
			<S.Sortli>
				<S.SortButton>인기순 ▽</S.SortButton>
			</S.Sortli>
			<S.Sortli>
				<S.SortButton>조회순 ▽</S.SortButton>
			</S.Sortli>
			<S.Sortli>
				<S.SortButton>최신순 ▽</S.SortButton>
			</S.Sortli>
		</S.SortUi>
	);
};

export default SortingOption;