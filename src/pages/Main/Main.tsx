import { TABS } from '@/common/constants/Tabs'
import styles from './Main.module.css'
import { WelcomeSection } from './WelcomeSection/WecomeSection'
import { Category } from './CategoryBlock/Category'

export const Main = () => {

    return (
        <main className={styles.Main}>
            <WelcomeSection />
            <section className={styles.categories}>
                <div className={styles.container}>
                    {TABS.map((el) => {
                        return <Category endPoint={el.id} title={el.label} key={el.id}/>
                    })}
                </div>
            </section>
        </main>
    )
}