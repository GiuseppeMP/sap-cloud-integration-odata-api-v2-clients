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
import type { TraceMessagePropertiesApi } from './TraceMessagePropertiesApi';

/**
 * This class represents the entity "TraceMessageProperties" of service "com.sap.hci.api".
 */
export class TraceMessageProperties<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TraceMessagePropertiesType<T>
{
  /**
   * Technical entity name for TraceMessageProperties.
   */
  static override _entityName = 'TraceMessageProperties';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TraceMessageProperties entity.
   */
  static _keys = ['TraceId', 'Name'];
  /**
   * Trace Id.
   */
  declare traceId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   * @nullable
   */
  declare value?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TraceMessagePropertiesApi<T>) {
    super(_entityApi);
  }
}

export interface TraceMessagePropertiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  traceId: DeserializedType<T, 'Edm.Int64'>;
  name: DeserializedType<T, 'Edm.String'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
}
