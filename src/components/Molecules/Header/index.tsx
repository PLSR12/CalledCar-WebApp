import { useState } from 'react'
import { Link } from 'react-router-dom'

import { FiMenu } from 'react-icons/fi'

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
            <a>Sobre Nós</a>
            <a>Peça um Carro</a>
          </S.Nav>
        </S.ContainerLeft>
        <S.ContainerRight></S.ContainerRight>
        <S.MenuHamburguer>
          <FiMenu onClick={() => setShowNav(!showNav)} />
          {showNav && (
            <nav className={`navHamburguer ${showNav ? 'navTrue' : 'navFalse'}`}>
              <li>
                <Link to="/" style={{ textDecoration: 'none' }} onClick={() => setShowNav(false)}>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/" style={{ textDecoration: 'none' }} onClick={() => setShowNav(false)}>
                  Peça um Carro
                </Link>
              </li>
            </nav>
          )}
        </S.MenuHamburguer>
      </S.MainContainer>
    </>
  )
}
