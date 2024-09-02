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
import { LogFileArchives, LogFiles } from './index';

/**
 * Batch builder for operations supported on the LogFiles.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    ReadLogFilesRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    ReadLogFilesRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadLogFilesRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadLogFilesRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    ReadLogFilesRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultLogFilesPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the LogFiles.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteLogFilesRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteLogFilesRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteLogFilesRequestBuilder<DeSerializersT>
    | Array<WriteLogFilesRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteLogFilesRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultLogFilesPath = '/';
export type ReadLogFilesRequestBuilder<DeSerializersT extends DeSerializers> =
  | GetAllRequestBuilder<LogFileArchives<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<LogFiles<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<LogFileArchives<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<LogFiles<DeSerializersT>, DeSerializersT>;
export type WriteLogFilesRequestBuilder<DeSerializersT extends DeSerializers> =
  | CreateRequestBuilder<LogFileArchives<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<LogFileArchives<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<LogFileArchives<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<LogFiles<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<LogFiles<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<LogFiles<DeSerializersT>, DeSerializersT>;
