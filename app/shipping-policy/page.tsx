
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">Shipping Policy</h1>
        <div className="prose max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">International Shipping</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Domestic Shipping</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>For domestic buyers, orders are shipped through registered domestic courier companies and/or speed post only.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Delivery Timeline</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders are shipped within 3-5 days or as per the delivery date agreed at the time of order confirmation.</li>
              <li>Delivery of the shipment is subject to Courier Company / post office norms.</li>
              <li>HUTAIB MACHINERY AND SPARES is not liable for any delay in delivery by the courier company / postal authorities.</li>
              <li>We guarantee to hand over the consignment to the courier company or postal authorities within 3-5 days from the date of the order and payment or as per the delivery date agreed at the time of order confirmation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Delivery Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delivery of all orders will be to the address provided by the buyer.</li>
              <li>Delivery of our services will be confirmed on your mail ID as specified during registration.</li>
            </ul>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg mt-8">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">Need Help?</h2>
            <p className="text-blue-900">
              For any issues in utilizing our services, you may contact our helpdesk:
            </p>
            <ul className="list-none mt-4 space-y-2">
              <li>Phone: <span className="font-medium">8074949635</span></li>
              <li>Email: <span className="font-medium">sales@hutaibmachinery.com</span></li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
