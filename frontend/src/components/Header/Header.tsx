import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className={styles.nav}>
          <Link to="/">
            <img src="./img/logo.svg" alt="Ильинский онлайн" />
          </Link>
          <Link to="/catalog" className={styles.catalogButton}>
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="18" height="2" rx="1" fill="white" />
              <rect y="5" width="18" height="2" rx="1" fill="white" />
              <rect y="10" width="18" height="2" rx="1" fill="white" />
            </svg>
            <span>Каталог</span>
          </Link>
          <form className={styles.form}>
            <input type="text" placeholder="Начать поиск" />
            <button type="submit">
              <img src="./img/search.svg" alt="искать" />
            </button>
          </form>
          <div className={styles.delivery}>
            <span>Выберите способ получения</span>
            <span>Доставка или самовывоз</span>
          </div>
          <Link to="/cabinet" className={styles.miniBtn}>
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1756 2.20956C18.9981 1.01731 17.4296 0.357569 15.7635 0.357569C14.0973 0.357569 12.5242 1.01731 11.3467 2.21427V2.21427C11.1598 2.40356 10.8542 2.40356 10.6672 2.21427L10.6579 2.20485C9.47577 1.00789 7.90733 0.348145 6.23651 0.348145C4.57034 0.348145 3.00655 1.00317 1.82906 2.20013C0.646921 3.39709 0 4.98519 0 6.67224C0 8.35929 0.651575 9.94739 1.83372 11.1396L10.3368 19.7493C10.5136 19.9283 10.7556 20.032 11.0116 20.032C11.2629 20.032 11.505 19.9283 11.6865 19.7493L20.1663 11.1538C21.3484 9.95681 21.9953 8.36872 22 6.68167C22.0046 4.99461 21.3531 3.40652 20.1756 2.20956Z"
                fill="#E1E1E1"
              />
            </svg>
          </Link>
          <Link to="/cabinet" className={styles.miniBtn}>
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.90587 9.95668C11.3096 9.95668 13.4333 7.82436 13.6414 5.20303C13.7448 3.88614 13.3063 2.65805 12.4065 1.74567C11.5163 0.844443 10.2719 0.348145 8.90587 0.348145C7.52893 0.348145 6.28358 0.84144 5.39977 1.73709C4.50594 2.64261 4.07018 3.87328 4.17036 5.20217C4.3748 7.82393 6.49805 9.95668 8.90587 9.95668Z"
                fill="#E1E1E1"
              />
              <path
                d="M17.7859 17.8031C17.4245 15.7529 16.2963 14.0307 14.5236 12.8222C12.9492 11.7489 10.9542 11.1578 8.90625 11.1578C6.85824 11.1578 4.86333 11.7489 3.2889 12.8217C1.51622 14.0303 0.387958 15.7525 0.0265706 17.8026C-0.0560689 18.2725 0.056115 18.7371 0.334435 19.0773C0.460671 19.2323 0.619176 19.3566 0.798374 19.441C0.977573 19.5254 1.17294 19.5678 1.37021 19.5651H16.4423C16.6397 19.568 16.8352 19.5257 17.0145 19.4414C17.1939 19.3571 17.3525 19.2328 17.4789 19.0777C17.7564 18.7375 17.8686 18.2729 17.7859 17.8031Z"
                fill="#E1E1E1"
              />
            </svg>
          </Link>
          <Link to="/basket" className={styles.basketBtn}>
            <img src="./img/basketBtn.svg" alt="basket" />
            <span>Корзина</span>
          </Link>
        </nav>
        <ul className={styles.categories}></ul>
      </div>
    </header>
  );
};

export default Header;
