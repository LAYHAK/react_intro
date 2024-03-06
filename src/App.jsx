import PageNavbar from './components/PageNavbar.jsx'
import PageFooter from './components/PageFooter.jsx'
import { Flowbite } from 'flowbite-react'
import ProductCard from './components/ProductCard.jsx'
import Feedback from './components/Feedback.jsx'

function App() {
    return (
        <Flowbite className="flex h-dvh flex-col justify-between ">
            <PageNavbar />
            <main className="container">
                <section className=" my-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3  ">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </section>
                <Feedback />
            </main>
            <PageFooter />
        </Flowbite>
    )
}

export default App
