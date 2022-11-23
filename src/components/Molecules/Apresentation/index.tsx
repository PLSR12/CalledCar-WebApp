import { infoList } from './infoList'
import * as S from './styles'

export function Apresentation() {
  return (
    <S.Container>
      <section id="apresentacao" data-aos="fade-up" data-aos-duration="3000">
        <div className="informativo">
          {infoList.map(
            (info: { image: string; alt: string; title: string; text: string }, index) => {
              return (
                <div key={index} className="options">
                  <div>
                    <img src={info.image} alt={info.alt}></img>
                  </div>
                  <div>
                    <h1>{info.title}</h1>
                  </div>
                  <div>
                    <p>{info.text}</p>
                  </div>
                </div>
              )
            }
          )}
        </div>
      </section>
    </S.Container>
  )
}
