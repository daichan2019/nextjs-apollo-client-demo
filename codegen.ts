import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://endless-snail-91.hasura.app/v1/graphql',
  documents: ['src/**/*.tsx', '!src/gql/**/*'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/graphql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
