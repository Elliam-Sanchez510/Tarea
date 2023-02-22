import './style.css'
import { age, career, hobbies, name, profesion } from './types';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

<h1>Hola mi nombre es ${name}, tengo ${age} años,
soy ${profesion} y en tiempo libre me gusta aprender a ${hobbies}
y estudio la carrera de ${career}
</h1>

<section></section>

<p>
<h1>Soy una persona amante de la tecnología,</h1>
<h2>En tiempo libre suelo revisar mis redes sociales y aprender un poco de diseño,</h2>
<h3>Ademas me gusta ver videos en YoubeTube sobre novedades de tecnologías.</h3>
</p>
`;
