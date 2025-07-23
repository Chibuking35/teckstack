import Image from "next/image"

const Home = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Teck Stack!</h1>

      <p className="mb-4">hello, Gloria it&apos;s chibueze. you can now give me a UI/UX for the website.</p>

      <p className="mb-4 font-bold">Trust you have made your research about it.</p>

      <Image src="/techstack.png" alt="Tech Stack" width={400} height={70} className="p-2" />
    </div>
  )
}

export default Home
