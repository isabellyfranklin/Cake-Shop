import style from './testimonialCard.module.css'
import start from '../../assets/icons/start-icon.svg'

interface props {
    userText: string;
    userImage?: string;
    userName: string;
    userTypeCake: string;
}

export default function TestimonialCard( {userText, userImage, userName, userTypeCake}: props ){
    return(
        <div className={style.card} >
            <figure className={style.media}>
                <img className={style.image} src={start} alt="estrelas" />
                <img className={style.image} src={start} alt="estrelas" />
                <img className={style.image} src={start} alt="estrelas" />
                <img className={style.image} src={start} alt="estrelas" />
                <img className={style.image} src={start} alt="estrelas" />
            </figure>

            <p className={style.text}>“{userText}”</p>

            <footer className={style.author}>

                 <figure className={style.footerMedia}>
                    <img
                        className={style.footerImage}
                        src={userImage}
                        alt="Imagem do usuario"
                    />
                </figure>

                <div className={style.info}>
                    <p className={style.name}>{userName}</p>
                    <span className={style.cake}>
                        {userTypeCake}
                    </span>
                </div>
                
            </footer>

        </div>
    )
}