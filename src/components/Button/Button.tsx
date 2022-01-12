import { FC } from 'react'

interface Props {
  label: string
}

const Button: FC<Props> = ({ label }) => {
  return (
    <button className="font-bold text-gray-800" type="button">
      {label}
    </button>
  )
}

export default Button
