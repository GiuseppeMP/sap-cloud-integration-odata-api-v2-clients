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
import type { ConfigurationsApi } from './ConfigurationsApi';

/**
 * This class represents the entity "Configurations" of service "com.sap.hci.api".
 */
export class Configurations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ConfigurationsType<T>
{
  /**
   * Technical entity name for Configurations.
   */
  static override _entityName = 'Configurations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Configurations entity.
   */
  static _keys = ['ParameterKey'];
  /**
   * Parameter Key.
   */
  declare parameterKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Parameter Value.
   * @nullable
   */
  declare parameterValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Type.
   * @nullable
   */
  declare dataType?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ConfigurationsApi<T>) {
    super(_entityApi);
  }
}

export interface ConfigurationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  parameterKey: DeserializedType<T, 'Edm.String'>;
  parameterValue?: DeserializedType<T, 'Edm.String'> | null;
  dataType?: DeserializedType<T, 'Edm.String'> | null;
}
