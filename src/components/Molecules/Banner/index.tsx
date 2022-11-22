import calledCar from 'common/assets/banner.jpg'
import { Container } from './styles'

export function Banner() {
  return (
    <Container>
      <div style={{ backgroundImage: `url(${calledCar})` }}></div>
    </Container>
  )
}
