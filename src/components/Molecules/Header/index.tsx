import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Link as Linked } from 'react-scroll'
import * as S from './styles'

export function Header() {
  const [showNav, setShowNav] = useState(false)
  return (
    <>
      <S.MainContainer>
        <S.ContainerLeft>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1>MoveCar</h1>
          </Link>
          <S.Nav>
            <Linked to="about-us" spy={true} smooth={true} offset={-70} duration={500}>
              Sobre Nós
            </Linked>
            <Linked to="make-trip" spy={true} smooth={true} offset={-70} duration={500}>
              Faça sua viagem
            </Linked>
          </S.Nav>
        </S.ContainerLeft>
        <S.ContainerRight></S.ContainerRight>
        <S.MenuHamburguer>
          <FiMenu onClick={() => setShowNav(!showNav)} />
          {showNav && (
            <nav className={`navHamburguer ${showNav ? 'navTrue' : 'navFalse'}`}>
              <li>
                <Linked to="about-us" spy={true} smooth={true} offset={-70} duration={500}>
                  <Link to="/" style={{ textDecoration: 'none' }} onClick={() => setShowNav(false)}>
                    Sobre Nós
                  </Link>
                </Linked>
              </li>
              <li>
                <Linked to="make-trip" spy={true} smooth={true} offset={-70} duration={500}>
                  <Link to="/" style={{ textDecoration: 'none' }} onClick={() => setShowNav(false)}>
                    Faça sua viagem
                  </Link>
                </Linked>
              </li>
            </nav>
          )}
        </S.MenuHamburguer>
      </S.MainContainer>
    </>
  )
}
