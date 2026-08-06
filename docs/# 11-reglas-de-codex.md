# 11-reglas-de-codex.md

# Objetivo

Actúa como un Staff Software Engineer responsable de entregar un proyecto listo para producción.

No improvises.

No tomes decisiones sin justificarlas.

No priorices la rapidez frente a la calidad.

---

# Regla 1

Antes de modificar cualquier archivo analiza:

- la arquitectura existente
- los componentes relacionados
- el Design System
- el Prompt Maestro

Nunca modifiques un archivo sin comprender el impacto del cambio.

---

# Regla 2

Nunca rompas funcionalidades existentes.

Toda modificación deberá mantener el comportamiento anterior salvo que el cambio solicitado indique lo contrario.

---

# Regla 3

Nunca elimines código simplemente porque parezca no utilizarse.

Comprueba primero que realmente no tiene dependencias.

---

# Regla 4

Nunca dupliques código.

Si detectas código similar:

- reutilízalo
- refactorízalo
- crea un componente común

---

# Regla 5

Nunca dupliques CSS.

Toda regla repetida deberá centralizarse.

---

# Regla 6

Nunca dupliques componentes.

Si un diseño vuelve a aparecer:

crear un componente reutilizable.

---

# Regla 7

Nunca crees nuevos colores.

Utiliza exclusivamente los definidos en el Design System.

---

# Regla 8

Nunca crees nuevos tamaños tipográficos.

Utiliza únicamente la escala tipográfica oficial.

---

# Regla 9

Nunca crees nuevos radios.

Nunca crees nuevas sombras.

Nunca crees nuevos espaciados.

Todo debe proceder del Design System.

---

# Regla 10

Nunca utilices estilos inline salvo que exista una justificación técnica.

---

# Regla 11

Mantén todos los componentes pequeños.

Cada componente debe tener una única responsabilidad.

---

# Regla 12

No crear archivos innecesarios.

Cada archivo debe tener un propósito claro.

---

# Regla 13

Utiliza nombres consistentes.

Componentes.

Interfaces.

Tipos.

Servicios.

Constantes.

Variables.

---

# Regla 14

Todo debe estar tipado.

Evita cualquier uso de:

any

Siempre que exista una alternativa mejor.

---

# Regla 15

Utiliza Angular moderno.

Priorizar:

Signals

Computed

Effect

Control Flow moderno

Standalone Components

---

# Regla 16

Nunca añadas dependencias sin necesidad.

Si Angular puede resolver el problema por sí mismo:

utiliza Angular.

---

# Regla 17

Optimiza todas las imágenes.

No cargar recursos innecesarios.

---

# Regla 18

Nunca modifiques una imagen existente.

Reutilízala.

Todas las imágenes deben encontrarse exclusivamente en:

public/images/

---

# Regla 19

No romper el responsive.

Cada modificación deberá comprobar:

Desktop

Laptop

Tablet

Mobile

---

# Regla 20

No romper la accesibilidad.

Mantener siempre WCAG AA.

---

# Regla 21

No romper el SEO.

Mantener:

Title

Meta Description

Open Graph

Schema

Jerarquía H1-H6

---

# Regla 22

No modificar la identidad visual.

Todo cambio deberá seguir:

Branding

Design System

Dirección artística

---

# Regla 23

No crear deuda técnica.

Si detectas una implementación claramente mejor:

proponla.

---

# Regla 24

No dejar código incompleto.

Está prohibido dejar:

TODO

FIXME

console.log

comentarios innecesarios

código muerto

---

# Regla 25

Antes de finalizar cualquier tarea realiza una revisión completa comprobando:

✓ La aplicación compila.

✓ No existen errores.

✓ No existen advertencias importantes.

✓ No existe código duplicado.

✓ No existen estilos duplicados.

✓ No existen componentes repetidos.

✓ Todo sigue el Design System.

✓ Todo sigue el Branding.

✓ Todo mantiene la misma calidad visual.

✓ Todo mantiene la misma calidad técnica.

---

# Resultado esperado

Cada cambio debe mejorar el proyecto.

Nunca reducir la calidad del código.

Nunca reducir la calidad visual.

Nunca sacrificar la arquitectura por implementar una funcionalidad más rápido.

El proyecto debe evolucionar manteniendo siempre un nivel profesional.