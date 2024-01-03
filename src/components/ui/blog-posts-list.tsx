import BlogPostCard from '../../app/(home)/components/blog-post-card';

type PostProps = {
  id: string;
  title: string;
  slug: string;
  tags: string[];
  description: string;
  user: {
    name: string;
    image: string;
  };
  created_at: string;
};

const BlogPostsList = ({ posts }: { posts: PostProps[] }) => {
  return (
    <div className="flex w-full flex-col gap-6">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogPostsList;
