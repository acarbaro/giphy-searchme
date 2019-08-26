import App from './App.view.js'
import { Flow } from '../useFlow.js'
import React from 'react'

export default function AppLogic(props) {
  return (
    <Flow>
      <App {...props} />
    </Flow>
  )
}