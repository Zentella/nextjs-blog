

import Layout from "../../components/Layout"
import Link from 'next/link'

export default function index({ data }) { // recibe props data
  return (
    <Layout>
      <h1>Lista de blog</h1>
      {
        data.map(({ id, title, body }) => ( // destructuring
          <div key={id}>
            <h3>
              {/* con {} es dato dinámico */}
              <Link href={`/blog/${id}`}>
              <a>{id} - {title}</a>
              </Link>
              </h3>
            <p>{body}</p>
          </div>
        ))
      }
    </Layout>
  )
}

// esto no se ve en cliente, se guarda en servidor (estatico)
// getStaticProps solo se ejecuta en el lado del servidor

export async function getStaticProps() { // getStaticProps = obtención de datos en tiempo real
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return { // envía props data
      props: {
        data
      }
    }
  } catch (err) {
    console.log(err)
  }
}

