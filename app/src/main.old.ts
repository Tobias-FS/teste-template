import './style.css'

import page from 'page';

page( '/', () => carregarPagina( 'home.html', '', '/src/home/home.ts' ) );
page( '/home', () => carregarPagina( 'home.html', '', '/src/home/home.ts' ) );
page( '/login', () => carregarPagina( 'public/login.html', '', '/src/login/login.ts' ) );
page( '*', () => carregarPagina( 'public/404.html' ) );
page();


// window.addEventListener('popstate', (event) => {
//   event.preventDefault();
//   rotear( window.location.pathname );
// });

// window.onload = () => {
//   rotear( window.location.pathname );
// };

// async function rotear( rota: string ): Promise< void > {
//   if ( rota === '/' || rota === '/home' ) {
//     await carregarPagina( 'public/home.html', '', 'src/home/home.js' );
//   } else if ( rota === '/login' ) {
//       await carregarPagina( 'public/login.html', '', 'src/login/login.js' );
//   } else {
//     await carregarPagina( 'public/404.html' );
//   }
// }


async function carregarPagina( pagina: string, css?: string, js?: string ): Promise< void > {

  const app = document.getElementById( 'app' )!; // main

  app.innerHTML = await ( await fetch( pagina ) ).text();

  if ( css ) {
    const idCSS = gerarId( css );
    if ( ! document.getElementById( idCSS ) ) {
      const link = document.createElement( 'link' );
      link.rel = 'stylesheet';
      link.href = css;
      link.id = idCSS;
      app.appendChild( link );
    }
  }

  if ( js ) {
    const idJS = gerarId( js );
    if ( ! document.getElementById( idJS ) ) {
      const script = document.createElement( 'script' );
      script.src = js;
      script.type = 'module';
      script.id = gerarId( js );
      app.appendChild( script );
    }
  }

}

function gerarId( texto: string ): string {
  return texto.replace( '.', '_' ).replace( '/', '_' );
}