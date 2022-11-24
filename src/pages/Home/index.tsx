import { yupResolver } from '@hookform/resolvers/yup'
import { TextAboutUs } from 'common/resources/home'
import * as Atoms from 'components/Atoms'
import * as Molecules from 'components/Molecules'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as S from './styles'
import { TripSchema } from './validations'

export function Home() {
  const [userLocationCoord, setUserLocationCoord] = useState<any>([])

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(TripSchema),
  })

  function getUserLocationCoord() {
    navigator.geolocation.getCurrentPosition((location) => {
      setUserLocationCoord(location.coords)
    })
  }

  function getDateToday() {
    const data = new Date()
    const dataFormatted =
      data.getFullYear().toString() +
      '-' +
      (data.getMonth() + 1).toString() +
      '-' +
      data.getDate().toString()
    setValue('dateRoute', dataFormatted)
  }

  function onSubmitTrip() {
    const dateTrip = getValues('dateRoute')
    const startTrip = getValues('startRoute')
    const endTrip = getValues('endRoute')
    window.location.href = `https://api.whatsapp.com/send?phone=5521985736963&text=Ol%C3%A1,%20vi%20seu%20site%20e%20gostaria%20de%20uma%20viagem.%20No%20dia%20${dateTrip},%20partindo%20de(o)%20${startTrip}%20para%20o%20destino%20${endTrip}.`
  }

  function getAddressUser() {
    const url: string = `https://nominatim.openstreetmap.org/reverse.php?lat=${userLocationCoord?.latitude}&lon=${userLocationCoord?.longitude}&zoom=16&format=jsonv2`
    try {
      fetch(url)
        .then((response: any) => {
          response.json().then((data: any) => {
            reset({
              startRoute:
                data.address?.road + ' - ' + data.address?.suburb + ' - ' + data.address?.city,
            })
          })
        })
        .catch(() => {})
    } catch (error) {}
  }

  useEffect(() => {
    getUserLocationCoord()
    getDateToday()
  }, [])

  useEffect(() => {
    if (userLocationCoord?.length !== 0) {
      getAddressUser()
    }
  }, [userLocationCoord])

  return (
    <>
      <S.Container>
        <Molecules.Header />
        <Molecules.Banner />
        <S.AboutUs className="about-us">
          <S.Title>Sobre Nós</S.Title>
          <p>{TextAboutUs}</p>
        </S.AboutUs>
        <Molecules.Apresentation />
        <S.MakeTrip className="make-trip">
          <S.Title>Solicite sua Viagem</S.Title>
          <form onSubmit={handleSubmit(onSubmitTrip)}>
            <Atoms.InputDate
              label="Data da Viagem:"
              {...register('dateRoute')}
              error={errors.dateRoute}
            />
            <Atoms.Input
              type="text"
              label="De Onde:"
              placeholder="De onde você está partindo?"
              {...register('startRoute')}
              error={errors.startRoute}
            />
            <Atoms.Input
              type="text"
              label="Para Onde:"
              placeholder="Para onde você quer ir hoje?"
              {...register('endRoute')}
              error={errors.endRoute}
            />
            <Atoms.Button type="submit" style={{ marginTop: '35px' }}>
              Solicitar
            </Atoms.Button>
          </form>
        </S.MakeTrip>
        <Molecules.Footer />
      </S.Container>
    </>
  )
}
