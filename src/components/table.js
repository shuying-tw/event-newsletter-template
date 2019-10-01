import React from 'react'

export const Table = ({tableStyle, children, ...props}) => <table style={tableStyle} {...props}>{children}</table>
