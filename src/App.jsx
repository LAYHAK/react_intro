import PageNavbar from './components/PageNavbar.jsx'
import PageFooter from './components/PageFooter.jsx'
import { Flowbite } from 'flowbite-react'
import Feedback from './components/Feedback.jsx'
import ProductCard from './components/ProductCard.jsx'

function App() {
    let nums = 9
    return (
        <Flowbite className="flex h-dvh flex-col justify-between ">
            <PageNavbar />
            <main className="container">
                <section className=" my-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3  ">
                    {/*loop product 9 times*/}
                    {Array(nums)
                        .fill()
                        .map((_, i) => (
                            <ProductCard key={i} />
                        ))}
                </section>
                <Feedback />
            </main>
            <PageFooter />
        </Flowbite>
    )
}

export default App
