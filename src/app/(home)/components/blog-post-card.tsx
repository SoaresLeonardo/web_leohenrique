import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '../../../components/ui/card';

type PostUserProps = {
  name: string;
  image: string;
};

type PostProps = {
  id: string;
  title: string;
  slug: string;
  tags: string[];
  description: string;
  user: PostUserProps;
  created_at: string;
};

const BlogPostCard = ({ post }: { post: PostProps }) => {
  return (
    <Card className="border-none bg-inherit py-2 shadow-none">
      <CardHeader className="flex-row items-center justify-between space-y-0 p-0">
        <CardTitle className="text-xl font-medium">{post.title}</CardTitle>
        <CardDescription className="text-primary">
          {post.created_at}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default BlogPostCard;
