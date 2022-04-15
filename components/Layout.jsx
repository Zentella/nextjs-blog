import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'zen'

export default function Layout({children, title, description, home}) { // props
  console.log(home)
  return (
    
    <div className={styles.container}>
          {/* importar styles */}

          {/* importar Head */}
      <Head>
          {/* nombre pagina pestaña se tendría q hacer a cada pag, pero mejor usar layout*/}
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name='description'
            content={description}
          />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>

          {/* importar Image */}
            <Image
              priority
              src="/img/1.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            {/* crear var name */}
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>

          {/* importar Link y utilStyles*/}
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/img/1.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <nav>
          <Link href="/">
            <a>Inicio | </a>
          </Link>

          <Link href="/blog">
            <a>Blog | </a>
          </Link>

          <Link href="/contact">
            <a>Contacto |</a>
          </Link>

          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>

    <main>{children}</main>
    {/* props */}

    {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      {/* volver a home */}

    </div>

  )
}

Layout.defaultProps = {
  title: 'Next.js | mi sitio web',
  description: 'descripción de mi sitio web',
}