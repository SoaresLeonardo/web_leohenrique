import { Card, CardDescription, CardHeader, CardTitle } from './card';
import { Separator } from './separator';

type VariantProps = 'left' | 'center';

type SectionTitleProps = {
  title: string;
  description?: string;
  variant?: VariantProps;
  lineCode?: boolean;
};

const SectionTitle = ({
  title,
  description,
  lineCode,
  variant = 'left'
}: SectionTitleProps) => {
  return (
    <>
      {variant === 'left' && (
        <Card className="mb-11 w-full rounded-none border-none bg-inherit shadow-none">
          <CardHeader className="w-full flex-row items-center space-y-0 p-0">
            {!lineCode && (
              <CardTitle>
                {title.charAt(0).toUpperCase() + title.slice(1)}
              </CardTitle>
            )}
            {lineCode && (
              <CardTitle className="mr-11">
                <span className="text-primary">{'>_ '}</span>
                {title.charAt(0).toUpperCase() + title.slice(1)}
              </CardTitle>
            )}
            <Separator className="w-96" />
          </CardHeader>
        </Card>
      )}
      {variant === 'center' && (
        <Card className="mb-11 w-full rounded-none border-none bg-inherit shadow-none">
          <CardHeader className="w-full flex-col items-center justify-center space-y-3 p-0 text-center">
            {!lineCode && <CardTitle>{title}</CardTitle>}
            {lineCode && (
              <CardTitle className="mr-11">
                <span className="text-primary">{'>_ '}</span>
                {title}
              </CardTitle>
            )}
            {description && (
              <CardDescription className="text-primary">
                {description.charAt(0).toUpperCase() + description.slice(1)}
              </CardDescription>
            )}
          </CardHeader>
        </Card>
      )}
    </>
  );
};

export default SectionTitle;
