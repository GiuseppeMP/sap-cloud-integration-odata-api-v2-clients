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
  TraceMessages,
  MessageProcessingLogRuns,
  MessageProcessingLogRunSteps,
  MessageStoreEntryAttachmentProperties,
  MessageStoreEntryAttachments,
  MessageStoreEntryProperties,
  MessageProcessingLogs,
  MessageProcessingLogAttachments,
  TraceMessageProperties,
  MessageProcessingLogCustomHeaderProperties,
  MessageProcessingLogRunStepProperties,
  MessageProcessingLogErrorInformations,
  MessageProcessingLogAdapterAttributes,
  IdMapFromId2S,
  IdMapFromIds,
  IdMapToIds,
  IdempotentRepositoryEntries,
  GenericIdempotentRepositoryEntries
} from './index';

/**
 * Batch builder for operations supported on the MessageProcessingLogs.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadMessageProcessingLogsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadMessageProcessingLogsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadMessageProcessingLogsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadMessageProcessingLogsRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadMessageProcessingLogsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultMessageProcessingLogsPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the MessageProcessingLogs.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteMessageProcessingLogsRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteMessageProcessingLogsRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteMessageProcessingLogsRequestBuilder<DeSerializersT>
    | Array<WriteMessageProcessingLogsRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteMessageProcessingLogsRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultMessageProcessingLogsPath = '/';
export type ReadMessageProcessingLogsRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<MessageStoreEntries<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TraceMessages<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      MessageProcessingLogRuns<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MessageProcessingLogRunSteps<DeSerializersT>,
      DeSerializersT
    >
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
  | GetAllRequestBuilder<
      MessageProcessingLogAttachments<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<TraceMessageProperties<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      MessageProcessingLogCustomHeaderProperties<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MessageProcessingLogRunStepProperties<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MessageProcessingLogErrorInformations<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MessageProcessingLogAdapterAttributes<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<IdMapFromId2S<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<IdMapFromIds<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<IdMapToIds<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      IdempotentRepositoryEntries<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      GenericIdempotentRepositoryEntries<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<MessageStoreEntries<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TraceMessages<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      MessageProcessingLogRuns<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MessageProcessingLogRunSteps<DeSerializersT>,
      DeSerializersT
    >
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
  | GetByKeyRequestBuilder<
      MessageProcessingLogAttachments<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      TraceMessageProperties<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MessageProcessingLogCustomHeaderProperties<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MessageProcessingLogRunStepProperties<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MessageProcessingLogErrorInformations<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MessageProcessingLogAdapterAttributes<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<IdMapFromId2S<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<IdMapFromIds<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<IdMapToIds<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      IdempotentRepositoryEntries<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      GenericIdempotentRepositoryEntries<DeSerializersT>,
      DeSerializersT
    >;
export type WriteMessageProcessingLogsRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<MessageStoreEntries<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<MessageStoreEntries<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<MessageStoreEntries<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TraceMessages<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TraceMessages<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TraceMessages<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      MessageProcessingLogRuns<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MessageProcessingLogRuns<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MessageProcessingLogRuns<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MessageProcessingLogRunSteps<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MessageProcessingLogRunSteps<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MessageProcessingLogRunSteps<DeSerializersT>,
      DeSerializersT
    >
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
  | CreateRequestBuilder<
      MessageProcessingLogAttachments<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MessageProcessingLogAttachments<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MessageProcessingLogAttachments<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<TraceMessageProperties<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TraceMessageProperties<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TraceMessageProperties<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      MessageProcessingLogCustomHeaderProperties<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MessageProcessingLogCustomHeaderProperties<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MessageProcessingLogCustomHeaderProperties<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MessageProcessingLogRunStepProperties<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MessageProcessingLogRunStepProperties<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MessageProcessingLogRunStepProperties<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MessageProcessingLogErrorInformations<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MessageProcessingLogErrorInformations<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MessageProcessingLogErrorInformations<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MessageProcessingLogAdapterAttributes<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MessageProcessingLogAdapterAttributes<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MessageProcessingLogAdapterAttributes<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<IdMapFromId2S<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<IdMapFromId2S<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<IdMapFromId2S<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<IdMapFromIds<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<IdMapFromIds<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<IdMapFromIds<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<IdMapToIds<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<IdMapToIds<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<IdMapToIds<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      IdempotentRepositoryEntries<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      IdempotentRepositoryEntries<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      IdempotentRepositoryEntries<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      GenericIdempotentRepositoryEntries<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      GenericIdempotentRepositoryEntries<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      GenericIdempotentRepositoryEntries<DeSerializersT>,
      DeSerializersT
    >;
