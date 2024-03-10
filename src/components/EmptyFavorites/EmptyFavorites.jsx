import imgFavorite from '../../img/qm.png';
import {
  EmptyFavoriteListImg,
  EmptyFavoriteListTitle,
  WrapperEmptyFavoriteList,
} from './EmptyFavorites.styled';

export default function EmptyFavoritesList() {
  return (
    <WrapperEmptyFavoriteList>
      <EmptyFavoriteListImg src={imgFavorite} alt="car" width={400} />
      <EmptyFavoriteListTitle>Сhoose your teacher</EmptyFavoriteListTitle>
    </WrapperEmptyFavoriteList>
  );
}
