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
  UserCredentials,
  SecureParameters,
  OAuth2ClientCredentials,
  CertificateUserMappings,
  KeyPairResources,
  HistoryKeystoreEntries,
  Keystores,
  ChainCertificates,
  SshKeyResources,
  CertificateSigningRequests,
  KeyPairGenerationRequests,
  CertificateResources,
  CertificateChainResources,
  KeystoreEntries,
  KeystoreResources,
  SshKeyGenerationRequests,
  RsaKeyGenerationRequests,
  AccessPolicies,
  ArtifactReferences
} from './index';

/**
 * Batch builder for operations supported on the SecurityContent.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadSecurityContentRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadSecurityContentRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadSecurityContentRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadSecurityContentRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadSecurityContentRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultSecurityContentPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the SecurityContent.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteSecurityContentRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteSecurityContentRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteSecurityContentRequestBuilder<DeSerializersT>
    | Array<WriteSecurityContentRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteSecurityContentRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultSecurityContentPath = '/';
export type ReadSecurityContentRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<UserCredentials<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SecureParameters<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      OAuth2ClientCredentials<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      CertificateUserMappings<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<KeyPairResources<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<HistoryKeystoreEntries<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Keystores<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ChainCertificates<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SshKeyResources<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      CertificateSigningRequests<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      KeyPairGenerationRequests<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<CertificateResources<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      CertificateChainResources<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<KeystoreEntries<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<KeystoreResources<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      SshKeyGenerationRequests<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      RsaKeyGenerationRequests<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<AccessPolicies<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ArtifactReferences<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<UserCredentials<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SecureParameters<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      OAuth2ClientCredentials<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      CertificateUserMappings<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<KeyPairResources<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      HistoryKeystoreEntries<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<Keystores<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ChainCertificates<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SshKeyResources<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      CertificateSigningRequests<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      KeyPairGenerationRequests<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<CertificateResources<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      CertificateChainResources<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<KeystoreEntries<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<KeystoreResources<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      SshKeyGenerationRequests<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      RsaKeyGenerationRequests<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<AccessPolicies<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ArtifactReferences<DeSerializersT>, DeSerializersT>;
export type WriteSecurityContentRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<UserCredentials<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<UserCredentials<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<UserCredentials<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SecureParameters<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SecureParameters<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SecureParameters<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      OAuth2ClientCredentials<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      OAuth2ClientCredentials<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      OAuth2ClientCredentials<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      CertificateUserMappings<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      CertificateUserMappings<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      CertificateUserMappings<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<KeyPairResources<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<KeyPairResources<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<KeyPairResources<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<HistoryKeystoreEntries<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<HistoryKeystoreEntries<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<HistoryKeystoreEntries<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Keystores<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Keystores<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Keystores<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ChainCertificates<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ChainCertificates<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ChainCertificates<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SshKeyResources<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SshKeyResources<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SshKeyResources<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      CertificateSigningRequests<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      CertificateSigningRequests<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      CertificateSigningRequests<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      KeyPairGenerationRequests<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      KeyPairGenerationRequests<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      KeyPairGenerationRequests<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<CertificateResources<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CertificateResources<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CertificateResources<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      CertificateChainResources<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      CertificateChainResources<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      CertificateChainResources<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<KeystoreEntries<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<KeystoreEntries<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<KeystoreEntries<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<KeystoreResources<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<KeystoreResources<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<KeystoreResources<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      SshKeyGenerationRequests<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SshKeyGenerationRequests<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SshKeyGenerationRequests<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      RsaKeyGenerationRequests<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      RsaKeyGenerationRequests<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      RsaKeyGenerationRequests<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<AccessPolicies<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AccessPolicies<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AccessPolicies<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ArtifactReferences<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ArtifactReferences<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ArtifactReferences<DeSerializersT>, DeSerializersT>;
