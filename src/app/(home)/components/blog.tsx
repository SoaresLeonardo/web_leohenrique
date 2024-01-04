import BlogPostsList from '@/components/ui/blog-posts-list';
import SectionTitle from '@/components/ui/section-title';
import { Button } from '@/components/ui/button';
import { posts } from '@/constants/posts';
import { ArrowUpRight } from 'lucide-react';

const Blog = () => {
  return (
    <section className="content_view" id="blog">
      <div className="content_info">
        <SectionTitle title="o que eu estive fazendo." lineCode />
        <BlogPostsList posts={posts} />
        <Button className="mt-11" variant="link">
          Ver todos <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Blog;
