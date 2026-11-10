import { Header, Routing } from "@/common/components"
import { Footer } from "@/common/components/Footer/Footer"
import { Error } from "@/common/components/Error/Error"


export const App  = () => {
  
  return (
      <>
        <Header/>
        <Routing/>
        <Footer/>
        <Error/>
      </>

  )
}