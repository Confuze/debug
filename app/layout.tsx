import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "foo",
  description: "foobar",
  openGraph: {
    title: "foo",
    description: "foobar"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
