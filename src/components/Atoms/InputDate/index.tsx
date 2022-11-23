import React from 'react'
import { Container } from './styles'

export const InputDate: React.FC<any> = React.forwardRef(
  ({ name, label, onClick, error, ...props }, ref) => {
    return (
      <Container>
        <label htmlFor={name}>{label}</label>
        <input
          type="date"
          ref={ref}
          name={name}
          onClick={(event: any) => {
            event.target.showPicker()
          }}
          {...props}
        />

        {!!error && <div>{error.message}</div>}
      </Container>
    )
  }
)

InputDate.displayName = 'InputDateComponent'
