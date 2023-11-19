import Image from 'next/image'
import '@/app/styles/stars.scss'

import Intro from '@/app/components/intro/intro'
import Aboutme from '@/app/components/aboutme/aboutme'

export default function Home() {
    return (
        <main>
            <Intro/>
            <Aboutme/>
        </main>
    )
}
