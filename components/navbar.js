/** @format */

import React from "react";
import styles from "@/styles/navbar.module.css";
import { useRouter } from "next/router";
const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.navbar}>
				<div className={styles.logo}></div>
				<div className={styles.navlinks}>
                    <ul>
                        
                    </ul>
                </div>
			</div>
		</div>
	);
};

export default Navbar;
