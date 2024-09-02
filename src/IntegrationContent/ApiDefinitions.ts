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
import type { ApiDefinitionsApi } from './ApiDefinitionsApi';

/**
 * This class represents the entity "APIDefinitions" of service "com.sap.hci.api".
 */
export class ApiDefinitions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApiDefinitionsType<T>
{
  /**
   * Technical entity name for ApiDefinitions.
   */
  static override _entityName = 'APIDefinitions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ApiDefinitions entity.
   */
  static _keys = ['Url'];
  /**
   * Url.
   */
  declare url: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ApiDefinitionsApi<T>) {
    super(_entityApi);
  }
}

export interface ApiDefinitionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  url: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
}
