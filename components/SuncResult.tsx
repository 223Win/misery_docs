'use client'

import { useEffect, useRef } from 'react'

const LATEST_SUNC_TEST = "https://sunc.rubis.app/?scrap=oGmHh9bqwZHxgKfV&key=yegBmiKBdKV7sYSty0daGqlaWrXKNB9v"

/**
 * yeah you thought we were going to fake this lmfao
 */

export default function SuncSidebar() {
    return (
    <iframe
      src={LATEST_SUNC_TEST}
      title="sUNC Test Results"
      style={{
        width: '100%',
        height: '800px', // or adjust as needed
        border: 'none',
      }}
      allowFullScreen
    />
  )
}
