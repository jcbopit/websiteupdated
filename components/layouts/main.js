import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import { useEffect, useState } from 'react'

const backgrounds = {
  '/': '/images/web-back.jpg',
  '/contact': '/images/back3.jpg',
  '/works': '/images/back4.jpg',
}

const Main = ({ children, router }) => {
  const [bgImage, setBgImage] = useState(backgrounds[router.route] || backgrounds['/'])
  const [fade, setFade] = useState(true)

  useEffect(() => {
    setFade(false) // start fade out
    const timeout = setTimeout(() => {
      setBgImage(backgrounds[router.route] || backgrounds['/'])
      setFade(true) // fade in new background
    }, 300) // match transition duration

    return () => clearTimeout(timeout)
  }, [router.route])

  return (
    <Box as="main" pb={8} position="relative" minHeight="100vh" overflow="hidden">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Takuya's homepage" />
        <meta name="author" content="Takuya Matsuyama" />
        <meta name="author" content="craftzdog" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        
        <meta name="twitter:title" content="Takuya Matsuyama" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Takuya Matsuyama" />
        <meta name="og:title" content="Takuya Matsuyama" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Justin Offutt - Homepage </title>
      </Head>

      <NavBar path={router.asPath} />

      {/* Persistent background with fade transition */}
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        zIndex={-1}
        bgImage={`url(${bgImage})`}
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
        opacity={fade ? 0.15 : 0}
        transition="opacity 0.3s ease-in-out"
        pointerEvents="none"
      />

      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
