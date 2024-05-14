import React from 'react'
import { Switch } from '@/components/ui/switch'
import { useMutation } from '@tanstack/react-query'
import query from '@/services'

type Status = 'active' | 'not active'

interface State {
  checked: boolean
  status: Status
}

type Action = { type: 'changed_status', payload: Status }

interface ToggleStatusProps {
  value: Status
  id: number
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'changed_status':
      return {
        checked: !state.checked,
        status: action.payload
      }
    default:
      throw Error(`Unkown action ${ action.type }`)
  }
}

const ToggleStatus = ({ value, id }: ToggleStatusProps) => {
  const checked = value === 'active' ? true : false
  const [state, dispatch] = React.useReducer(reducer, {
    status: value,
    checked
  })

  const { mutate } = useMutation({
    mutationFn: query.update
  })

  function handleChecked() {
    const status = state.status === 'active' ? 'not active' : 'active'
    dispatch({
        type: 'changed_status',
        payload: status
      })
    mutate({
      id,
      data: { status }
    })
  }

  return <Switch
    onCheckedChange={handleChecked}
    checked={state.checked}
  />
}

export default ToggleStatus
