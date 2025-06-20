'use client'

import React, { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

type Props = {
  children: React.ReactNode
}

export default function LuauCodeBlock({ children }: Props) {
  const [highlightedCode, setHighlightedCode] = useState('')

  const codeString =
    typeof children === 'string'
      ? children.trim()
      : Array.isArray(children)
        ? children.join('').trim()
        : ''

  useEffect(() => {
    const highlightCode = async () => {
      const html = await codeToHtml(codeString, {
        lang: 'luau',
        theme: 'github-dark'
      })
      setHighlightedCode(html)
    }
    
    if (codeString) {
      highlightCode()
    }
  }, [codeString])

  return (
    <div 
      className="rounded-md overflow-auto text-sm"
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  )
}
