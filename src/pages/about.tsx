import { title } from "@/components/primitives"
import DefaultLayout from "@/layouts/default"

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-full max-w-7xl px-4">
          <h1 className={`${title({ fullWidth: true })} text-center`}>About</h1>
          <div className=" mt-8">
            <h3>TODO</h3>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
