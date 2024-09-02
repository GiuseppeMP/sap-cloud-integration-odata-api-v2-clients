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
import type { CustomTagConfigurationsApi } from './CustomTagConfigurationsApi';

/**
 * This class represents the entity "CustomTagConfigurations" of service "com.sap.hci.api".
 */
export class CustomTagConfigurations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomTagConfigurationsType<T>
{
  /**
   * Technical entity name for CustomTagConfigurations.
   */
  static override _entityName = 'CustomTagConfigurations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomTagConfigurations entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Custom Tags Configuration Content.
   * @nullable
   */
  declare customTagsConfigurationContent?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: CustomTagConfigurationsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomTagConfigurationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  customTagsConfigurationContent?: DeserializedType<T, 'Edm.String'> | null;
}
