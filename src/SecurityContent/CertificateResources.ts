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
import type { CertificateResourcesApi } from './CertificateResourcesApi';
import { KeystoreEntries, KeystoreEntriesType } from './KeystoreEntries';

/**
 * This class represents the entity "CertificateResources" of service "com.sap.hci.api".
 */
export class CertificateResources<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CertificateResourcesType<T>
{
  /**
   * Technical entity name for CertificateResources.
   */
  static override _entityName = 'CertificateResources';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CertificateResources entity.
   */
  static _keys = [];
  /**
   * One-to-one navigation property to the {@link KeystoreEntries} entity.
   */
  declare keystoreEntry?: KeystoreEntries<T> | null;

  constructor(_entityApi: CertificateResourcesApi<T>) {
    super(_entityApi);
  }
}

export interface CertificateResourcesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  keystoreEntry?: KeystoreEntriesType<T> | null;
}
