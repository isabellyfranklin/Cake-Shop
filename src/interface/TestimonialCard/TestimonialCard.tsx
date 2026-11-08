import styles from './testimonialCard.module.css'
import start from '../../assets/icons/start-icon.svg'

interface props {
    userText: string;
    userImage?: string;
    userName: string;
    userTypeCake: string;
}

export default function TestimonialCard( {userText, userImage, userName, userTypeCake}: props ){
    return(
        <div className={styles.card} >
            <div className={styles.media} role="img" aria-label="Avaliação: 5 de 5 estrelas">
                {[1, 2, 3, 4, 5].map((n) => (
                    <img key={n} className={styles.image} src={start} alt="" />
                ))}
            </div>

            <p className={styles.text}>“{userText}”</p>

            <footer className={styles.author}>

                 <figure className={styles.footerMedia}>
                    <img
                        className={styles.footerImage}
                        src={userImage}
                        alt={`Foto de ${userName}`}
                    />
                </figure>

                <div className={styles.info}>
                    <p className={styles.name}>{userName}</p>
                    <span className={styles.cake}>
                        {userTypeCake}
                    </span>
                </div>
                
            </footer>

        </div>
    )
}