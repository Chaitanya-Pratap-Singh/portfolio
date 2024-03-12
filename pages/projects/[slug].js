import { createClient } from "next-sanity";
import Head from 'next/head';
import { PortableText } from "@portabletext/react"
import { useRouter } from 'next/router';
import imageUrlBuilder from "@sanity/image-url";
import { getClient } from '@/lib/sanity';
import styles from "@/styles/slug.module.css"
import { richText } from "@/components/richText";

export async function getStaticPaths() {
  const client = getClient();
  const query = `*[_type == 'project' && defined(slug.current)][].slug.current`; 
  const slugs = await client.fetch(query);

  const paths = slugs.map((slug) => ({
    params: { slug }, 
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const { slug } = params;
  const client = getClient();
  try {
    const query = `*[_type == 'project' && slug.current == $slug][0]{
      _id,
      name,
      content,
      description,
      image,
    }`;
    
    const project = await client.fetch(query, { slug });

    if (!project) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        project,
      },
    };
  } catch (error) {
    console.error("Error fetching project data:", error);
    return {
      notFound: true,
    };
  }
}

export default function project({ project }) {
  const client = createClient({
		projectId: "m5qc4ajs",
		dataset: "production",
		useCdn: false,
	});
  if (!project) {
    return <div>Loading...</div>;
  }

  
  
  const router = useRouter()
  const builder = imageUrlBuilder(client);
  return (
    <>
      <Head>
        <title >{project.name}</title>
        <meta name="description" content={project.description} />
      </Head>
      <div>
    
        <h1  className={styles.title} >{project.name}</h1>
        <img className={styles.image} src={builder.image(project.image).width(200).url()} alt={project.image.caption} />
        <div className={styles.contentcontainer}>
        <PortableText className ={styles.content} value={project.content} components={richText}/>
        </div>
      </div>
    </>
  );
}