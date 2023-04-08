
export default function HeroSection() {
  return (
    <div>
       <section className="flex flex-col min-h-screen bg-slate-800 text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30" style={{backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/45fc99105415493.619ded0619991.jpg)'}}>


{/* <!-- Navbar --> */}
<div className="flex items-center h-20">
  {/* <!-- Navbar Container --> */}
  <div className="mx-auto relative px-5 max-w-screen-xl w-full flex items-center justify-end">
    {/* <!-- Navbar Logo --> */}
    <div className="text-4xl font-light uppercase absolute left-16 top-1/2 -translate-y-1/2 -translate-x-1/2">
      My Site
    </div>

    {/* <!-- Navbar Menu --> */}
    <nav className="flex gap-5">
      <a>Home</a>
      <a>Login</a>
      <a>Signup</a>
    </nav>
  </div>
</div>

{/* <!-- Hero Section Content --> */}
<div className="flex-1 flex items-center">
  <div className="text-center mx-auto">
    <h1 className="text-6xl font-semibold">Welcome to my site!</h1>
    <p className="font-light text-3xl mt-5">The land of opportunity.</p>
    <a className="px-5 py-2 inline-block bg-cyan-500 text-white hover:bg-cyan-400 transition-colors mt-10" href="">Get Started</a>
  </div>
</div>
</section>

{/* <section className="bg-black min-h-screen"></section> */}
    </div>
  )
}
