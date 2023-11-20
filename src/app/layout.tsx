import type { Metadata } from 'next'
import 'normalize.css'
import '@/app/globals.css'
import '@/app/styles/stars.scss'
import '@/app/styles/animate.css'

import 'bootstrap/dist/css/bootstrap.css'


export const metadata: Metadata = {
  title: 'JSH | Portfolio',
  description: 'Developer Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body id={"page-top"}>
        <div id={"root"}>{children}</div>
      </body>
    </html>
  )
}
