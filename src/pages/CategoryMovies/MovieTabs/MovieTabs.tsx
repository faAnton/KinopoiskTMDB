

import { TABS } from '@/common/constants/Tabs'
import styles from './MovieTabs.module.css'
import type { MovieCategory } from '@/app/Types'


type Props = {
    activeCategory: MovieCategory
    onCategoryChange: (category: MovieCategory) => void
}

export const MovieTabs = ({ activeCategory, onCategoryChange }: Props) => {
    
    return (
        <div className={styles.tabsContainer}>
            {TABS.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onCategoryChange(tab.id)}
                    className={`${styles.tabButton} ${
                        activeCategory === tab.id ? styles.active : ''
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    )
}