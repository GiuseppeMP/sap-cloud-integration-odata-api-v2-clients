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
import type { KeyPairResourcesApi } from './KeyPairResourcesApi';

/**
 * This class represents the entity "KeyPairResources" of service "com.sap.hci.api".
 */
export class KeyPairResources<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements KeyPairResourcesType<T>
{
  /**
   * Technical entity name for KeyPairResources.
   */
  static override _entityName = 'KeyPairResources';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the KeyPairResources entity.
   */
  static _keys = [];
  /**
   * Resource.
   * Maximum length: 24576.
   * @nullable
   */
  declare resource?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Password.
   * Maximum length: 500.
   * @nullable
   */
  declare password?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: KeyPairResourcesApi<T>) {
    super(_entityApi);
  }
}

export interface KeyPairResourcesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  resource?: DeserializedType<T, 'Edm.Binary'> | null;
  password?: DeserializedType<T, 'Edm.String'> | null;
}
