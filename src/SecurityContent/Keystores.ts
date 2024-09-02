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
import type { KeystoresApi } from './KeystoresApi';
import { KeystoreEntries, KeystoreEntriesType } from './KeystoreEntries';

/**
 * This class represents the entity "Keystores" of service "com.sap.hci.api".
 */
export class Keystores<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements KeystoresType<T>
{
  /**
   * Technical entity name for Keystores.
   */
  static override _entityName = 'Keystores';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Keystores entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   * Maximum length: 100.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
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
   * Size.
   * @nullable
   */
  declare size?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-many navigation property to the {@link KeystoreEntries} entity.
   */
  declare entries: KeystoreEntries<T>[];

  constructor(_entityApi: KeystoresApi<T>) {
    super(_entityApi);
  }
}

export interface KeystoresType<T extends DeSerializers = DefaultDeSerializers> {
  name: DeserializedType<T, 'Edm.String'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  size?: DeserializedType<T, 'Edm.Int32'> | null;
  entries: KeystoreEntriesType<T>[];
}
