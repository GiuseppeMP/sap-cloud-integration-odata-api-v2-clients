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
import type { CertificateChainResourcesApi } from './CertificateChainResourcesApi';
import { KeystoreEntries, KeystoreEntriesType } from './KeystoreEntries';

/**
 * This class represents the entity "CertificateChainResources" of service "com.sap.hci.api".
 */
export class CertificateChainResources<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CertificateChainResourcesType<T>
{
  /**
   * Technical entity name for CertificateChainResources.
   */
  static override _entityName = 'CertificateChainResources';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CertificateChainResources entity.
   */
  static _keys = [];
  /**
   * One-to-one navigation property to the {@link KeystoreEntries} entity.
   */
  declare keystoreEntry?: KeystoreEntries<T> | null;

  constructor(_entityApi: CertificateChainResourcesApi<T>) {
    super(_entityApi);
  }
}

export interface CertificateChainResourcesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  keystoreEntry?: KeystoreEntriesType<T> | null;
}
