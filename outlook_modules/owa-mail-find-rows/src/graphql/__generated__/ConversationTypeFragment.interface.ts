//@ts-nocheck TS6133
/* eslint-disable @typescript-eslint/no-duplicate-imports */
import * as Types from 'owa-graph-schema';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ConversationTypeFragmentFragment = (
  { __typename?: 'ConversationType' }
  & Pick<Types.ConversationType, 'ConversationId' | 'ConversationTopic' | 'UniqueRecipients' | 'UniqueSenders' | 'LastDeliveryTime' | 'Categories' | 'FlagStatus' | 'HasAttachments' | 'MessageCount' | 'GlobalMessageCount' | 'UnreadCount' | 'GlobalUnreadCount' | 'Size' | 'ItemClasses' | 'Importance' | 'ItemIds' | 'GlobalItemIds' | 'LastModifiedTime' | 'InstanceKey' | 'Preview' | 'IconIndex' | 'DraftItemIds' | 'HasIrm' | 'IsTaggedForBigScreen' | 'GlobalLikeCount' | 'LastDeliveryOrRenewTime' | 'LastSentTime' | 'GlobalMentionedMe' | 'GlobalAtAllMention' | 'SortOrderSource' | 'SpotlightIsVisible' | 'LastSender' | 'From' | 'EntityNamesMap' | 'HasExternalEmails' | 'ReturnTime' | 'HasSharepointLink' | 'HasAttachmentPreviews' | 'HasProcessedSharepointLink' | 'CouponRanks' | 'CouponExpiryDates'>
  & { ParentFolderId?: Types.Maybe<(
    { __typename?: 'FolderId' }
    & Pick<Types.FolderId, 'Id' | 'ChangeKey'>
  )> }
);

export const ConversationTypeFragmentFragmentDoc: DocumentNode<ConversationTypeFragmentFragment, unknown> = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ConversationTypeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConversationType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ConversationId"}},{"kind":"Field","name":{"kind":"Name","value":"ConversationTopic"}},{"kind":"Field","name":{"kind":"Name","value":"UniqueRecipients"}},{"kind":"Field","name":{"kind":"Name","value":"UniqueSenders"}},{"kind":"Field","name":{"kind":"Name","value":"LastDeliveryTime"}},{"kind":"Field","name":{"kind":"Name","value":"Categories"}},{"kind":"Field","name":{"kind":"Name","value":"FlagStatus"}},{"kind":"Field","name":{"kind":"Name","value":"HasAttachments"}},{"kind":"Field","name":{"kind":"Name","value":"MessageCount"}},{"kind":"Field","name":{"kind":"Name","value":"GlobalMessageCount"}},{"kind":"Field","name":{"kind":"Name","value":"UnreadCount"}},{"kind":"Field","name":{"kind":"Name","value":"GlobalUnreadCount"}},{"kind":"Field","name":{"kind":"Name","value":"Size"}},{"kind":"Field","name":{"kind":"Name","value":"ItemClasses"}},{"kind":"Field","name":{"kind":"Name","value":"Importance"}},{"kind":"Field","name":{"kind":"Name","value":"ItemIds"}},{"kind":"Field","name":{"kind":"Name","value":"GlobalItemIds"}},{"kind":"Field","name":{"kind":"Name","value":"LastModifiedTime"}},{"kind":"Field","name":{"kind":"Name","value":"InstanceKey"}},{"kind":"Field","name":{"kind":"Name","value":"Preview"}},{"kind":"Field","name":{"kind":"Name","value":"IconIndex"}},{"kind":"Field","name":{"kind":"Name","value":"DraftItemIds"}},{"kind":"Field","name":{"kind":"Name","value":"HasIrm"}},{"kind":"Field","name":{"kind":"Name","value":"IsTaggedForBigScreen"}},{"kind":"Field","name":{"kind":"Name","value":"GlobalLikeCount"}},{"kind":"Field","name":{"kind":"Name","value":"LastDeliveryOrRenewTime"}},{"kind":"Field","name":{"kind":"Name","value":"LastSentTime"}},{"kind":"Field","name":{"kind":"Name","value":"GlobalMentionedMe"}},{"kind":"Field","name":{"kind":"Name","value":"GlobalAtAllMention"}},{"kind":"Field","name":{"kind":"Name","value":"SortOrderSource"}},{"kind":"Field","name":{"kind":"Name","value":"SpotlightIsVisible"}},{"kind":"Field","name":{"kind":"Name","value":"LastSender"}},{"kind":"Field","name":{"kind":"Name","value":"From"}},{"kind":"Field","name":{"kind":"Name","value":"ParentFolderId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Id"}},{"kind":"Field","name":{"kind":"Name","value":"ChangeKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"EntityNamesMap"}},{"kind":"Field","name":{"kind":"Name","value":"HasExternalEmails"}},{"kind":"Field","name":{"kind":"Name","value":"ReturnTime"}},{"kind":"Field","name":{"kind":"Name","value":"HasSharepointLink"}},{"kind":"Field","name":{"kind":"Name","value":"HasAttachmentPreviews"}},{"kind":"Field","name":{"kind":"Name","value":"HasProcessedSharepointLink"}},{"kind":"Field","name":{"kind":"Name","value":"CouponRanks"}},{"kind":"Field","name":{"kind":"Name","value":"CouponExpiryDates"}}]}}]};