import React from 'react'
import { useFormContext } from 'react-hook-form'

interface ConnectFormProps {
  children: (parametr: object) => React.ReactNode
}

const ConnectForm = ({ children }: ConnectFormProps) => {
  const methods = useFormContext()
  return children({ ...methods })
}

export default ConnectForm