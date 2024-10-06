import { subtitle, title } from "@/components/primitives"
import DefaultLayout from "@/layouts/default"
import { Input, Textarea } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { EnvelopeOpen, MapPin, Phone } from "@phosphor-icons/react"

export default function Contact() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-full max-w-7xl px-4">
          <h1 className={`${title({ fullWidth: true })} text-center`}>
            Contact
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8 gap-y-4  mt-8">
            <form className=" col-span-1 md:col-span-3  grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              <h3 className={` md:col-span-2 ${subtitle()}`}>Fill this form</h3>
              <Input
                type="text"
                label="First Name"
                variant="bordered"
                className="w-full"
              />
              <Input
                type="text"
                label="Last Name"
                variant="bordered"
                className="w-full"
              />
              <Input
                type="email"
                label="Email"
                variant="bordered"
                className="w-full"
              />
              <Input
                type="text"
                label="Phone"
                variant="bordered"
                startContent={<span className="text-sm">+1</span>}
                className="w-full"
              />
              <Input
                type="text"
                label="Your address"
                variant="bordered"
                className="md:col-span-2"
              />
              <Textarea
                minRows={3}
                label="Problem"
                variant="bordered"
                placeholder="Describe your problem"
                className="md:col-span-2"
              />
              <div className="md:col-span-2 flex gap-2 justify-end">
                <Button fullWidth variant="faded">
                  Clear
                </Button>
                <Button fullWidth color="primary">
                  Submit
                </Button>
              </div>
            </form>
            <div className="col-span-2">
              <h3 className={`${subtitle()}`}>Contact us directly</h3>
              <div className="flex items-center gap-2 mt-4">
                <Phone size={24} />
                <p>+123456789</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <EnvelopeOpen size={24} />
                <p>restoration@ion.com</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <MapPin size={24} />
                <p>Toronto ... (map below) </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
