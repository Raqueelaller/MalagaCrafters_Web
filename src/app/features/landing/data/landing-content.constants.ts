import {
  Benefit,
  FaqItem,
  GalleryItem,
  MaterialItem,
  ProcessStep,
  ProjectCategory,
  SelectOption,
} from '../../../core/models/content.models';

export const PROJECT_CATEGORIES: readonly ProjectCategory[] = [
  {
    title: 'Regalos con significado',
    description:
      'Piezas pensadas para una persona, una fecha o una historia que merece recordarse.',
    image: '/images/regalo_parejas_madera_y_metacrilato.png',
    alt: 'Regalo personalizado con la silueta de Tenerife en metacrilato y base de madera grabada',
  },
  {
    title: 'Celebraciones únicas',
    description:
      'Detalles para comuniones, bodas, nacimientos y momentos especiales, creados a medida.',
    image: '/images/tres_en_raya_madera.png',
    alt: 'Tres en raya de madera personalizado para una comunión',
  },
  {
    title: 'Decoración personal',
    description:
      'Nombres, siluetas y composiciones que convierten una idea propia en una pieza decorativa.',
    image: '/images/cuadro_recien_nacida.png',
    alt: 'Cuadro infantil personalizado con nombre y datos de nacimiento',
  },
  {
    title: 'Pasiones hechas pieza',
    description:
      'Diseños inspirados en aficiones, vehículos y símbolos importantes para quien los recibe.',
    image: '/images/gt3_metacrilato.png',
    alt: 'Silueta de un coche GT3 cortada en metacrilato negro',
  },
] as const;

export const MATERIALS: readonly MaterialItem[] = [
  {
    name: 'Madera',
    description:
      'Cálida, natural y versátil. Ideal para detalles, decoración y piezas con grabados de gran carácter.',
    image: '/images/comunion_madera.png',
    alt: 'Yo-yo de madera grabado para una primera comunión',
  },
  {
    name: 'Metacrilato',
    description:
      'Limpio y contemporáneo, permite crear siluetas precisas y diseños con una presencia muy definida.',
    image: '/images/todoterreno_metacrilato.png',
    alt: 'Silueta frontal de un todoterreno cortada en metacrilato negro',
  },
  {
    name: 'Vidrio',
    description:
      'Un soporte elegante para nombres, fechas, dedicatorias y diseños grabados con sutileza.',
    image: '/images/copa_vidrio.png',
    alt: 'Copa de vidrio personalizada mediante grabado láser',
  },
  {
    name: 'Aluminio',
    description:
      'Resistente y moderno, ofrece un contraste nítido para objetos de uso diario personalizados.',
    image: '/images/botella_aluminio.png',
    alt: 'Botella azul de aluminio con un emblema personalizado grabado',
  },
  {
    name: 'Cuero',
    description:
      'Aporta textura y sobriedad a complementos y detalles grabados. Estudiamos cada pieza según su acabado.',
  },
] as const;

export const GALLERY_ITEMS: readonly GalleryItem[] = [
  {
    image: '/images/arbol_navidad_madera.png',
    alt: 'Adorno de Navidad con forma de árbol y nombre grabado',
    caption: 'Tradiciones que también pueden ser personales',
    material: 'Madera',
  },
  {
    image: '/images/bola_navidad_madera.png',
    alt: 'Bola de Navidad de madera calada con nombre personalizado',
    caption: 'Un nombre hace único cada adorno',
    material: 'Madera',
  },
  {
    image: '/images/bola_navidad_madera_blanca.png',
    alt: 'Adorno navideño de madera clara con nombre y copos de nieve',
    caption: 'Diseños a medida para cada celebración',
    material: 'Madera',
  },
  {
    image: '/images/logo_metacrilato.png',
    alt: 'Placa circular personalizada de metacrilato con un coche y el nombre Nissan',
    caption: 'Diseños que llevan una afición a la pared',
    material: 'Metacrilato',
  },
] as const;

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    number: '01',
    title: 'Cuéntanos tu idea',
    description: 'Explícanos qué imaginas, para quién es y cuándo te gustaría tenerlo.',
    icon: 'design',
  },
  {
    number: '02',
    title: 'Estudiamos la propuesta',
    description: 'Revisamos el diseño, el material y los detalles para darte una respuesta clara.',
    icon: 'file',
  },
  {
    number: '03',
    title: 'Creamos tu pieza',
    description: 'Cortamos o grabamos el proyecto con precisión y cuidamos cada acabado.',
    icon: 'precision',
  },
  {
    number: '04',
    title: 'La enviamos',
    description: 'Preparamos tu pedido para que llegue a cualquier punto de España.',
    icon: 'package',
  },
] as const;

export const BENEFITS: readonly Benefit[] = [
  {
    title: 'De verdad personalizado',
    description:
      'No partes de un producto cerrado. Estudiamos tu idea y la adaptamos a lo que quieres contar.',
    icon: 'spark',
  },
  {
    title: 'Una unidad o las que necesites',
    description:
      'Aceptamos cualquier tipo de pedido, desde una única pieza especial hasta varias unidades.',
    icon: 'heart',
  },
  {
    title: 'Materiales con carácter',
    description:
      'Te ayudamos a elegir entre madera, metacrilato, vidrio, aluminio y cuero según el resultado buscado.',
    icon: 'material',
  },
  {
    title: 'Envíos a toda España',
    description:
      'Tu proyecto puede empezar desde cualquier lugar y llegar preparado para disfrutarlo o regalarlo.',
    icon: 'spain',
  },
] as const;

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 'personalizados',
    question: '¿Realizáis diseños completamente personalizados?',
    answer:
      'Sí. Cada proyecto se estudia de forma individual. Las piezas de la galería son ejemplos de trabajos realizados, no un catálogo que limite lo que podemos crear.',
  },
  {
    id: 'archivo-propio',
    question: '¿Puedo enviar mi propio diseño?',
    answer:
      'Sí. Puedes adjuntarlo en el formulario y revisaremos si está preparado para corte o grabado. Si necesita algún ajuste, te lo explicaremos antes de fabricar.',
  },
  {
    id: 'sin-diseno',
    question: '¿Y si todavía no tengo un diseño?',
    answer:
      'No pasa nada. Cuéntanos la idea, el uso y el estilo que buscas. Estudiaremos contigo la mejor manera de convertirla en una pieza real.',
  },
  {
    id: 'materiales',
    question: '¿Qué materiales trabajáis?',
    answer:
      'Trabajamos madera, metacrilato, vidrio, aluminio y cuero. La técnica y el resultado dependen de las características concretas de cada pieza.',
  },
  {
    id: 'precio',
    question: '¿Cómo se calcula el precio?',
    answer:
      'Depende del material, las dimensiones, la complejidad del diseño y el número de unidades. Por eso valoramos cada solicitud de manera personalizada.',
  },
  {
    id: 'plazo',
    question: '¿Cuánto tarda un pedido?',
    answer:
      'El plazo mínimo orientativo de fabricación es de 72 horas. El tiempo definitivo depende de la complejidad y la cantidad; te lo confirmaremos antes de empezar.',
  },
  {
    id: 'unidad',
    question: '¿Puedo pedir una única unidad?',
    answer:
      'Sí. Aceptamos desde una pieza única hasta pedidos de varias unidades, siempre bajo pedido y adaptados al proyecto.',
  },
  {
    id: 'envios',
    question: '¿Realizáis envíos?',
    answer:
      'Sí, realizamos envíos a toda España. Tendremos en cuenta el destino al preparar la propuesta y el plazo estimado.',
  },
  {
    id: 'formatos',
    question: '¿Qué formato de archivo puedo enviar?',
    answer:
      'Puedes adjuntar PDF, SVG, DXF, PNG o JPG. Si tienes otro formato, escríbenos y comprobaremos si podemos utilizarlo.',
  },
] as const;

export const PROJECT_TYPE_OPTIONS: readonly SelectOption[] = [
  { value: 'regalo', label: 'Regalo personalizado' },
  { value: 'decoracion', label: 'Decoración' },
  { value: 'celebracion', label: 'Boda, comunión o celebración' },
  { value: 'grabado', label: 'Grabado sobre un objeto' },
  { value: 'nuevo-pedido', label: 'Nuevo pedido' },
] as const;

export const MATERIAL_OPTIONS: readonly SelectOption[] = [
  { value: 'por-definir', label: 'Necesito asesoramiento' },
  { value: 'madera', label: 'Madera' },
  { value: 'metacrilato', label: 'Metacrilato' },
  { value: 'vidrio', label: 'Vidrio' },
  { value: 'aluminio', label: 'Aluminio' },
  { value: 'cuero', label: 'Cuero' },
] as const;
