import { ArrowUpRight, Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HardwareCarouselSection({
  eyebrow = "Featured products",
  title,
  intro,
  products,
}) {
  return (
    <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">{eyebrow}</p>
          <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">{title}</h2>
          {intro ? <p className="mt-5 text-lg leading-8 text-muted-foreground">{intro}</p> : null}
        </div>

        <Swiper
          modules={[Pagination, A11y]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          style={{
            "--swiper-pagination-color": "#2D241E",
            "--swiper-pagination-bullet-inactive-color": "#2D241E",
            "--swiper-pagination-bullet-inactive-opacity": "0.35",
          }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 22 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="pb-12"
        >
          {products.map((product) => (
            <SwiperSlide key={product.title}>
              <article className="h-full bg-background">
                <img src={product.image} alt={product.title} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <div className="mb-4 h-px w-10 bg-[#C8A977]" />
                  <h3 className="font-display text-3xl leading-tight text-primary">{product.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{product.description}</p>

                  {product.bullets?.length ? (
                    <div className="mt-4 space-y-2">
                      {product.bullets.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <Check className="h-4 w-4 shrink-0 text-[#8C6A43]" />
                          <span className="text-sm text-foreground/85">{item}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-[#8C6A43] transition-colors hover:text-primary"
                  >
                    View collection <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
