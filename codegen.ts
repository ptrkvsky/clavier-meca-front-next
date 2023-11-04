import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://dhh9ms17.api.sanity.io/v1/graphql/production/default',
  generates: {
    'src/app/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
