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
  Partners,
  UserCredentialParameters,
  AuthorizedUsers,
  AlternativePartners,
  StringParameters,
  BinaryParameters
} from './index';

/**
 * Batch builder for operations supported on the PartnerDirectory.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadPartnerDirectoryRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadPartnerDirectoryRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadPartnerDirectoryRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadPartnerDirectoryRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadPartnerDirectoryRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultPartnerDirectoryPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the PartnerDirectory.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WritePartnerDirectoryRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WritePartnerDirectoryRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WritePartnerDirectoryRequestBuilder<DeSerializersT>
    | Array<WritePartnerDirectoryRequestBuilder<DeSerializersT>>,
  ...rest: Array<WritePartnerDirectoryRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultPartnerDirectoryPath = '/';
export type ReadPartnerDirectoryRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<Partners<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      UserCredentialParameters<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<AuthorizedUsers<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<AlternativePartners<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<StringParameters<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BinaryParameters<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Partners<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      UserCredentialParameters<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<AuthorizedUsers<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<AlternativePartners<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<StringParameters<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BinaryParameters<DeSerializersT>, DeSerializersT>;
export type WritePartnerDirectoryRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<Partners<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Partners<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Partners<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      UserCredentialParameters<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      UserCredentialParameters<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      UserCredentialParameters<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<AuthorizedUsers<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AuthorizedUsers<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AuthorizedUsers<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<AlternativePartners<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AlternativePartners<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AlternativePartners<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<StringParameters<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<StringParameters<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<StringParameters<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BinaryParameters<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BinaryParameters<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BinaryParameters<DeSerializersT>, DeSerializersT>;
