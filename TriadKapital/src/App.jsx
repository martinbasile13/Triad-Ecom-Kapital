import './App.css'

function App() {
  return (
        <div data-theme="luxury">
        <div id="navbar" className="">
            <div className="navbar bg-base-400">
                <div className="navbar-start">
                  <div className="dropdown">
                    <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h8m-8 6h16" />
                      </svg>
                    </div>
                    <ul
                      tabindex="0"
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-md">
                      <li><a href="#Proyects">Proyects</a></li>
                      <li><a href="#AboutUs">About Us</a></li>
                      <li><a href="#Contact">Contact</a></li>
                    </ul>
                  </div>
                  <a className="btn btn-ghost text-2xl" href="#home">TriadEcomKapital</a>
                </div>
                <div className="navbar-end hidden lg:flex ">
                  <ul className="menu menu-horizontal px-1 text-md">
                    <li><a href="#Proyects">Proyects</a></li>
                    <li><a href="#AboutUs">About Us</a></li>
                    <li><a href="#Contact">Contact</a></li>
                  </ul>
                </div>
            </div>
        </div>
        <div id="home">
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(imagen/wallpapper2.jpg)",
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Triad Ecom Kapital</h1>
                </div>
              </div>
            </div>
        </div>
        <div id="Proyects" className="mt-20">
            <div className="flex justify-center">
                <h2 className="text-5xl mb-5">Proyects</h2>
            </div>
            <div className="flex flex-wrap justify-center">
            <div className="card card-compact bg-base-200 w-96 shadow-xl m-5 shadow-primary">
                <figure>
                  <img
                    src="../public/imagen/worldcircle.png"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">WorldCircle Store</h2>
                  <p>Illuminate your home with the exclusive World Circle™ lamp</p>
                  <div className="card-actions justify-end">
                    
                    <a className="link link-hover" href="https://worldcircle.store/" target="_blank"><button className="btn btn-primary">Go To Web</button></a>
                </div>
                </div>
            </div>
              <div className="card card-compact bg-base-200 w-96 shadow-xl m-5 shadow-primary">
                <figure>
                  <img
                    src="../public/imagen/Co.jpg"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">magnetlux Store</h2>
                  <p>Our rotating lunar lamp not only illuminates your space in a soft and pleasant way</p>
                  <div className="card-actions justify-end">
                    
                    <button className="btn btn-primary" onclick="my_modal_2.showModal()">Go To Web</button>
                    <dialog id="my_modal_2" className="modal">
                      <div className="modal-box bg-base-300">
                        <h3 className="text-lg font-bold">Hello!</h3>
                        <p className="pt-4">will be on the market very soon</p>
                        <p className="py-4">Press ESC key or click outside to close</p>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                </div>
            </div>
            </div>
        </div>
        <div id="AboutUs" className="mt-20">
            <div className="flex justify-center">
                <h2 className="text-5xl mb-5">About US</h2>
            </div>
            <div className="flex flex-wrap justify-center ">
                <div className="card card-side  max-w-lg bg-base-200 m-5 shadow-xl shadow-primary">
                <figure>
                  <img
                    className="w-48"
                    src="imagen/MartinBasileGonzalez.jpeg"
                    alt="Martin" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Martin Basile Gonzalez</h2>
                  <p>full stack web programmer and content creator.</p>
                  <div className="badge bg-base-300 p-3 text-white">Founder</div>
                  <div className="flex flex-wrap">
                    <div className="m-1">
                      <a href="https://x.com/martinbasile23" target="_blank"><button className="btn btn-sm w-10"><img className="w-5" src="../public/svg/x_dark.svg" alt=""/></button></a> 
                    </div>
                    <div className="m-1">
                      <a href="https://www.instagram.com/b4silee/" target="_blank"><button className="btn btn-sm w-10"><img className="w-5" src="../public/svg/instagram_dark.svg" alt=""/></button></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-side max-w-lg bg-base-200 m-5 shadow-xl shadow-primary">
                <figure>
                  <img
                    className="w-48"
                    src="imagen/EliasGonzalezSafa.jpg"
                    alt="Elias" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Elias Gonzalez Safa</h2>
                  <p>dropshiper and content creator.</p>
                  <div className="badge bg-base-300 p-3 text-white">Founder</div>
                  <div className="flex flex-wrap">
                    <div className="m-1">
                      <a href="https://www.instagram.com/elias_gonza5/" target="_blank"><button className="btn btn-sm w-10"><img className="w-5" src="../public/svg/instagram_dark.svg" alt=""/></button></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-side max-w-lg bg-base-200 m-5 shadow-xl shadow-primary">
                <figure>
                  <img
                    className="w-48"
                    src="imagen/demian bordes.jpeg"
                    alt="Demian" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Demian Bordes</h2>
                  <p>dropshiper and content creator.</p>
                  <div className="badge bg-base-300 p-3 text-white">Founder</div>
                  <div className="flex flex-wrap">
                    <div className="m-1">
                      <a href="https://x.com/Demian1621" target="_blank"><button className="btn btn-sm w-10"><img className="w-5" src="../public/svg/x_dark.svg" alt=""/></button></a>
                    </div>
                    <div className="m-1">
                      <a href="https://www.instagram.com/demian1401/" target="_blank"><button className="btn btn-sm w-10"><img className="w-5" src="../public/svg/instagram_dark.svg" alt=""/></button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div id="Contact" className="mt-20 mb-20 ">
            <div className="flex flex-wrap justify-center p-0">
            <div className="card bg-base-200 shadow-xl shadow-primary">
              <div className="flex justify-center mt-3">
                <h2 className="text-5xl font-bold">contact</h2>
              </div>
                <div className="card-body p-10">
                    <div className=" ">
                        <div className="">
                          <div className="text-center lg:text-left">
                            <h2 className="text-5xl font-bold mb-6">Triad Ecom Kapital</h2>
                            <p className="py-5 text-xl">
                                we are triad capital You can contact us through networks and our email.
                            </p>
                            <p>
                                contact@triadkapital.com
                            </p>
                            <p>
                                (575) 221-0864
                            </p>
                            <div className="flex flex-wrap mt-5">
                                <a href="https://www.instagram.com/triadkapitalofficial/" target="_blank"> <button className="btn btn-sm w-10">
                                <image
                                  className="w-5" 
                                  src="../public/svg/instagram_dark.svg" 
                                  alt="imagen"/>
                                  </button></a>
                            </div>
                            
                            
                        </div>
                        </div>
                      </div>
                </div>
            </div>
        </div>
        </div>
        <div id="footer">
            <footer className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                  <p>Copyright © 2024 - All right reserved by TriadEcomKapital LLC </p>
                </aside>
            </footer>
        </div>
    </div>
  )
}

export default App
