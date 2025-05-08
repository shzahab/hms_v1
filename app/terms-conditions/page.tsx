
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="prose max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Definitions</h2>
            <p>
              For the purpose of these Terms and Conditions:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The term "we", "us", "our" shall mean HUTAIB MACHINERY AND SPARES, whose registered/operational office is NO 78, N R ROAD, Bengaluru KARNATAKA 560002.</li>
              <li>"you", "your", "user", "visitor" shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Website Usage</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The content of the pages of this website is subject to change without notice.</li>
              <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.</li>
              <li>You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
              <li>Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Our website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics.</li>
              <li>Reproduction is prohibited other than in accordance with the copyright notice.</li>
              <li>All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website.</li>
              <li>Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">External Links and Website Usage</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>From time to time our website may include links to other websites. These links are provided for your convenience to provide further information.</li>
              <li>You may not create a link to our website from another website or document without HUTAIB MACHINERY AND SPARES's prior written consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Legal Jurisdiction</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India.</li>
              <li>We shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
