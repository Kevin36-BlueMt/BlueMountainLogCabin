"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// ====== IMAGE SETUP ======
// Update these filenames to match your actual images in /public/images.

const exteriorImages = [
  "/images/exterior-1.avif",
  "/images/exterior-2.avif",
  "/images/exterior-4.avif",
];

const interiorImages = [
  "/images/interior-1.JPEG",
  "/images/interior-2.JPEG",
  "/images/interior-3.JPEG",
"/images/interior-4.JPEG",
"/images/interior-5.JPEG",
"/images/interior-7.JPEG",
];

const bedroomImages = [
  "/images/bedroom-1.JPEG",
  "/images/bedroom-2.JPEG",
"/images/bedroom-3.JPEG",
];

const deckAndOutdoorImages = [
  "/images/deck-1.avif",
  "/images/deck-2.avif",
  "/images/deck-3.JPEG",
];

const nightSkyImages = [
  "/images/night-forest-1.jpg",
  "/images/night-forest-2.avif",
"/images/night-forest-3.webp",
];

const reviews = [
  {
    quote:
      "The cabin was spotless, peaceful, and exactly what we needed to unplug in nature.",
    name: "Recent guest",
  },
  {
    quote:
      "Beautiful location, thoughtful touches, and a host who was incredibly responsive.",
    name: "Family getaway",
  },
  {
    quote:
      "Close to wineries and Shenandoah, but so quiet and private you feel worlds away.",
    name: "Weekend escape",
  },
];

function ImageSection({ title, images, id }) {
  if (!images.length) return null;

  return (
    <section id={id} className="py-12 px-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-stone-900">{title}</h2>
        <span className="h-px flex-1 ml-4 bg-stone-200" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="h-56 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm"
          >
            <img
              src={src}
              alt={`${title} photo ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AirbnbSite() {
  return (
    <div className="page-bg min-h-screen text-stone-900">
      <div className="page-overlay min-h-screen flex flex-col">
        {/* ================= NAVBAR ================= */}
        <header className="border-b border-stone-200 navbar-blur">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/dragonfly-logo.png"
                  alt="Blue Mountain Log Cabin logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-stone-500">
                Blue Mountain Log Cabin
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.18em] text-stone-500">
              <a href="#stay" className="hover:text-emerald-800">
                Stay
              </a>
              <a href="#gallery" className="hover:text-emerald-800">
                Gallery
              </a>
              <a href="#experiences" className="hover:text-emerald-800">
                Experiences
              </a>
              <a href="#location" className="hover:text-emerald-800">
                Location
              </a>
              <Button
                className="rounded-full px-5 py-2 text-xs bg-emerald-900 hover:bg-emerald-800 text-stone-50 font-semibold"
                onClick={() =>
                  window.open("https://www.airbnb.com/rooms/40823376", "_blank")
                }
              >
                Check Availability
              </Button>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          {/* ================= HERO (CONTENT OVER GLOBAL BG) ================= */}
          <section className="relative">
            <div className="max-w-6xl mx-auto px-6 py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* TEXT */}
              <div className="bg-white/75 backdrop-blur-sm p-5 rounded-2xl shadow-soft max-w-md">
  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-700 mb-3">
    Linden · Virginia · Blue Ridge
  </p>

  <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 text-stone-900">
    Your mountaintop
    <span className="block text-emerald-900">log cabin retreat.</span>
  </h1>

  <p className="text-sm md:text-base text-stone-800 mb-6">
    A private 5+ acre log cabin minutes from Shenandoah National Park,
    Skyline Drive, wineries, and the Shenandoah River. Quiet, cozy, and
    surrounded by trees and stars.
  </p>

  <div className="flex flex-col sm:flex-row gap-3">
    <Button
      className="rounded-full px-7 py-3 text-sm bg-emerald-900 hover:bg-emerald-800 text-stone-50 font-semibold shadow-soft"
      onClick={() =>
        window.open("https://www.airbnb.com/rooms/40823376", "_blank")
      }
    >
      View Availability on Airbnb
    </Button>

    <Button
      variant="outline"
      className="rounded-full px-7 py-3 text-sm border-amber-300 text-stone-800 hover:bg-amber-50"
      onClick={() =>
        window.open("https://www.airbnb.com/rooms/40823376", "_blank")
      }
                  >
                    Message Host
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-stone-600">
                  <span>Guest favorite · ~4.95 / 5 rating</span>
                  <span className="h-1 w-1 rounded-full bg-amber-400" />
                  <span>5 guests · 3 bedrooms · 3 beds · 2 baths</span>
                  <span className="h-1 w-1 rounded-full bg-amber-400" />
                  <span>Self check-in · Pet friendly</span>
                </div>
              </div>

              {/* HERO IMAGE CARD */}
              <div className="hidden md:block">
                <div className="h-60 rounded-3xl overflow-hidden border border-stone-200 bg-stone-900/40 shadow-soft">
                  <img
                    src="/images/hero-night-sky.JPEG"
                    alt="Night forest near Blue Mountain Log Cabin"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ================= QUICK STATS ================= */}
          <section className="border-y border-stone-200 bg-amber-50/80">
            <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs md:text-sm text-stone-700">
              <div className="flex flex-col sm:border-r sm:border-amber-100 pr-0 sm:pr-6">
                <span className="font-semibold text-emerald-900 mb-1">
                  The Cabin
                </span>
                <span>
                  Authentic log home with modern comforts and a wood stove.
                </span>
              </div>
              <div className="flex flex-col sm:border-r sm:border-amber-100 pr-0 sm:pr-6">
                <span className="font-semibold text-emerald-900 mb-1">
                  The Land
                </span>
                <span>
                  5+ private wooded acres for peaceful mornings and stargazing.
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-emerald-900 mb-1">
                  The Location
                </span>
                <span>
                  Near Shenandoah NP, Skyline Drive, wineries, and river access.
                </span>
              </div>
            </div>
          </section>

          {/* ================= STAY ================= */}
          <section id="stay" className="py-12 px-6 max-w-6xl mx-auto">
            <div className="max-w-xl mb-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-600 mb-2">
                Stay
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-stone-900">
                Stay at Blue Mountain Log Cabin
              </h2>
              <p className="text-sm md:text-base text-stone-600">
                Thoughtfully designed mountain cabin—no crowds, no shared walls,
                just you and the trees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-stone-200 bg-white card-bg">
                <CardContent className="p-6 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-emerald-900">
                    The Living Space
                  </h3>
                  <p className="text-sm text-stone-600">
                    Vaulted ceilings, cozy seating, and a wood stove for
                    peaceful mornings and relaxed evenings.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-stone-200 bg-white card-bg">
                <CardContent className="p-6 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-emerald-900">
                    Bedrooms & Baths
                  </h3>
                  <p className="text-sm text-stone-600">
                    Three bedrooms with quality linens and two full bathrooms,
                    ideal for couples, friends, or a small family.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-stone-200 bg-white card-bg">
                <CardContent className="p-6 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-emerald-900">
                    Kitchen & Deck
                  </h3>
                  <p className="text-sm text-stone-600">
                    Fully stocked kitchen and spacious deck for coffee, dinners,
                    and fresh mountain air.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ================= EXPERIENCES ================= */}
          <section id="experiences" className="py-12 px-6 max-w-6xl mx-auto">
            <div className="max-w-xl mb-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-600 mb-2">
                Experiences
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-stone-900">
                On-Property & Nearby Experiences
              </h2>
              <p className="text-sm md:text-base text-stone-600">
                Spend time on the deck, wander the land, or head out to explore
                trails, rivers, and vineyards nearby.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-stone-200 bg-white card-bg">
                <CardContent className="p-6 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-emerald-900">
                    Slow Mornings & Starry Nights
                  </h3>
                  <p className="text-sm text-stone-600">
                    Sip coffee on the deck, listen to the trees, and wind down
                    under dark, star-filled skies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-stone-200 bg-white card-bg">
                <CardContent className="p-6 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-emerald-900">
                    Trails, Rivers & Scenic Drives
                  </h3>
                  <p className="text-sm text-stone-600">
                    Access Shenandoah National Park, Skyline Drive, and the
                    Shenandoah River for hiking, drives, and time on the water.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-stone-200 bg-white card-bg">
                <CardContent className="p-6 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-emerald-900">
                    Wineries & Small Towns
                  </h3>
                  <p className="text-sm text-stone-600">
                    Explore local vineyards, tasting rooms, and nearby Virginia
                    towns for dining and day trips.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ================= GALLERY ================= */}
          <section id="gallery">
            <ImageSection title="Exterior" images={exteriorImages} />
            <ImageSection title="Interior" images={interiorImages} />
            <ImageSection title="Bedrooms" images={bedroomImages} />
            <ImageSection
              title="Deck & Outdoor Spaces"
              images={deckAndOutdoorImages}
            />
            <ImageSection title="Night Sky & Forest" images={nightSkyImages} />
          </section>

          {/* ================= REVIEWS ================= */}
          <section className="py-12 px-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-stone-900">
                What Guests Are Saying
              </h2>
              <span className="text-sm text-stone-500">
                Guest favorite · ~4.95 / 5 rating
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {reviews.map((review) => (
                <Card
                  key={review.quote}
                  className="rounded-2xl border-stone-200 bg-white card-bg text-stone-800 h-full"
                >
                  <CardContent className="p-5 flex flex-col justify-between h-full">
                    <p className="text-sm italic mb-3">“{review.quote}”</p>
                    <p className="text-xs text-emerald-900 font-medium">
                      {review.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* ================= LOCATION (NO EXTRA BG, LET GLOBAL SHOW) ================= */}
          <section id="location" className="py-12 px-6 max-w-6xl mx-auto">
            <div className="rounded-3xl border border-stone-200 bg-white/85 card-bg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-stone-900">
                  Linden, Virginia & the Blue Ridge
                </h2>
                <p className="text-sm text-stone-700 mb-4">
                  The cabin sits in the Blue Ridge foothills near Linden,
                  Virginia. From here you can explore Shenandoah National Park,
                  Skyline Drive, the Shenandoah River, and a number of nearby
                  wineries and small towns.
                </p>
                <ul className="space-y-1 text-sm text-stone-700">
                  <li>• Scenic drives along Skyline Drive</li>
                  <li>• Hiking on or near the Appalachian Trail</li>
                  <li>• Floating, kayaking, or fishing on the Shenandoah River</li>
                  <li>• Wineries, tasting rooms & local dining</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-amber-50/90 border border-amber-100 flex items-center justify-center p-6 text-center text-sm text-stone-700">
                <p>
                  Exact address and detailed directions are shared after booking
                  through Airbnb. The cabin is reachable by car and offers
                  on-site parking.
                </p>
              </div>
            </div>
          </section>

          {/* ================= AVAILABILITY ================= */}
          <section className="py-12 px-6 max-w-4xl mx-auto">
            <div className="rounded-3xl border border-stone-200 bg-white card-bg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-3 text-stone-900">
                Availability & Booking
              </h2>
              <p className="text-sm text-stone-600 mb-4 max-w-2xl mx-auto">
                For live calendar availability, pricing, and booking, visit the
                official Airbnb listing.
              </p>
              <Button
                className="rounded-full px-7 py-3 text-lg bg-emerald-900 hover:bg-emerald-800 text-stone-50 font-semibold shadow-soft"
                onClick={() =>
                  window.open("https://www.airbnb.com/rooms/40823376", "_blank")
                }
              >
                View Full Calendar on Airbnb
              </Button>
            </div>
          </section>

          {/* ================= HOST ================= */}
          <section className="py-12 px-6 max-w-4xl mx-auto">
            <div className="rounded-3xl border border-stone-200 bg-white card-bg p-8">
              <h2 className="text-2xl font-semibold mb-3 text-stone-900">
                Meet Your Host
              </h2>
              <p className="text-sm text-stone-600 mb-4">
                Hi, I’m Kevin. I’ve been hosting guests at Blue Mountain Log
                Cabin for several years and love sharing this peaceful place with
                anyone seeking quiet, nature, and a cozy retreat.
              </p>
              <p className="text-sm text-stone-600 mb-2">
                My goal is to provide clear communication, a clean and welcoming
                cabin, and a memorable stay. Reach out through Airbnb anytime.
              </p>
              <Button
                variant="outline"
                className="mt-4 rounded-full px-7 py-3 text-sm border-amber-300 text-stone-700 hover:bg-amber-50"
                onClick={() =>
                  window.open("https://www.airbnb.com/rooms/40823376", "_blank")
                }
              >
                Message Kevin on Airbnb
              </Button>
            </div>
          </section>
        </main>

        {/* ================= FOOTER ================= */}
        <footer className="py-6 px-6 border-t border-stone-200 bg-white/90">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-stone-500">
            <p>
              © {new Date().getFullYear()} Blue Mountain Log Cabin · Linden, Virginia
            </p>
            <p>All inquiries & bookings are handled securely through Airbnb.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
