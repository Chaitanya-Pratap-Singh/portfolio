/** @format */

import React from "react";
import styles from "@/styles/hero.module.css";

const Hero = () => {
	return (
		<>
			<div className={styles.hero}>
				<div className={styles.heroText}>
					<h1 className={styles.heroHead}>Chaitanya Pratap Singh</h1>
					<p className={styles.heroPara}>
						a passionate web developer, video-editor and graphic designer on a{" "}
						<br /> mission to blend creativity with functionality to craft
						immersive <br />
						digital experiences.
					</p>
				</div>
			</div>

			
		</>
	);
};

export default Hero;
