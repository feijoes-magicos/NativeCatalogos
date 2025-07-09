import { CategoryChangeHandler, Props } from './types';
import {
  Button,
  HeaderDisplay,
  HeaderContainer,
  CategoryBox,
  FunctionButton,
} from './Header.styles';

import whiteArrow from '@assets/whiteArrow.png';
import backwardButton from '@assets/backwards.png';
import { Image, Text } from 'react-native';

const handleCategoryChangeByVector = (params: CategoryChangeHandler) => {
  if (
    params.currentCategoryIndex === params.categories.length - 1 &&
    params.vector === 'right'
  ) {
    params.setCursor(0);
    return;
  }
  if (params.currentCategoryIndex === 0 && params.vector === 'left') {
    for (const [index, product] of params.products.entries()) {
      if (
        product.categories == params.categories[params.categories.length - 1]
      ) {
        params.setCursor(index);
        return;
      }
    }
  }
  const changeToIndex =
    params.vector === 'left'
      ? params.currentCategoryIndex - 1
      : params.currentCategoryIndex + 1;
  for (const [index, product] of params.products.entries()) {
    if (product.categories == params.categories[changeToIndex]) {
      params.setCursor(index);
      break;
    }
  }
};

const Header = (props: Props) => {
  const { currentCategory, products, categories } = props;
  const currentCategoryIndex = categories.indexOf(currentCategory);
  return (
    <HeaderDisplay>
      <HeaderContainer>
        <Button>
          <Image
            source={backwardButton}
            style={{ aspectRatio: 1, height: '50%' }}
          />
        </Button>
        <Button
          $side="left"
          onTouchEnd={() => {
            handleCategoryChangeByVector({
              ...props,
              vector: 'left',
              currentCategoryIndex,
            });
          }}
        >
          <Image
            source={whiteArrow}
            style={{ aspectRatio: 1, height: '50%' }}
          />
        </Button>
        <CategoryBox>
          <Text style={{ color: '#809caa', fontWeight: 'bold' }}>
            {products ? currentCategory : '...'}
          </Text>
        </CategoryBox>
        <Button
          onTouchEnd={() => {
            handleCategoryChangeByVector({
              ...props,
              vector: 'right',
              currentCategoryIndex,
            });
          }}
        >
          <Image
            source={whiteArrow}
            style={{ aspectRatio: 1, height: '50%' }}
          />
        </Button>
        <FunctionButton>
          <Text>F</Text>
        </FunctionButton>
      </HeaderContainer>
    </HeaderDisplay>
  );
};

export default Header;
