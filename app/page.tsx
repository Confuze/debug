import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "bar",
  // The description from layout.tsx is still used
  openGraph: {
    title: "bar",
    // But the openGraph description isn't
  }
}


export default function Home() {
  return (
    <h1>index</h1>
  )
}
