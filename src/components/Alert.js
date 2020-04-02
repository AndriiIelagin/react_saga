import React from 'react'

const Alert = ({ text }) => {
  return (
    <div class="alert alert-warning" role="alert">
      {text}
    </div>
  )
}

export default Alert
