import Image from "next/image"

const Home =()=> {
  return (
    <div className="p-5">
    <h1 className="text-2xl font-bold mb-4">Welcome to the Teck Stack!</h1>
     hello, Gloria it's chibueze. you can now give me a ui/ux for the website.

    <p className="mb-4 font-bold">Trust you have made your reseach about it.</p>
     <Image src="/techstack.png" alt="" width={400} height={70} className="p-2"></Image>
    </div>
  )
}
export default Home