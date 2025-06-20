'use client'

import dynamic from 'next/dynamic'

// Dynamically import your client component with no SSR
const SuncResult = dynamic(
  () => {
    console.log('SuncResult loaded')
    return import('./SuncResult')
  },
  { ssr: false }
)

export default function SuncResultClient() {
    console.log("attempting to load SuncResultClient")
  return <SuncResult />
}
