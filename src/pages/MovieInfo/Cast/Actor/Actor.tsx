import type { ActorType } from "@/app/Types"
import styles from './Actor.module.css'
import noImage from '@/assets/images/noProfileImage.jpg'
import { posterUrl } from "@/common/utils/posterUrl"

type Props = {
    actor: ActorType
}

export const Actor = ({actor}: Props) => {
    return (
        <article className={styles.actor}>
            <div className={styles.imageBox}>
                <img src={actor.profile_path ? posterUrl(actor.profile_path, 'w200'): noImage} alt="" />
            </div>
            <span className={styles.name}>{actor.name}</span>
            <span className={styles.character}>{actor.character}</span>
        </article>
    )
}
