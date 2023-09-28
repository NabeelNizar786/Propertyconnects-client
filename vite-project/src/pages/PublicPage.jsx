import React from 'react'
import PropertyCard from '../components/PropertyCard';
import img from '../assets/rocketdab.png'

const PublicPage = () => {

    const properties = [
        {
          title: "Cozy Apartment in the City",
          location: "New York, NY",
          price: "2,500",
          imageUrl: "https://example.com/apartment1.jpg",
        },
        {
          title: "Spacious Beach House",
          location: "Malibu, CA",
          price: "5,000",
          imageUrl: "https://example.com/beachhouse.jpg",
        },
        {
          title: "Mountain Cabin Retreat",
          location: "Aspen, CO",
          price: "3,200",
          imageUrl: "https://example.com/cabin.jpg",
        },
        {
            title: "Mountain Cabin Retreat",
            location: "Aspen, CO",
            price: "3,200",
            imageUrl: "https://example.com/cabin.jpg",
          },
          
      ];

  return (
    <>
    <div className="min-h-screen bg-slate-5">
    <header className="bg-teal-700 text-white sticky top-0 z-10 w-full">
        <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
            <h1 className="text-3xl font-medium">
                <a href="#hero">🏠Property Connects</a>
            </h1>
            <div>
                <button id="mobile-open-button"
                className="text-3xl sm:hidden focus:outline-none">
                &#9776;
                </button>
                <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
                    <a href="" className="hover:opacity-90">Sign up</a>
                    <a href="" className="hover:opacity-90">Login</a>
                    <a href="" className="hover:opacity-90">Contact us</a>
                </nav>
            </div>
        </section>
    </header>
    <main className="max-w-4xl mx-auto p-4">
    <section id="hero" class="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40">
            <article class="sm:w-1/2">
                <h2 class="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900">
                    We Boldy Go <span class="text-indigo-700 dark:text-indigo-300"> Where No Rocket </span>  Has Gone Before
                </h2>
                <p class="max-w-md text-2xl mt-4 text-center sm:text-left">
                    We're building rockets for the next century today. From the Moon to Mars, Jupiter and beyond...
                </p>
                <p class="max-w-md text-2xl mt-4 text-center sm:text-left">
                    Think Acme Rockets.
                </p>
            </article>
            <img src={img} alt="Rocket Dab" class="w-1/2"/>
        </section>
    <section id="properties" className="flex flex-wrap justify-center">
        {properties.map((property, index) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" key={index}>
            <PropertyCard {...property} />
          </div>
        ))}
      </section>
</main>

</div>
</>
  )
}

export default PublicPage