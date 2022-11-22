import { TextAboutUs } from 'common/resources/home'
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
              <p>teste </p>
            </div>
          </form>
        </S.MakeTrip>
      </S.Container>
    </>
  )
}
