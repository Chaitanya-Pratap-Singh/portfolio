/** @format */

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Hero from "@/components/hero";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export async function getServerSideProps(context) {
	const client = createClient({
		projectId: "m5qc4ajs",
		dataset: "production",
		useCdn: false,
	});
	const query = `*[_type == "project" && favourite == true][0...3]
	`;
	const projects = await client.fetch(query);

	return {
		props: {
			projects,
		},
	};
}

export default function Home({ projects }) {
	const client = createClient({
		projectId: "m5qc4ajs",
		dataset: "production",
		useCdn: false,
	});

	const builder = imageUrlBuilder(client);
	const colorMap = {
		NextJS: "#0070f3",
		Sanity: "#f44",
		ReactJS: "#61dafb",
		HTML: "#e34c26",
		CSS: "#264de4",
		TailwindCSS: "#38b2ac",
		Javascript: "#f0db4f",
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Chaitanya Pratap Singh</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
			<div className={styles.aboutMe}>
				<h3>About me</h3>
				<p>
					<span>
						Welcome to my corner of the web! I'm Chaitanya , a multi-talented{" "}
						<br /> creator fueled by a love for coding, design, and storytelling
					</span>{" "}
					<br />
					on a journey where pixels meet purpose, and together, let's turn{" "}
					<br />
					ideas into captivating digital realities
				</p>
				<div className={styles.aboutMePara}>
					<p>
						Hey there! I'm a dynamic individual driven by a relentless passion
						for innovation and creativity. With a <br />
						background in computer science engineering, I've honed my skills as
						a versatile web developer, graphic <br /> designer, and video
						editor. My journey began with a fascination for the intricate dance
						between lines of <br /> code and visual aesthetics, leading me to
						explore the boundless possibilities of digital storytelling.
					</p>
					<p>
						As a web developer, I thrive on turning complex concepts into
						elegant, user-friendly interfaces that <br />
						elevate the online experience. In the realm of graphic design, I
						harness the power of color, typography,
						<br /> and imagery to craft visually stunning visuals that leave a
						lasting impression. And as a video editor, I <br />
						blend creativity with technical precision to bring stories to life
						on the screen.
					</p>
					<p>
						But beyond the pixels and lines of code, I'm also a content creator
						and avid learner, constantly seeking <br />
						out new challenges and opportunities for growth. Join me as we
						embark on a journey of innovation, <br />
						collaboration, and endless possibilities!
					</p>
				</div>
				<Image src="/projectcloud.png" alt="text" width={398} height={254} />
			</div>
			<div className={styles.projectSection}>
				<h3> Projects</h3>

				<div className={styles.projectGroup}>
					<div className={styles.project}>
						{Array.isArray(projects) && projects.length > 0 ? (
							projects.map((item) => (
								<div key={item._id} className={styles.pcard}>
									<img
										src={builder.image(item.image).width(581).url()}
										alt="image" className={styles.pimage}
									/>

									<h2 className={styles.ptitle}>{item.name}</h2>
									<p className={styles.pdesc}>{item.description}</p>
									<div className={styles.tagContainer}>
										{item.techStack.map((tech) => (
											<span
												key={tech}
												className={styles.tag}
												style={{ backgroundColor: colorMap[tech] }}>
												{tech}
											</span>
										))}
									</div>
									<Link
									key={item.slug.current}
									href={"/projects/" + item.slug.current}>
									Read More
								</Link>
								</div>
							))
						) : (
							<p>No projects available</p>
						)}
					</div>
				</div>
			</div>
			<div className={styles.contact}>
				<Image
					src="/contactme.png"
					className={styles.contactImage}
					alt="text"
					width={405}
					height={325}
				/>
				<h3>Contact me</h3>

				<p>
					Ready to collaborate, share ideas, or just want to say hello? I'd love
					to hear from you! Feel free to <br /> reach out through any of the
					channels below:
				</p>

				<span className={styles.contacts}>
					Email:{" "}
					<Link
						style={{ textDecoration: "none", color: "#939aff" }}
						href="mailto:chaitanyapratapsingh24@gmail.com">
						chaitanyapratapsingh24@gmail.com
					</Link>{" "}
					<br />
					Phone: 9198831771 <br />
					Linkedin :{" "}
					<Link
						style={{ textDecoration: "none", color: "#939aff" }}
						href="https://www.linkedin.com/in/chaitanyapratapsingh/">
						https://www.linkedin.com/in/chaitanyapratapsingh/
					</Link>
					<br />
					Location : India
				</span>
			</div>
		</div>
	);
}
