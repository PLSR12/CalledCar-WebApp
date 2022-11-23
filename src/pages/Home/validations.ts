import * as yup from 'yup'

export const TripSchema = yup.object().shape({
  startRoute: yup.string().required('O campo "De Onde:" é obrigatório'),
  endRoute: yup.string().required('O campo "Para Onde:" é obrigatório'),
  dateRoute: yup.string().required('O campo "Data" é obrigatório'),
})
