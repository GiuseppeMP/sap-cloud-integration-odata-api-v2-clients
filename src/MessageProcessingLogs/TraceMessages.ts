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
import type { TraceMessagesApi } from './TraceMessagesApi';
import {
  TraceMessageProperties,
  TraceMessagePropertiesType
} from './TraceMessageProperties';

/**
 * This class represents the entity "TraceMessages" of service "com.sap.hci.api".
 */
export class TraceMessages<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TraceMessagesType<T>
{
  /**
   * Technical entity name for TraceMessages.
   */
  static override _entityName = 'TraceMessages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TraceMessages entity.
   */
  static _keys = ['TraceId'];
  /**
   * Trace Id.
   */
  declare traceId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Mpl Id.
   */
  declare mplId: DeserializedType<T, 'Edm.String'>;
  /**
   * Model Step Id.
   * @nullable
   */
  declare modelStepId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payload Size.
   * @nullable
   */
  declare payloadSize?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Mime Type.
   * @nullable
   */
  declare mimeType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link TraceMessageProperties} entity.
   */
  declare properties: TraceMessageProperties<T>[];

  constructor(_entityApi: TraceMessagesApi<T>) {
    super(_entityApi);
  }
}

export interface TraceMessagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  traceId: DeserializedType<T, 'Edm.Int64'>;
  mplId: DeserializedType<T, 'Edm.String'>;
  modelStepId?: DeserializedType<T, 'Edm.String'> | null;
  payloadSize?: DeserializedType<T, 'Edm.Int64'> | null;
  mimeType?: DeserializedType<T, 'Edm.String'> | null;
  properties: TraceMessagePropertiesType<T>[];
}
