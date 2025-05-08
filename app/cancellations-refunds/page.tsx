
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CancellationsRefunds() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">Cancellations and Refunds</h1>
        <div className="prose max-w-none space-y-6">
          <section>
            <p className="mb-4">
              HUTAIB MACHINERY AND SPARES believes in helping its customers as far as possible, and has therefore a liberal cancellation policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Cancellation Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cancellations will be considered only if the request is made within 3-5 days of placing the order.</li>
              <li>The cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.</li>
              <li>HUTAIB MACHINERY AND SPARES does not accept cancellation requests for perishable items like flowers, eatables etc.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Refund Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Refund/replacement can be made if the customer establishes that the quality of product delivered is not good.</li>
              <li>In case of receipt of damaged or defective items, please report the same to our Customer Service team within 3-5 days of receipt of the products.</li>
              <li>The request will be entertained once the merchant has checked and determined the same at their end.</li>
              <li>If you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 3-5 days of receiving the product.</li>
              <li>For products that come with a warranty from manufacturers, please refer the issue to them.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Refund Processing</h2>
            <p>
              In case of any Refunds approved by HUTAIB MACHINERY AND SPARES, it'll take 1-2 days for the refund to be processed to the end customer.
            </p>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg mt-8">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">Need Help?</h2>
            <p className="text-blue-900">
              Our customer service team is here to assist you. Contact us for any queries regarding cancellations or refunds.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
