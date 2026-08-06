export type LegalPageKey = 'legal' | 'privacy' | 'cookies';

export interface LegalSection {
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly items?: readonly string[];
}
export interface LegalDocumentContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly sections: readonly LegalSection[];
}

export const LEGAL_CONTENT: Readonly<Record<LegalPageKey, LegalDocumentContent>> = {
  legal: {
    eyebrow: 'Información legal',
    title: 'Aviso legal',
    description: 'Condiciones generales de acceso y uso del sitio web de MalagaCrafters.',
    sections: [
      {
        title: 'Identificación y contacto',
        paragraphs: [
          'Este sitio web es gestionado bajo la marca MalagaCrafters. Para cualquier consulta relacionada con el sitio o con nuestros servicios puedes escribir a malagacrafters@gmail.com.',
          'MalagaCrafters no dispone de establecimiento abierto al público. La web tiene carácter informativo y permite solicitar proyectos personalizados.',
        ],
      },
      {
        title: 'Objeto del sitio',
        paragraphs: [
          'La información y las fotografías publicadas muestran ejemplos de trabajos de diseño, corte y grabado láser. No constituyen un catálogo cerrado, una oferta contractual ni una tienda online.',
          'Cada solicitud se estudia individualmente. Las condiciones, el precio y el plazo se confirman antes de iniciar cualquier trabajo.',
        ],
      },
      {
        title: 'Uso responsable',
        paragraphs: [
          'La persona usuaria se compromete a utilizar el sitio de forma lícita y a no intentar alterar su funcionamiento, acceder a zonas restringidas o introducir contenido dañino.',
        ],
      },
      {
        title: 'Propiedad intelectual',
        paragraphs: [
          'El diseño del sitio, la identidad visual, los textos y las fotografías pertenecen a MalagaCrafters o se utilizan con autorización. No se permite su reproducción, transformación o explotación comercial sin permiso expreso.',
          'Las marcas, logotipos o diseños de terceros que puedan aparecer en trabajos personalizados pertenecen a sus respectivos titulares.',
        ],
      },
      {
        title: 'Responsabilidad',
        paragraphs: [
          'Se procura mantener la información disponible y actualizada, pero pueden producirse interrupciones o errores técnicos. Los enlaces a Instagram y TikTok conducen a plataformas externas con sus propias condiciones y políticas.',
        ],
      },
    ],
  },
  privacy: {
    eyebrow: 'Tus datos',
    title: 'Política de privacidad',
    description: 'Cómo utilizamos la información que nos facilitas al solicitar un proyecto.',
    sections: [
      {
        title: 'Responsable y contacto',
        paragraphs: [
          'La información enviada a través de esta web es gestionada por MalagaCrafters. Puedes contactar en malagacrafters@gmail.com para cualquier cuestión sobre privacidad.',
        ],
      },
      {
        title: 'Datos que tratamos',
        paragraphs: [
          'El formulario puede recoger nombre, correo electrónico, tipo de proyecto, material, descripción, fecha orientativa y, de forma opcional, un archivo relacionado con el diseño.',
        ],
      },
      {
        title: 'Finalidad y base jurídica',
        paragraphs: [
          'Utilizamos estos datos exclusivamente para estudiar tu solicitud, responderte, preparar una propuesta y mantener las comunicaciones necesarias sobre el posible proyecto.',
          'La base jurídica es tu consentimiento al enviar el formulario y, si aceptas una propuesta, la aplicación de medidas precontractuales o la ejecución del encargo.',
        ],
      },
      {
        title: 'Conservación y destinatarios',
        paragraphs: [
          'Conservaremos la información durante el tiempo necesario para atender la solicitud y cumplir las obligaciones que puedan derivarse del encargo. No vendemos ni utilizamos tus datos para publicidad de terceros.',
          'El formulario se procesa mediante Netlify Forms, por lo que Netlify puede actuar como proveedor tecnológico encargado del tratamiento. El correo se gestiona mediante el proveedor de la cuenta indicada.',
        ],
      },
      {
        title: 'Tus derechos',
        paragraphs: [
          'Puedes solicitar acceso, rectificación, supresión, limitación, oposición o portabilidad escribiendo a malagacrafters@gmail.com. Para proteger tus datos, podremos pedir información que permita verificar tu identidad.',
        ],
      },
      {
        title: 'Archivos enviados',
        paragraphs: [
          'Envía únicamente archivos sobre los que tengas autorización y evita incluir datos personales innecesarios. Los archivos se utilizarán solo para valorar o realizar el proyecto solicitado.',
        ],
      },
    ],
  },
  cookies: {
    eyebrow: 'Navegación clara',
    title: 'Política de cookies',
    description: 'Información sobre el uso de cookies y tecnologías similares en esta web.',
    sections: [
      {
        title: 'Uso actual de cookies',
        paragraphs: [
          'Esta web no utiliza cookies publicitarias, de analítica ni de personalización y no instala rastreadores propios para seguir tu actividad. Por este motivo no se muestra un panel de consentimiento.',
        ],
      },
      {
        title: 'Servicios externos',
        paragraphs: [
          'Los enlaces a Instagram y TikTok no cargan contenido incrustado dentro de la web. Solo al seguirlos accederás a esas plataformas, que aplicarán sus propias políticas de cookies.',
        ],
      },
      {
        title: 'Cambios futuros',
        paragraphs: [
          'Si en el futuro se incorpora un servicio que requiera cookies no esenciales, esta política se actualizará y se solicitará consentimiento antes de instalarlas.',
        ],
      },
      {
        title: 'Configuración del navegador',
        paragraphs: [
          'Puedes consultar, bloquear o eliminar cookies desde la configuración de tu navegador. Dado que actualmente no utilizamos cookies no esenciales, hacerlo no debería afectar a las funciones principales de la web.',
        ],
      },
    ],
  },
} as const;
