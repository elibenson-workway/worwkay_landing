/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  FileText,
  Calculator,
  Calendar,
  Users,
  Truck,
  CheckCircle2,
  ArrowRight,
  Upload,
  ShieldCheck,
  BarChart,
  Menu,
  X,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <FileText className="w-6 h-6 text-amber-500" />,
      title: "Despiece Automático",
      description: "Analizamos tus planos en PDF y generamos el listado detallado de materiales y componentes al instante."
    },
    {
      icon: <Calculator className="w-6 h-6 text-amber-500" />,
      title: "Presupuesto y Conceptos",
      description: "Generación automática de catálogos de conceptos y presupuestos basados en precios de mercado reales."
    },
    {
      icon: <Calendar className="w-6 h-6 text-amber-500" />,
      title: "Calendario de Obra",
      description: "Cronograma inteligente que organiza cada fase del proyecto para que nunca pierdas un plazo."
    },
    {
      icon: <Truck className="w-6 h-6 text-amber-500" />,
      title: "Conexión con Proveedores",
      description: "Cotiza directamente con proveedores de materiales y obtén los mejores precios para tu proyecto."
    },
    {
      icon: <Users className="w-6 h-6 text-amber-500" />,
      title: "Red de Contratistas",
      description: "Accede a profesionales verificados para ejecutar cada fase y gestiona sus pagos por avance."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
      title: "Evidencias y Pagos",
      description: "Adjunta fotos y documentos del desarrollo. Paga solo cuando el avance incremental sea validado."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="WorkwayTech" className="h-10 w-auto" />
              <span className="text-2xl font-display font-bold tracking-tight text-slate-900">WorkwayTech</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Funciones</a>
              <a href="#how-it-works" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Cómo funciona</a>
              <a href="#proveedores" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Proveedores</a>
              <a href="#pricing" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Precios</a>
              <div className="h-6 w-px bg-slate-200 mx-2" />
              <a href="https://app.workwaytech.com/" className="text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors">Iniciar Sesión</a>
              <a href="https://app.workwaytech.com/" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-md">
                Registro Gratis
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-900">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-200 px-4 py-8 flex flex-col gap-6 shadow-xl"
          >
            <a href="#features" className="text-lg font-bold text-slate-900">Funciones</a>
            <a href="#how-it-works" className="text-lg font-bold text-slate-900">Cómo funciona</a>
            <a href="#proveedores" className="text-lg font-bold text-slate-900">Proveedores</a>
            <a href="#pricing" className="text-lg font-bold text-slate-900">Precios</a>
            <a href="https://app.workwaytech.com/" className="w-full text-center bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg">
              Registro Gratis
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-28 sm:pt-40 pb-16 sm:pb-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-200 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-100 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                Revolución en la Construcción
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6 sm:mb-8">
                De plano PDF a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">obra ejecutada</span> en un clic.
              </h1>
              <p className="text-base sm:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-xl">
                Sube tus planos y deja que nuestra IA genere el despiece, catálogo de conceptos presupuesto y calendario. Conecta con proveedores y paga a contratistas por avance real.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="w-full sm:w-auto bg-slate-900 text-white px-10 py-4 sm:py-5 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 group">
                  <Upload className="w-5 h-5 text-amber-500" />
                  Subir Plano PDF
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-200 px-10 py-4 sm:py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                  Ver Ejemplo
                </button>
              </div>
              <p className="mt-6 text-sm text-slate-500 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" /> Registro gratuito. Paga solo por documento generado.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="bg-white rounded-3xl p-4 shadow-2xl border border-slate-200 relative z-10">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                        <Calculator className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">Presupuesto Generado</h4>
                        <p className="text-xs text-slate-500">Proyecto: Residencia Arcos</p>
                      </div>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-green-700 transition-colors">
                      Guardar Proyecto
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { label: "Cimentación", value: "$45,200.00", progress: 100 },
                      { label: "Estructura", value: "$128,500.00", progress: 65 },
                      { label: "Instalaciones", value: "$82,100.00", progress: 20 },
                    ].map((item, i) => (
                      <div key={i} className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-bold">{item.label}</span>
                          <span className="text-sm font-mono text-slate-600">{item.value}</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-amber-500 rounded-full" 
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Control total de tu obra</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Desde el primer trazo en el plano hasta la entrega de llaves. WorkwayTech automatiza lo tedioso para que te enfoques en construir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -8 }}
                className="p-6 lg:p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 border border-slate-100">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proveedores */}
      <section id="proveedores" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Proveedores aliados</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Trabajamos con proveedores de materiales y servicios de construcción para que cotices y compres directo desde tu proyecto.
            </p>
          </div>

          <div className="flex justify-center">
            <motion.div
              whileHover={{ y: -8 }}
              className="flex flex-col items-center justify-center gap-4 p-6 sm:p-10 rounded-[2rem] bg-white border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300"
            >
              <img
                src="/macon-jr-logo.png"
                alt="Macon Jr"
                className="h-16 sm:h-20 w-auto object-contain"
              />
              <span className="text-sm font-bold text-slate-900 text-center">Macon Jr</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">Flujo de trabajo inteligente</h2>
              <div className="space-y-12">
                {[
                  { step: "01", title: "Sube tu Plano", text: "Carga tu archivo PDF. Nuestra IA detecta muros, vanos, materiales y dimensiones automáticamente." },
                  { step: "02", title: "Genera Documentación", text: "Obtén el despiece, catálogo de conceptos y presupuesto base en segundos. Paga solo por lo que generas." },
                  { step: "03", title: "Conecta y Ejecuta", text: "Compra materiales con proveedores locales y asigna tareas a contratistas de nuestra red." },
                  { step: "04", title: "Pago por Avance", text: "Valida el progreso con evidencias fotográficas y libera pagos incrementales de forma segura." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="text-4xl font-display font-black text-slate-800 group-hover:text-amber-500 transition-colors duration-300">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square bg-slate-800 rounded-[3rem] p-8 border border-slate-700 shadow-2xl overflow-hidden group">
                <img 
                  src="https://picsum.photos/seed/construction/800/800" 
                  alt="Construction Progress" 
                  className="w-full h-full object-cover rounded-2xl opacity-60 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900">EV</div>
                      <div>
                        <p className="text-sm font-bold">Evidencia de Avance</p>
                        <p className="text-xs text-slate-400">Fase: Cimentación - 100%</p>
                      </div>
                    </div>
                    <button className="w-full bg-amber-500 text-slate-900 py-3 rounded-xl font-bold text-sm hover:bg-amber-600 transition-colors">
                      Liberar Pago: $12,400.00
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Precios transparentes</h2>
            <p className="text-slate-600 text-lg">
              Regístrate gratis y explora la plataforma. Solo pagas cuando necesitas generar documentos oficiales para tu obra.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-200">
              <h3 className="text-2xl font-bold mb-2">Registro</h3>
              <div className="text-5xl font-display font-black mb-6">$0</div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-600" /> Acceso a la red de contratistas</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-600" /> Visualización de planos</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-600" /> Gestión de evidencias</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-600" /> Pagos por avance</li>
              </ul>
              <a href="https://app.workwaytech.com/" className="block w-full text-center py-4 rounded-2xl border-2 border-slate-900 font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all">
                Crear Cuenta Gratis
              </a>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl shadow-amber-500/10">
              <div className="absolute top-0 right-0 bg-amber-500 text-slate-900 px-6 py-1 font-bold text-xs uppercase tracking-widest rounded-bl-2xl">
                Pay-per-use
              </div>
              <h3 className="text-2xl font-bold mb-2">Generación</h3>
              <div className="text-5xl font-display font-black mb-6">Costo <span className="text-amber-500">Variable</span></div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-400"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Despiece detallado</li>
                <li className="flex items-center gap-3 text-slate-400"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Catálogo de conceptos</li>
                <li className="flex items-center gap-3 text-slate-400"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Presupuesto paramétrico</li>
                <li className="flex items-center gap-3 text-slate-400"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Calendario de obra inteligente</li>
              </ul>
              <button className="w-full py-4 rounded-2xl bg-amber-500 text-slate-900 font-bold text-lg hover:bg-amber-600 transition-all">
                Empezar a Generar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-6 sm:mb-8">La obra de tus sueños, <br />bajo control.</h2>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">
              Únete a la nueva era de la construcción digital. Más eficiente, más transparente, más WorkwayTech.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="https://app.workwaytech.com/" className="w-full sm:w-auto text-center bg-amber-500 text-slate-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20">
                Registrarme Ahora
              </a>
              <button className="w-full sm:w-auto bg-transparent text-white border-2 border-slate-700 px-12 py-5 rounded-full font-bold text-xl hover:bg-white/5 transition-all">
                Hablar con un Experto
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 border-t border-slate-200 relative overflow-hidden">
        <div className="dot-grid absolute inset-0 pointer-events-none opacity-40" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-20">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <img src="/logo.png" alt="WorkwayTech" className="h-10 w-auto" />
                <span className="text-2xl font-display font-bold tracking-tight text-slate-900">WorkwayTech</span>
              </div>
              <p className="text-slate-500 max-w-xs mb-8 leading-relaxed">
                Plataforma integral para la gestión, presupuestación y ejecución de proyectos de construcción mediante IA.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-slate-900 transition-all">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-current rounded-sm opacity-20" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-8">Herramientas</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-amber-600 transition-colors">Generador de Despiece</a></li>
                <li><a href="#" className="hover:text-amber-600 transition-colors">Catálogo de Conceptos</a></li>
                <li><a href="#" className="hover:text-amber-600 transition-colors">Presupuestador</a></li>
                <li><a href="#" className="hover:text-amber-600 transition-colors">Calendario de Obra</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-8">Legal</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-amber-600 transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-amber-600 transition-colors">Términos de Uso</a></li>
                <li><a href="#" className="hover:text-amber-600 transition-colors">Seguridad</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-xs">
            <p>© {new Date().getFullYear()} WorkwayTech Technologies S.A. de C.V. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-600 transition-colors">Cookies</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Sitemap</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Accesibilidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
