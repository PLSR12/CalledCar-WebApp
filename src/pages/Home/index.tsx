import { TextAboutUs } from 'common/resources/home'
import * as Atoms from 'components/Atoms'
import * as Molecules from 'components/Molecules'
import * as S from './styles'

export function Home() {
  return (
    <>
      <S.Container>
        <Molecules.Header />
        <Molecules.Banner />
        <S.AboutUs>
          <h1>Sobre Nós</h1>
          <p>{TextAboutUs}</p>
        </S.AboutUs>
        <S.MakeTrip>
          <form>
            <div className="div-form">
              <Atoms.TitleBox> Peça um Carro </Atoms.TitleBox>
              <Atoms.Input type="text" label="De Onde:" placeholder="De onde você está partindo?" />
              <Atoms.Input
                type="text"
                label="Para Onde:"
                placeholder="Para onde você quer ir hoje?"
              />
              <Atoms.Button>Pedir</Atoms.Button>
            </div>
          </form>
        </S.MakeTrip>
      </S.Container>
    </>
  )
}
