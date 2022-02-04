import { useTransform } from 'framer-motion';
import { ReactNode } from 'react';
import useWrapperScroll from '../Model/useWapperScroll';

import { Container, Header, Logo, Burger, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress} = useWrapperScroll();
  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{opacity}}>
        <ul>
          <li>
            <a href='#'>Candear solar roof</a>
          </li>
          <li>
            <a href='#'>Feito com ❤️ </a>
          </li>
          <li>
            <a href='#'>By Jeimisson B. </a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
