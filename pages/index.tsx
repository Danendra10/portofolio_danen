import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Home: NextPage = () => {
  let status = 1;
  var intro = "Hii!! Je ta'ime Danendra";
  const toogleLang = async () => {
    console.log("toogleLang");
    if (!status) {
      console.log("toogleLang 1");
      intro = "Hii!! Je ta'ime Danendra";
      status = 1;
    }
    else {
      console.log("toogleLang 2");
      intro = "Hello!! My Name Is Danendra";
      status = 0;
    }
  }
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center py-2 dark:bg-slate-800 dark:text-white">
        <Head>
          <title>Danendra&apos;s Portof</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center h-screen">
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              opacity: 0,
              y: -100,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.5,
                duration: 0.5,
              },
            },
          }}>
            <h1 className="text-6xl font-bold">
              Welcome to{' '}
              My Portofolio
            </h1>
          </motion.div>

          <motion.div className='mt-20' initial="hidden" animate="visible" variants={{
            hidden: {
              opacity: 0,
              y: +100,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.5,
                duration: 0.5,
              },
            },
          }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <button className="rounded-full bg-blue-500 text-white font-bold py-2 px-4">
              <Link href="#my-name">
                See More
              </Link>
            </button>
          </motion.div>
        </main>
      </div>

      <div className='grid grid-rows-2 grid-flow-col gap-4 w-full justify-items-center align-middle items-center h-screen dark:bg-slate-800 dark:text-white' id='my-name'>
        <div className='row-span-2'>
          {/* Load image */}
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              opacity: 0,
              x: -100,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.5,
                duration: 0.5,
              },
            },
          }}>
            <Image
              src="/images/danen.png"
              alt="Picture of the author"
              width={200}
              height={200}
            />
          </motion.div>
        </div>
        <div className='grid row-span-2 w-full align-middle items-center'>
          <div className='items-center'>
            <div className="flex">
              <h1 className='py-12 text-3xl flex-none gap-5'>{intro}</h1>
              <button className='justify-items-end flex-auto' onClick={toogleLang}>What?</button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
      *{
        scroll-behavior: smooth;
      }
      `}</style>
    </div>
  )
}

export default Home
