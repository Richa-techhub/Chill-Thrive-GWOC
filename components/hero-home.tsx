import Image from "next/image";
import PageIllustration from "@/components/page-illustration";


export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                
                
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src="/images/2.jpg"
                  width={32}
                  height={32}
                  alt="2"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src="/images/11.jpg"
                  width={32}
                  height={32}
                  alt="11"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src="/images/44.jpg"
                  width={32}
                  height={32}
                  alt="44"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src="/images/222.jpg"
                  width={32}
                  height={32}
                  alt="222"
                 />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src="/images/2424.jpg"
                  width={32}
                  height={32}
                  alt="2424"
                 />

                 
                
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Welcome to <br className="max-lg:hidden" />
              Chill Thrive
            </h1>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Welcome to Chill Thrive - Where Recovery Meets Resilience 
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Get Started{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div className="mx-auto max-w-3xl" data-aos="zoom-y-out" data-aos-delay={600}>
            <Image
               src="/images/2424.jpg"  // choose your main hero image
               alt="Chill Thrive Hero"
               className="rounded-2xl"
               width={1200}
               height={675}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
