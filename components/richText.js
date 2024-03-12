/** @format */
import urlBuilder from "@sanity/image-url";

const urlFor = (source) =>
	urlBuilder({ projectId: "m5qc4ajs", dataset: "production" }).image(source);
export const richText = {
	types: {
		image: ({ value }) => (
			<img style={{ width: "50vw","height":"auto" }} src={urlFor(value).url()} />
		),
		callToAction: ({ value, isInline }) =>
			isInline ? (
				<a href={value.url}>{value.text}</a>
			) : (
				<div className="callToAction">{value.text}</div>
			),
	},

	marks: {
		link: ({ children, value }) => {
			const rel = !value.href.startsWith("/")
				? "noreferrer noopener"
				: undefined;
			return (
				<a href={value.href} rel={rel}>
					{children}
				</a>
			);
		},
	},
};
