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
import type { ChainCertificatesApi } from './ChainCertificatesApi';
import { KeystoreEntries, KeystoreEntriesType } from './KeystoreEntries';

/**
 * This class represents the entity "ChainCertificates" of service "com.sap.hci.api".
 */
export class ChainCertificates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ChainCertificatesType<T>
{
  /**
   * Technical entity name for ChainCertificates.
   */
  static override _entityName = 'ChainCertificates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ChainCertificates entity.
   */
  static _keys = ['Hexalias', 'Index'];
  /**
   * Hexalias.
   * Maximum length: 2000.
   */
  declare hexalias: DeserializedType<T, 'Edm.String'>;
  /**
   * Alias.
   * Maximum length: 250.
   */
  declare alias: DeserializedType<T, 'Edm.String'>;
  /**
   * Index.
   */
  declare index: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Validity.
   * Maximum length: 1000.
   * @nullable
   */
  declare validity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Key Type.
   * Maximum length: 30.
   * @nullable
   */
  declare keyType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Key Size.
   * @nullable
   */
  declare keySize?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Valid Not Before.
   * @nullable
   */
  declare validNotBefore?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Valid Not After.
   * @nullable
   */
  declare validNotAfter?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Subject Dn.
   * Maximum length: 5000.
   * @nullable
   */
  declare subjectDn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issuer Dn.
   * Maximum length: 5000.
   * @nullable
   */
  declare issuerDn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Serial Number.
   * Maximum length: 66.
   * @nullable
   */
  declare serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Signature Algorithm.
   * Maximum length: 60.
   * @nullable
   */
  declare signatureAlgorithm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Version.
   * @nullable
   */
  declare version?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Fingerprint Sha 1.
   * Maximum length: 200.
   * @nullable
   */
  declare fingerprintSha1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fingerprint Sha 256.
   * Maximum length: 200.
   * @nullable
   */
  declare fingerprintSha256?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fingerprint Sha 512.
   * Maximum length: 200.
   * @nullable
   */
  declare fingerprintSha512?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link KeystoreEntries} entity.
   */
  declare keystoreEntry?: KeystoreEntries<T> | null;

  constructor(_entityApi: ChainCertificatesApi<T>) {
    super(_entityApi);
  }
}

export interface ChainCertificatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  hexalias: DeserializedType<T, 'Edm.String'>;
  alias: DeserializedType<T, 'Edm.String'>;
  index: DeserializedType<T, 'Edm.Int32'>;
  validity?: DeserializedType<T, 'Edm.String'> | null;
  keyType?: DeserializedType<T, 'Edm.String'> | null;
  keySize?: DeserializedType<T, 'Edm.Int32'> | null;
  validNotBefore?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validNotAfter?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  subjectDn?: DeserializedType<T, 'Edm.String'> | null;
  issuerDn?: DeserializedType<T, 'Edm.String'> | null;
  serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  signatureAlgorithm?: DeserializedType<T, 'Edm.String'> | null;
  version?: DeserializedType<T, 'Edm.Int32'> | null;
  fingerprintSha1?: DeserializedType<T, 'Edm.String'> | null;
  fingerprintSha256?: DeserializedType<T, 'Edm.String'> | null;
  fingerprintSha512?: DeserializedType<T, 'Edm.String'> | null;
  keystoreEntry?: KeystoreEntriesType<T> | null;
}
