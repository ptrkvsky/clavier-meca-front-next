import { Author, Category, Post } from '@/app/gql/graphql';

export interface PlansitePost
  extends Pick<Post, '_id' | 'title' | 'isOnSitemap' | 'slug'> {
  categories: Pick<Category, '_id' | 'title' | 'slug'>[];
}

export type PlansiteCategory = Pick<Category, '_id' | 'title' | 'slug'>;

export type PlansiteAuhtor = Pick<Author, '_id' | 'name' | 'slug'>;
