//@ts-nocheck TS6133
/* eslint-disable @typescript-eslint/no-duplicate-imports */
import * as Types from 'owa-graph-schema';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type FolderCountsQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  mailboxInfo: Types.MailboxInfoInput;
}>;


export type FolderCountsQuery = (
  { __typename?: 'Query' }
  & { folder?: Types.Maybe<(
    { __typename?: 'MailFolder' }
    & Pick<Types.MailFolder, 'id' | 'TotalCount' | 'UnreadCount'>
    & { FolderId: (
      { __typename?: 'FolderId' }
      & Pick<Types.FolderId, 'Id'>
    ) }
  )> }
);


export const FolderCountsDocument: DocumentNode<FolderCountsQuery, FolderCountsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FolderCounts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mailboxInfo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MailboxInfoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"folder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"mailboxInfo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mailboxInfo"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"additionalProperties"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"TotalCount","block":false},{"kind":"StringValue","value":"UnreadCount","block":false}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"FolderId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"TotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"UnreadCount"}}]}}]}}]};