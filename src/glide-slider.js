import Glide from "@glidejs/glide";
import { Controls } from "@glidejs/glide/dist/glide.modular.esm";

class GlideSlider extends HTMLElement {
  constructor() {
    super();

    this.init();
  }

  init() {
    const glide = new Glide(this, {
      perView: 4,
      animationDuration: 1000,
      breakpoints: {
        1024: {
          autoplay: 3000,
          perView: 3,
        },
        768: {
          autoplay: 3000,
          perView: 2,
        },
        576: {
          autoplay: 3000,
          perView: 1,
        },
      },
    });

    glide.mount({ Controls });
  }
}

customElements.define("glide-slider", GlideSlider);
