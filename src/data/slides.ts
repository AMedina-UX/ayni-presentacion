export interface SlideButton {
  name: string;
  linkTo: string; // The slide ID it links to
  image: string;  // Path to the card/button overlay image
  x: number;      // Coordinates inside 1920x1080 space
  y: number;
  width: number;
  height: number;
  disabled?: boolean; // Set to true to disable this button link
}

export interface SlideHeader {
  showClose?: boolean;
  closeTo?: string; // target slide ID when closing
  showArrows?: boolean;
  prevSlide?: string; // target slide ID for left arrow
  nextSlide?: string; // target slide ID for right arrow
  activeTab?: 'capucci' | 'moravi' | 'reset' | null;
  disableClose?: boolean; // Set to true to disable close button action
  disableArrows?: boolean; // Set to true to disable next/prev arrows
  disablePrevArrow?: boolean; // Set to true to disable only the previous arrow
  disableNextArrow?: boolean; // Set to true to disable only the next arrow
  disabledTabs?: ('capucci' | 'moravi' | 'reset')[]; // List of tabs to disable
}

export interface Slide {
  id: string;
  name: string;
  bgImage: string;
  buttons?: SlideButton[];
  header?: SlideHeader;
}

export const SLIDES: Slide[] = [
  {
    id: "home",
    name: "AYNI - Presentación",
    bgImage: "/assets/bg_home.png",
    buttons: [
      {
        name: "PRODUCTOS",
        linkTo: "productos",
        image: "/assets/btn_productos.png",
        x: 170,
        y: 408,
        width: 500,
        height: 500
      },
      {
        name: "PLAN DE COMPENSACIÓN",
        linkTo: "plan",
        image: "/assets/btn_plan.png",
        x: 710,
        y: 408,
        width: 500,
        height: 500
      },
      {
        name: "BONOS",
        linkTo: "bonos-1",
        image: "/assets/btn_bonos.png",
        x: 1250,
        y: 408,
        width: 500,
        height: 500
      }
    ]
  },
  {
    id: "productos",
    name: "AYNI - Productos",
    bgImage: "/assets/bg_productos.png",
    buttons: [
      {
        name: "CAPUCCI 360",
        linkTo: "capucci-360",
        image: "/assets/btn_capucci.png",
        x: 357,
        y: 598,
        width: 375,
        height: 376
      },
      {
        name: "MORAVI 360",
        linkTo: "moravi-360",
        image: "/assets/btn_moravi.png",
        x: 772,
        y: 598,
        width: 376,
        height: 376
      },
      {
        name: "RESET 360",
        linkTo: "reset-360",
        image: "/assets/btn_reset.png",
        x: 1188,
        y: 598,
        width: 375,
        height: 376
      }
    ],
    header: {
      showClose: true,
      closeTo: "home"
    }
  },
  {
    id: "capucci-360",
    name: "AYNI - Capucci 360",
    bgImage: "/assets/bg_capucci.png",
    header: {
      showClose: true,
      closeTo: "productos",
      showArrows: true,
      prevSlide: "productos",
      nextSlide: "capucci-formula",
      activeTab: "capucci"
    }
  },
  {
    id: "capucci-formula",
    name: "AYNI - Capucci 360 Fórmula",
    bgImage: "/assets/bg_capucci_formula.png",
    header: {
      showClose: true,
      closeTo: "productos",
      showArrows: true,
      prevSlide: "capucci-360",
      nextSlide: "precios",
      activeTab: "capucci"
    }
  },
  {
    id: "moravi-360",
    name: "AYNI - Moravi 360",
    bgImage: "/assets/bg_moravi.png",
    header: {
      showClose: true,
      closeTo: "productos",
      showArrows: true,
      prevSlide: "capucci-formula",
      nextSlide: "moravi-formula",
      activeTab: "moravi"
    }
  },
  {
    id: "moravi-formula",
    name: "AYNI - Moravi 360 Fórmula",
    bgImage: "/assets/bg_moravi_formula.png",
    header: {
      showClose: true,
      closeTo: "productos",
      showArrows: true,
      prevSlide: "moravi-360",
      nextSlide: "precios",
      activeTab: "moravi"
    }
  },
  {
    id: "reset-360",
    name: "AYNI - Reset 360",
    bgImage: "/assets/bg_reset.png",
    header: {
      showClose: true,
      closeTo: "productos",
      showArrows: true,
      prevSlide: "moravi-formula",
      nextSlide: "reset-formula",
      activeTab: "reset"
    }
  },
  {
    id: "reset-formula",
    name: "AYNI - Reset 360 Fórmula",
    bgImage: "/assets/bg_reset_formula.png",
    header: {
      showClose: true,
      closeTo: "productos",
      showArrows: true,
      prevSlide: "reset-360",
      nextSlide: "precios",
      activeTab: "reset"
    }
  },
  {
    id: "bonos-1",
    name: "AYNI - Bonos",
    bgImage: "/assets/bg_bonos.png",
    header: {
      showClose: true,
      closeTo: "home",
      showArrows: true,
      prevSlide: "home",
      nextSlide: "bonos-2"
    }
  },
  {
    id: "bonos-2",
    name: "AYNI Estrella",
    bgImage: "/assets/bg_bonos_travel.png",
    header: {
      showClose: true,
      closeTo: "home",
      showArrows: true,
      disableNextArrow: true,
      prevSlide: "bonos-1"
    }
  },
  {
    id: "precios",
    name: "AYNI - Productos",
    bgImage: "/assets/bg_doypacks.png",
    header: {
      showClose: true,
      closeTo: "home",
      showArrows: true,
      disableNextArrow: true,
      prevSlide: "productos",
    }
  }
];
