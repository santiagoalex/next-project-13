import Image from 'next/image'
import GeneralLayout from './(general)/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col p-24">
      <GeneralLayout>
        <Link className="text-3xl mt-14 underline" href={`/about`}> About Page</Link>
      </GeneralLayout>

    </main>
  )
}
