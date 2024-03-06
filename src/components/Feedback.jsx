import RatingFromCustomer from './RatingFromCustomer.jsx'
import FeedbackForm from './FeedbackForm.jsx'

function Feedback() {
    return (
        <section className="my-10  grid grid-cols-1 gap-10 text-3xl font-bold text-gray-900 lg:grid-cols-3  dark:text-gray-50">
            <div className=" col-span-2 flex flex-col justify-between">
                <h1>Our Global Customer Feedback</h1>

                <RatingFromCustomer />
            </div>
            <div>
                <h1>Feel free to give us feedback!</h1>
                <FeedbackForm className="ms-10" />
            </div>
        </section>
    )
}

export default Feedback
