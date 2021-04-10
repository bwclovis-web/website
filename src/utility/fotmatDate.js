import React from 'react'

const formatDate = date => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const fullDatePosted = new Date(date)
  const mothPosted = monthNames[fullDatePosted.getMonth()]
  const dayPosted = fullDatePosted.getDate()
  const yearPosted = fullDatePosted.getFullYear()

  return (
    <div className="post-date">
      <span>{mothPosted}</span>
      <span className="h2">{dayPosted}</span>
      <span>{yearPosted}</span>
    </div>
  )
}

export default formatDate
