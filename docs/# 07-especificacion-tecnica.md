# 07-especificacion-tecnica.md

# Objetivo

Actúa como un Software Architect y Frontend Lead con más de 15 años de experiencia desarrollando aplicaciones Angular para empresas internacionales.

Has trabajado en proyectos para empresas como:

- Google
- Microsoft
- Stripe
- Vercel
- Airbnb
- Notion

Tu objetivo no es únicamente desarrollar una web funcional.

Debes desarrollar una aplicación mantenible, escalable, reutilizable, optimizada y preparada para crecer durante los próximos años.

No simplifiques ninguna decisión técnica.

Todas las decisiones deberán justificarse siguiendo buenas prácticas.

---

# Tecnologías

Utilizar exclusivamente:

- Angular 21
- TypeScript
- SCSS
- HTML semántico
- Signals
- Control Flow (@if, @for, @switch)
- Standalone Components

No utilizar tecnologías adicionales salvo que sean estrictamente necesarias.

---

# Librerías

Priorizar siempre Angular nativo.

No instalar librerías innecesarias.

Evitar dependencias que puedan implementarse fácilmente.

---

# Arquitectura

Utilizar una arquitectura modular.

Separar claramente:

core/

shared/

features/

layout/

pages/

components/

services/

models/

interfaces/

types/

utils/

constants/

guards/

pipes/

directives/

assets/

public/

La estructura debe permitir añadir nuevas páginas sin modificar las existentes.

---

# Organización de componentes

Cada componente deberá tener una única responsabilidad.

No crear componentes gigantes.

Dividir la aplicación en pequeños bloques reutilizables.

Ejemplos:

Navbar

Footer

Hero

Section

Card

Gallery

Button

FAQ

Accordion

Material Card

Feature Card

CTA

Contact Form

Badge

Icon

Section Title

Container

Todos ellos deberán reutilizarse siempre que sea posible.

---

# Componentes reutilizables

Está completamente prohibido duplicar componentes.

Si un componente aparece dos veces:

debe reutilizarse.

Si cambia el diseño:

deberá actualizarse automáticamente en toda la aplicación.

---

# Angular Material

Prohibido utilizar Angular Material como diseño.

No utilizar directamente:

mat-card

mat-button

mat-toolbar

mat-form-field

etc.

Si se utiliza alguna funcionalidad puntual deberá encapsularse completamente.

La apariencia final deberá pertenecer únicamente a MalagaCrafters.

---

# Bootstrap

Prohibido.

---

# Tailwind

Prohibido.

---

# CSS

No duplicar estilos.

Centralizar:

colores

tipografía

espaciados

sombras

radios

breakpoints

animaciones

duraciones

transiciones

Todo deberá provenir del Design System.

---

# SCSS

Organizar los estilos siguiendo una estructura escalable.

No crear hojas gigantes.

Reutilizar variables.

Reutilizar mixins.

Reutilizar funciones.

---

# Variables

Todo valor reutilizable deberá declararse una única vez.

Nunca escribir colores repetidos.

Nunca escribir sombras repetidas.

Nunca escribir radios repetidos.

Nunca escribir espaciados repetidos.

---

# Responsive

Mobile First.

Toda la aplicación deberá adaptarse correctamente a:

Desktop XL

Desktop

Laptop

Tablet

Mobile

No ocultar contenido importante.

No modificar la identidad visual.

---

# SEO

Implementar:

Title

Meta Description

Canonical

Open Graph

Twitter Cards

Favicon

Robots

Sitemap

Schema.org

Jerarquía H1-H6 correcta.

Alt en todas las imágenes.

HTML completamente semántico.

---

# Accesibilidad

Cumplir WCAG AA.

Implementar:

focus visible

navegación mediante teclado

aria-label

aria-labelledby

aria-expanded

aria-hidden

role

contrastes

formularios accesibles

mensajes accesibles

No depender únicamente del color.

---

# Rendimiento

Optimizar absolutamente todos los recursos.

Las imágenes deberán:

estar comprimidas

mantener calidad

utilizar formatos modernos cuando sea posible

No cargar imágenes innecesariamente grandes.

Lazy Load siempre que tenga sentido.

---

# Gestión de imágenes

Todas las imágenes deberán almacenarse únicamente en:

public/images/

Está prohibido duplicarlas.

Si la misma imagen se utiliza varias veces:

deberá reutilizarse.

---

# Formularios

No crear backend.

No crear API.

No crear base de datos.

El formulario deberá funcionar mediante Netlify Forms.

Campos:

Nombre

Correo electrónico

Tipo de proyecto

Material

Descripción

Archivo adjunto

Fecha orientativa

Consentimiento legal

Mostrar claramente:

"Plazo mínimo orientativo de fabricación: 72 horas."

---

# Validaciones

Validar:

campos obligatorios

correo electrónico

longitud

tipo de archivo

tamaño máximo

errores

éxito

focus

Todo sin backend.

---

# Contacto alternativo

Además del formulario mostrar:

Correo electrónico

Instagram

Ambos deberán funcionar correctamente.

---

# Estado de carga

Toda acción deberá mostrar feedback.

Ejemplos:

botón deshabilitado

mensaje de envío

errores

éxito

archivo cargado

archivo eliminado

---

# Animaciones

Todas deberán seguir el Design System.

No crear animaciones distintas según el componente.

Mantener:

duración

easing

filosofía

---

# Navegación

Scroll suave.

Navbar sticky.

Indicador de sección activa.

Navegación mediante anchors.

No utilizar routing para las secciones de la Landing.

Únicamente existirán rutas independientes para:

/

politica-privacidad

politica-cookies

aviso-legal

---

# Código

El código deberá ser:

limpio

legible

escalable

documentado cuando sea necesario

sin duplicaciones

sin código muerto

sin comentarios innecesarios

---

# TypeScript

Activar modo estricto.

Evitar any.

Tipar absolutamente todo.

Utilizar interfaces y tipos cuando corresponda.

---

# Signals

Utilizar Signals siempre que sean la mejor opción.

Evitar patrones antiguos cuando exista una alternativa moderna en Angular 21.

---

# Control Flow

Utilizar exclusivamente:

@if

@for

@switch

No utilizar *ngIf ni *ngFor salvo que exista una razón técnica de peso.

---

# Organización

Mantener nombres consistentes.

Utilizar una convención homogénea para:

componentes

interfaces

servicios

tipos

archivos

carpetas

---

# Seguridad

No exponer información innecesaria.

No incluir claves.

No incluir secretos.

No utilizar enlaces inseguros.

Validar correctamente el formulario.

---

# Escalabilidad

La arquitectura deberá permitir añadir fácilmente:

nuevos materiales

nuevos trabajos

nuevas galerías

nuevas secciones

idiomas

backend

base de datos

sin necesidad de reestructurar el proyecto.

---

# Calidad

Antes de considerar finalizada la implementación comprobar:

✓ No existe código duplicado.

✓ No existen componentes repetidos.

✓ No existen estilos duplicados.

✓ Todas las imágenes proceden de public/images.

✓ Todas las cards reutilizan el mismo componente.

✓ Todos los botones reutilizan el mismo componente.

✓ Todo sigue el Design System.

✓ Todo cumple WCAG AA.

✓ SEO completo.

✓ Responsive correcto.

✓ Rendimiento optimizado.

✓ Lighthouse superior a 95 en Performance, Accessibility, Best Practices y SEO cuando sea razonablemente alcanzable para una landing estática.

---

# Restricciones

Prohibido:

Bootstrap

Tailwind

jQuery

AngularJS

Código duplicado

Componentes gigantes

Estilos inline innecesarios

Dependencias sin justificar

Backend

Base de datos

API

Panel de administración

Login

Registro

Ecommerce

Pasarela de pago

---

# Resultado esperado

El código debe parecer desarrollado por un equipo Senior especializado en Angular.

La aplicación debe ser fácilmente mantenible, escalable y preparada para evolucionar sin rehacer la arquitectura.

No escribir código.

Describe únicamente las reglas obligatorias de implementación.