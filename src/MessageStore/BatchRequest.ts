/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  MessageStoreEntries,
  MessageStoreEntryAttachmentProperties,
  MessageStoreEntryAttachments,
  MessageStoreEntryProperties,
  MessageProcessingLogs,
  JmsBrokers,
  NumberRanges
} from './index';

/**
 * Batch builder for operations supported on the MessageStore.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadMessageStoreRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadMessageStoreRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadMessageStoreRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadMessageStoreRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadMessageStoreRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultMessageStorePath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the MessageStore.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteMessageStoreRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteMessageStoreRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteMessageStoreRequestBuilder<DeSerializersT>
    | Array<WriteMessageStoreRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteMessageStoreRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultMessageStorePath = '/';
export type ReadMessageStoreRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<MessageStoreEntries<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      MessageStoreEntryAttachmentProperties<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MessageStoreEntryAttachments<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MessageStoreEntryProperties<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<MessageProcessingLogs<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<JmsBrokers<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<NumberRanges<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<MessageStoreEntries<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      MessageStoreEntryAttachmentProperties<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MessageStoreEntryAttachments<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MessageStoreEntryProperties<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MessageProcessingLogs<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<JmsBrokers<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<NumberRanges<DeSerializersT>, DeSerializersT>;
export type WriteMessageStoreRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<MessageStoreEntries<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<MessageStoreEntries<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<MessageStoreEntries<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      MessageStoreEntryAttachmentProperties<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MessageStoreEntryAttachmentProperties<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MessageStoreEntryAttachmentProperties<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MessageStoreEntryAttachments<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MessageStoreEntryAttachments<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MessageStoreEntryAttachments<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MessageStoreEntryProperties<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MessageStoreEntryProperties<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MessageStoreEntryProperties<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<MessageProcessingLogs<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<MessageProcessingLogs<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<MessageProcessingLogs<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<JmsBrokers<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<JmsBrokers<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<JmsBrokers<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<NumberRanges<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<NumberRanges<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<NumberRanges<DeSerializersT>, DeSerializersT>;
