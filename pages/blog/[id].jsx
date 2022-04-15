// archivo [id].jsx para ver pagina por cada id

import Layout from "../../components/Layout"

export default function primerPost({ data }) { // recibe props data
  return (
    <Layout>
        <h1>
          {data.id} - {data.title} -
        </h1>
        <p>{data.body}</p>
    </Layout>
  )
}

export async function getStaticPaths() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json() // transf a json
    const paths = data.map(({ id }) => ({ params: { id: `${id}` }})) // debe llevar params, y para transf en string el id usar batsticks, 1.jsx, 2.jsx, etc, 100.jsx
    return {
      paths,
      fallback: false
    } // fallback = 404
  } catch (error) {
    console.log(error)    
  }
}

// recorrer o acceder a info , en jsx no se veran las credenciales en navegador
export async function getStaticProps({ params }) { // getStaticProps = obtención de datos en tiempo real
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id) // de 1 al 100, no olvidar (/ final)
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