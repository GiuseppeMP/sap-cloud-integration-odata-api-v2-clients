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
import { Value, ValueField } from './Value';
import type { ValMapsApi } from './ValMapsApi';

/**
 * This class represents the entity "ValMaps" of service "com.sap.hci.api".
 */
export class ValMaps<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ValMapsType<T>
{
  /**
   * Technical entity name for ValMaps.
   */
  static override _entityName = 'ValMaps';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ValMaps entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   */
  declare value: Value<T>;

  constructor(_entityApi: ValMapsApi<T>) {
    super(_entityApi);
  }
}

export interface ValMapsType<T extends DeSerializers = DefaultDeSerializers> {
  id: DeserializedType<T, 'Edm.String'>;
  value: Value<T>;
}
