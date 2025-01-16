import { MagnifyingGlass } from '@phosphor-icons/react'
import styles from './Header.module.css'

export function Header() {
    return (
        <div>
            <header className={styles.header}  >
                <h1>Xedekop</h1>
            </header>

            <div className={styles.searchBar}>
                <MagnifyingGlass/>
                <input type="text" placeholder='Pesquisar...' />
            </div>
        </div>
    )
}