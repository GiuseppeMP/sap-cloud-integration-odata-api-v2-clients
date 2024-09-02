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
import type { CertificateSigningRequestsApi } from './CertificateSigningRequestsApi';
import { KeystoreEntries, KeystoreEntriesType } from './KeystoreEntries';

/**
 * This class represents the entity "CertificateSigningRequests" of service "com.sap.hci.api".
 */
export class CertificateSigningRequests<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CertificateSigningRequestsType<T>
{
  /**
   * Technical entity name for CertificateSigningRequests.
   */
  static override _entityName = 'CertificateSigningRequests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CertificateSigningRequests entity.
   */
  static _keys = ['Hexalias'];
  /**
   * Hexalias.
   * Maximum length: 2000.
   */
  declare hexalias: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link KeystoreEntries} entity.
   */
  declare keystoreEntry?: KeystoreEntries<T> | null;

  constructor(_entityApi: CertificateSigningRequestsApi<T>) {
    super(_entityApi);
  }
}

export interface CertificateSigningRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  hexalias: DeserializedType<T, 'Edm.String'>;
  keystoreEntry?: KeystoreEntriesType<T> | null;
}
