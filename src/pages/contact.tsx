import { subtitle, title } from "@/components/primitives"
import DefaultLayout from "@/layouts/default"
import { Input, Textarea } from "@nextui-org/input"
import { EnvelopeOpen, Phone } from "@phosphor-icons/react"

export default function Contact() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-full max-w-7xl px-4">
          <h1 className={`${title({ fullWidth: true })} text-center`}>
            Contact
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-8">
            <form className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <h3 className={`col-span-full ${subtitle()}`}>Fill this form</h3>
              <Input type="text" label="First Name" variant="bordered" />
              <Input type="text" label="Last Name" variant="bordered" />
              <Input
                type="email"
                label="Email"
                variant="bordered"
                className="col-span-full"
              />
              <Input
                type="text"
                label="Phone"
                variant="bordered"
                startContent={<span className="text-sm">+1</span>}
                className="col-span-full"
              />
              <Input
                type="text"
                label="Your address"
                variant="bordered"
                className="col-span-full"
              />
              <Textarea
                minRows={3}
                label="Problem"
                variant="bordered"
                placeholder="Describe your problem"
                className="col-span-full"
              />
            </form>
            <div className="col-span-2">
              <h3 className={`${subtitle()}`}>Or contact us directly</h3>
              <div className="flex items-center gap-2 mt-4">
                <Phone size={24} />
                <p>+123456789</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <EnvelopeOpen size={24} />
                <p>restoration@ion.com</p>
              </div>
              Gjera te tjera (psh nje harte ktu poshte)
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
