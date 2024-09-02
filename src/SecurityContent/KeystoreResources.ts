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
import type { KeystoreResourcesApi } from './KeystoreResourcesApi';

/**
 * This class represents the entity "KeystoreResources" of service "com.sap.hci.api".
 */
export class KeystoreResources<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements KeystoreResourcesType<T>
{
  /**
   * Technical entity name for KeystoreResources.
   */
  static override _entityName = 'KeystoreResources';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the KeystoreResources entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   * Maximum length: 100.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource.
   * Maximum length: 1048576.
   * @nullable
   */
  declare resource?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Password.
   * Maximum length: 300.
   * @nullable
   */
  declare password?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Aliases.
   * Maximum length: 1048576.
   * @nullable
   */
  declare aliases?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: KeystoreResourcesApi<T>) {
    super(_entityApi);
  }
}

export interface KeystoreResourcesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  resource?: DeserializedType<T, 'Edm.Binary'> | null;
  password?: DeserializedType<T, 'Edm.String'> | null;
  aliases?: DeserializedType<T, 'Edm.String'> | null;
}
