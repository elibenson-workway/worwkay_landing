/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from "react";

export type Language = "es" | "en";

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
];

const STORAGE_KEY = "workway_lang";

const es = {
  nav: {
    features: "Funciones",
    howItWorks: "Cómo funciona",
    suppliers: "Proveedores",
    pricing: "Precios",
    signIn: "Iniciar Sesión",
    signUp: "Registro Gratis",
  },
  hero: {
    badge: "Revolución en la Construcción",
    titlePre: "De plano PDF a ",
    titleHighlight: "obra ejecutada",
    titlePost: " en un clic.",
    subtitle:
      "Sube tus planos y deja que nuestra IA genere el despiece, catálogo de conceptos presupuesto y calendario. Conecta con proveedores y paga a contratistas por avance real.",
    uploadBtn: "Subir Plano PDF",
    exampleBtn: "Ver Ejemplo",
    freeNote: "Registro gratuito. Paga solo por documento generado.",
    card: {
      title: "Presupuesto Generado",
      project: "Proyecto: Residencia Arcos",
      save: "Guardar Proyecto",
      items: [
        { label: "Cimentación", value: "$45,200.00", progress: 100 },
        { label: "Estructura", value: "$128,500.00", progress: 65 },
        { label: "Instalaciones", value: "$82,100.00", progress: 20 },
      ],
    },
  },
  features: {
    heading: "Control total de tu obra",
    subtitle:
      "Desde el primer trazo en el plano hasta la entrega de llaves. WorkwayTech automatiza lo tedioso para que te enfoques en construir.",
    items: [
      {
        title: "Despiece Automático",
        description:
          "Analizamos tus planos en PDF y generamos el listado detallado de materiales y componentes al instante.",
      },
      {
        title: "Presupuesto y Conceptos",
        description:
          "Generación automática de catálogos de conceptos y presupuestos basados en precios de mercado reales.",
      },
      {
        title: "Calendario de Obra",
        description:
          "Cronograma inteligente que organiza cada fase del proyecto para que nunca pierdas un plazo.",
      },
      {
        title: "Conexión con Proveedores",
        description:
          "Cotiza directamente con proveedores de materiales y obtén los mejores precios para tu proyecto.",
      },
      {
        title: "Red de Contratistas",
        description:
          "Accede a profesionales verificados para ejecutar cada fase y gestiona sus pagos por avance.",
      },
      {
        title: "Evidencias y Pagos",
        description:
          "Adjunta fotos y documentos del desarrollo. Paga solo cuando el avance incremental sea validado.",
      },
    ],
  },
  suppliers: {
    heading: "Proveedores aliados",
    subtitle:
      "Trabajamos con proveedores de materiales y servicios de construcción para que cotices y compres directo desde tu proyecto.",
  },
  how: {
    heading: "Flujo de trabajo inteligente",
    steps: [
      {
        step: "01",
        title: "Sube tu Plano",
        text: "Carga tu archivo PDF. Nuestra IA detecta muros, vanos, materiales y dimensiones automáticamente.",
      },
      {
        step: "02",
        title: "Genera Documentación",
        text: "Obtén el despiece, catálogo de conceptos y presupuesto base en segundos. Paga solo por lo que generas.",
      },
      {
        step: "03",
        title: "Conecta y Ejecuta",
        text: "Compra materiales con proveedores locales y asigna tareas a contratistas de nuestra red.",
      },
      {
        step: "04",
        title: "Pago por Avance",
        text: "Valida el progreso con evidencias fotográficas y libera pagos incrementales de forma segura.",
      },
    ],
    evidence: {
      title: "Evidencia de Avance",
      phase: "Fase: Cimentación - 100%",
      release: "Liberar Pago: $12,400.00",
    },
  },
  pricing: {
    heading: "Precios transparentes",
    subtitle:
      "Regístrate gratis y explora la plataforma. Solo pagas cuando necesitas generar documentos oficiales para tu obra.",
    free: {
      name: "Registro",
      price: "$0",
      features: [
        "Acceso a la red de contratistas",
        "Visualización de planos",
        "Gestión de evidencias",
        "Pagos por avance",
      ],
      cta: "Crear Cuenta Gratis",
    },
    gen: {
      badge: "Pay-per-use",
      name: "Generación",
      pricePre: "Costo ",
      priceHighlight: "Variable",
      pricePost: "",
      features: [
        "Despiece detallado",
        "Catálogo de conceptos",
        "Presupuesto paramétrico",
        "Calendario de obra inteligente",
      ],
      cta: "Empezar a Generar",
    },
  },
  ctaFinal: {
    titleLine1: "La obra de tus sueños,",
    titleLine2: "bajo control.",
    subtitle:
      "Únete a la nueva era de la construcción digital. Más eficiente, más transparente, más WorkwayTech.",
    signUp: "Registrarme Ahora",
    talk: "Hablar con un Experto",
  },
  footer: {
    description:
      "Plataforma integral para la gestión, presupuestación y ejecución de proyectos de construcción mediante IA.",
    toolsHeading: "Herramientas",
    tools: [
      "Generador de Despiece",
      "Catálogo de Conceptos",
      "Presupuestador",
      "Calendario de Obra",
    ],
    legalHeading: "Legal",
    legal: ["Privacidad", "Términos de Uso", "Seguridad"],
    rights: "Todos los derechos reservados.",
    bottom: ["Cookies", "Sitemap", "Accesibilidad"],
  },
  a11y: {
    toggleMenu: "Abrir menú",
    switchLanguage: "Cambiar idioma",
  },
};

export type Translation = typeof es;

const en: Translation = {
  nav: {
    features: "Features",
    howItWorks: "How it Works",
    suppliers: "Suppliers",
    pricing: "Pricing",
    signIn: "Sign In",
    signUp: "Free Sign Up",
  },
  hero: {
    badge: "Construction Revolution",
    titlePre: "From PDF blueprint to ",
    titleHighlight: "executed project",
    titlePost: " in one click.",
    subtitle:
      "Upload your blueprints and let our AI generate the material takeoff, bill of quantities, budget and schedule. Connect with suppliers and pay contractors for real progress.",
    uploadBtn: "Upload PDF Blueprint",
    exampleBtn: "See Example",
    freeNote: "Free sign up. Pay only per generated document.",
    card: {
      title: "Budget Generated",
      project: "Project: Arcos Residence",
      save: "Save Project",
      items: [
        { label: "Foundation", value: "$45,200.00", progress: 100 },
        { label: "Structure", value: "$128,500.00", progress: 65 },
        { label: "Installations", value: "$82,100.00", progress: 20 },
      ],
    },
  },
  features: {
    heading: "Total control of your project",
    subtitle:
      "From the first line on the blueprint to handing over the keys. WorkwayTech automates the tedious so you can focus on building.",
    items: [
      {
        title: "Automatic Takeoff",
        description:
          "We analyze your PDF blueprints and instantly generate a detailed list of materials and components.",
      },
      {
        title: "Budget & Line Items",
        description:
          "Automatic generation of bills of quantities and budgets based on real market prices.",
      },
      {
        title: "Construction Schedule",
        description:
          "A smart schedule that organizes every phase of the project so you never miss a deadline.",
      },
      {
        title: "Supplier Connection",
        description:
          "Quote directly with material suppliers and get the best prices for your project.",
      },
      {
        title: "Contractor Network",
        description:
          "Access verified professionals to execute each phase and manage their progress-based payments.",
      },
      {
        title: "Evidence & Payments",
        description:
          "Attach photos and documents of the work. Pay only when incremental progress is validated.",
      },
    ],
  },
  suppliers: {
    heading: "Partner Suppliers",
    subtitle:
      "We work with material and construction-service suppliers so you can quote and buy directly from your project.",
  },
  how: {
    heading: "Smart workflow",
    steps: [
      {
        step: "01",
        title: "Upload your Blueprint",
        text: "Upload your PDF file. Our AI automatically detects walls, openings, materials and dimensions.",
      },
      {
        step: "02",
        title: "Generate Documentation",
        text: "Get the takeoff, bill of quantities and base budget in seconds. Pay only for what you generate.",
      },
      {
        step: "03",
        title: "Connect & Execute",
        text: "Buy materials from local suppliers and assign tasks to contractors in our network.",
      },
      {
        step: "04",
        title: "Pay by Progress",
        text: "Validate progress with photographic evidence and release incremental payments securely.",
      },
    ],
    evidence: {
      title: "Progress Evidence",
      phase: "Phase: Foundation - 100%",
      release: "Release Payment: $12,400.00",
    },
  },
  pricing: {
    heading: "Transparent pricing",
    subtitle:
      "Sign up for free and explore the platform. You only pay when you need to generate official documents for your project.",
    free: {
      name: "Sign Up",
      price: "$0",
      features: [
        "Access to the contractor network",
        "Blueprint visualization",
        "Evidence management",
        "Progress-based payments",
      ],
      cta: "Create Free Account",
    },
    gen: {
      badge: "Pay-per-use",
      name: "Generation",
      pricePre: "",
      priceHighlight: "Variable",
      pricePost: " Cost",
      features: [
        "Detailed takeoff",
        "Bill of quantities",
        "Parametric budget",
        "Smart construction schedule",
      ],
      cta: "Start Generating",
    },
  },
  ctaFinal: {
    titleLine1: "Your dream project,",
    titleLine2: "under control.",
    subtitle:
      "Join the new era of digital construction. More efficient, more transparent, more WorkwayTech.",
    signUp: "Sign Up Now",
    talk: "Talk to an Expert",
  },
  footer: {
    description:
      "A comprehensive platform for managing, budgeting and executing construction projects with AI.",
    toolsHeading: "Tools",
    tools: [
      "Takeoff Generator",
      "Bill of Quantities",
      "Budgeter",
      "Construction Schedule",
    ],
    legalHeading: "Legal",
    legal: ["Privacy", "Terms of Use", "Security"],
    rights: "All rights reserved.",
    bottom: ["Cookies", "Sitemap", "Accessibility"],
  },
  a11y: {
    toggleMenu: "Open menu",
    switchLanguage: "Change language",
  },
};

export const translations: Record<Language, Translation> = { es, en };

function detectInitialLanguage(): Language {
  if (typeof window === "undefined") return "es";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") return stored;
  } catch {
    // localStorage may be unavailable (e.g. private mode); fall back to detection.
  }
  const nav = window.navigator?.language?.toLowerCase() ?? "";
  return nav.startsWith("en") ? "en" : "es";
}

export function useLanguage() {
  const [lang, setLangState] = useState<Language>(detectInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore write failures (e.g. private mode / storage disabled).
    }
  }, [lang]);

  const setLang = useCallback((next: Language) => setLangState(next), []);

  return { lang, setLang, t: translations[lang] };
}
