/** @format */

import { createClient } from "next-sanity";

export const getClient = () => {
	const client = createClient({
		projectId: "m5qc4ajs",
		dataset: "production",
		useCdn: true,
	});
	return client;
};
