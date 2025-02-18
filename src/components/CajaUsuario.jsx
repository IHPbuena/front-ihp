import '../styles/CajaUsuario.css'

export function CajaUsuario({ avatar="../../public/gustavo.png", correo, nombre }) {
    
    return (
        <article>
            <header>
                <img className="CRS-avatar" src={avatar} alt={`Avatar de ${nombre}`} />

                <div className="CRS-info">
                    <strong>{nombre}</strong>
                    <span>{correo}</span>
                </div>
            </header>

            <aside>
                <button className="CRS-boton-ajustes">
                    <img className="CRS-boton-ajustes-imagen" src="../public/engranajeAjustes.png"/>
                </button>
            </aside>
        </article>
    );
}
