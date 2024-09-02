/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { KeystoreEntriesApi } from './KeystoreEntriesApi';
import { ChainCertificates, ChainCertificatesType } from './ChainCertificates';
import {
  CertificateResources,
  CertificateResourcesType
} from './CertificateResources';
import { SshKeyResources, SshKeyResourcesType } from './SshKeyResources';
import { Keystores, KeystoresType } from './Keystores';
import {
  CertificateChainResources,
  CertificateChainResourcesType
} from './CertificateChainResources';
import {
  CertificateSigningRequests,
  CertificateSigningRequestsType
} from './CertificateSigningRequests';

/**
 * This class represents the entity "KeystoreEntries" of service "com.sap.hci.api".
 */
export class KeystoreEntries<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements KeystoreEntriesType<T>
{
  /**
   * Technical entity name for KeystoreEntries.
   */
  static override _entityName = 'KeystoreEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the KeystoreEntries entity.
   */
  static _keys = [];
  /**
   * Type.
   * Maximum length: 30.
   * @nullable
   */
  declare type?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Owner.
   * Maximum length: 30.
   * @nullable
   */
  declare owner?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Modified By.
   * Maximum length: 150.
   * @nullable
   */
  declare lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Modified Time.
   * @nullable
   */
  declare lastModifiedTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Created By.
   * Maximum length: 150.
   * @nullable
   */
  declare createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created Time.
   * @nullable
   */
  declare createdTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Status.
   * Maximum length: 500.
   * @nullable
   */
  declare status?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ChainCertificates} entity.
   */
  declare chainCertificates: ChainCertificates<T>[];
  /**
   * One-to-one navigation property to the {@link CertificateResources} entity.
   */
  declare certificate?: CertificateResources<T> | null;
  /**
   * One-to-one navigation property to the {@link SshKeyResources} entity.
   */
  declare sshkey?: SshKeyResources<T> | null;
  /**
   * One-to-one navigation property to the {@link Keystores} entity.
   */
  declare keystore?: Keystores<T> | null;
  /**
   * One-to-one navigation property to the {@link CertificateChainResources} entity.
   */
  declare chainResource?: CertificateChainResources<T> | null;
  /**
   * One-to-one navigation property to the {@link CertificateSigningRequests} entity.
   */
  declare signingRequest?: CertificateSigningRequests<T> | null;

  constructor(_entityApi: KeystoreEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface KeystoreEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  type?: DeserializedType<T, 'Edm.String'> | null;
  owner?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  status?: DeserializedType<T, 'Edm.String'> | null;
  chainCertificates: ChainCertificatesType<T>[];
  certificate?: CertificateResourcesType<T> | null;
  sshkey?: SshKeyResourcesType<T> | null;
  keystore?: KeystoresType<T> | null;
  chainResource?: CertificateChainResourcesType<T> | null;
  signingRequest?: CertificateSigningRequestsType<T> | null;
}
