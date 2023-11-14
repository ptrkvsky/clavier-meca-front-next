import { Post } from '@/app/gql/graphql';

export type Slice = NonNullable<Post['content']>[0];
