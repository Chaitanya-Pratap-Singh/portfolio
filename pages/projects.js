/** @format */

import React from "react";
import Head from "next/head";
import Image from "next/image";
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
	const query = `*[_type == "project" ]
	`;
	const projects = await client.fetch(query);
	return {
		props: {
			projects,
		},
	};
}

export default function projects({ projects }) {
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
		<div className={styles.project}>

			<div className={styles.projectGroup}>
				<div className={styles.project}>
					{Array.isArray(projects) && projects.length > 0 ? (
						projects.map((item) => (
							<div key={item._id} className={styles.pcard}>
								<img
									src={builder.image(item.image).width(581).url()}
									alt="image"
									className={styles.pimage}
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
	);
}
