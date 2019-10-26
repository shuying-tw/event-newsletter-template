import React from 'react'
import 'H1.css'

export const H1 = ({h1Style, children, ...props}) => <h1 style={h1Style} {...props}>{children}</h1>
