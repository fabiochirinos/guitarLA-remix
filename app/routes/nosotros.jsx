import imagen from '../../public/img/nosotros.jpg';
import styles from '~/styles/nosotros.css';

export function meta() {
  return {
    title: 'GuitarLA - Nosotros',
    description: 'Venta de guitarras, blog de música',
  };
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image',
    },
  ];
}

function Nosotros() {
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>Nosotros</h2>
      <div className='contenido'>
        <img src={imagen} alt='imagen sobre nosotros' />
        <div>
          <p>
            Sed sagittis mi pharetra, rutrum metus et, ultrices ante. In laoreet
            velit molestie, vulputate dui a, aliquam lorem. Nunc efficitur
            auctor aliquet. Mauris congue sapien fringilla mi fringilla
            ultrices. Nullam sed nisi a ligula fermentum imperdiet. Etiam
            faucibus consequat egestas. In sodales sem dui, congue scelerisque
            nunc interdum sit amet. Nulla venenatis libero eros.
          </p>
          <p>
            Sed sagittis mi pharetra, rutrum metus et, ultrices ante. In laoreet
            velit molestie, vulputate dui a, aliquam lorem. Nunc efficitur
            auctor aliquet. Mauris congue sapien fringilla mi fringilla
            ultrices. Nullam sed nisi a ligula fermentum imperdiet. Etiam
            faucibus consequat egestas. In sodales sem dui, congue scelerisque
            nunc interdum sit amet. Nulla venenatis libero eros.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
