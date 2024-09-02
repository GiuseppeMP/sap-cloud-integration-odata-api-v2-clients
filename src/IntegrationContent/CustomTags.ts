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
import type { CustomTagsApi } from './CustomTagsApi';

/**
 * This class represents the entity "CustomTags" of service "com.sap.hci.api".
 */
export class CustomTags<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomTagsType<T>
{
  /**
   * Technical entity name for CustomTags.
   */
  static override _entityName = 'CustomTags';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomTags entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   * @nullable
   */
  declare value?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CustomTagsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomTagsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
}
