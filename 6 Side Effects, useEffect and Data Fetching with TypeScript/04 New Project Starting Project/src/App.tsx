import { ReactNode, useEffect, useState } from 'react';
import { get } from './util/http';
import BlogPosts, { BlogPost } from './components/BlogPosts';
import fecthingImg from './assets/data-fetching.png';
import ErrorMessage from './components/ErrorMessage';

type RawDataBlogPost = {
   id: number;
   userId: number;
   title: string;
   body: string;
};

function App() {
   const [fetchedPosts, setFecthedPosts] = useState<BlogPost[]>();
   const [isFetching, setIsFetching] = useState(false);
   const [error, setError] = useState<string>();

   useEffect(() => {
      async function fetchPosts() {
         setIsFetching(true);
         try {
            const data = (await get(
               'https://jsonplaceholder.typicode.com/posts'
            )) as RawDataBlogPost[];
            const blogPosts: BlogPost[] = data.map((rawPost) => {
               return {
                  id: rawPost.id,
                  title: rawPost.title,
                  text: rawPost.body,
               };
            });
            setFecthedPosts(blogPosts);
         } catch (error) {
            if (error instanceof Error) {
               setError(error.message);
            }
            // setError((error as Error).message); // Type Casting
         }

         setIsFetching(false);
      }

      fetchPosts();
   }, []);

   let content: ReactNode;

   if (error) {
      content = <ErrorMessage text={error} />;
   }

   if (fetchedPosts) {
      content = <BlogPosts posts={fetchedPosts} />;
   }

   if (isFetching) {
      content = <p id="loading-fallback">Fecthing posts...</p>;
   }

   return (
      <main>
         <img
            src={fecthingImg}
            alt="An abstracti mage depicting a data fetching process"
         />
         {content}
      </main>
   );
}

export default App;
