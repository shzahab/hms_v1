
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose max-w-none space-y-6">
          <section>
            <p>
              This privacy policy sets out how HUTAIB MACHINERY AND SPARES uses and protects any information that you give when you visit our website and/or agree to purchase from us. We are committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, you can be assured that it will only be used in accordance with this privacy statement.
            </p>
            <p>
              HUTAIB MACHINERY AND SPARES may change this policy from time to time by updating this page. You should check this page periodically to ensure that you are comfortable with any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul className="list-disc pl-6">
              <li>Name</li>
              <li>Contact information including email address</li>
              <li>Demographic information such as postcode, preferences and interests, if required</li>
              <li>Other information relevant to customer surveys and/or offers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p>We require this information to understand your needs and provide you with better service, specifically for:</p>
            <ul className="list-disc pl-6">
              <li>Internal record keeping</li>
              <li>Improving our products and services</li>
              <li>Sending promotional emails about new products, special offers, or other information we think you may find interesting</li>
              <li>Contacting you for market research purposes via email, phone, fax, or mail</li>
              <li>Customizing the website according to your interests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Security</h2>
            <p>
              We are committed to ensuring that your information is secure. To prevent unauthorized access or disclosure, we have put in suitable measures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Cookies</h2>
            <p>
              A cookie is a small file which asks permission to be placed on your computer's hard drive. Cookies help us analyze web traffic and customize the website to your preferences. You can choose to accept or decline cookies through your browser settings.
            </p>
            <p>
              We use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic and improve our website. We only use this information for statistical analysis purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Controlling Your Personal Information</h2>
            <p>You may choose to restrict the collection or use of your personal information:</p>
            <ul className="list-disc pl-6">
              <li>Look for opt-out options in forms for direct marketing purposes</li>
              <li>Contact us at sales@hutaibmachinery.com to change your preferences</li>
            </ul>
            <p>
              We will not sell, distribute, or lease your personal information to third parties unless required by law or with your permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
            <p>
              If you believe any information we hold about you is incorrect or incomplete, please contact us:
            </p>
            <ul className="list-none pl-6">
              <li>Address: NO 78, N R ROAD, Bengaluru KARNATAKA 560002</li>
              <li>Phone: 8074949635</li>
              <li>Email: sales@hutaibmachinery.com</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
