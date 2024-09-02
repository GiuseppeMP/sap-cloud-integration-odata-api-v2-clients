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
import type { JmsBrokersApi } from './JmsBrokersApi';

/**
 * This class represents the entity "JmsBrokers" of service "com.sap.hci.api".
 */
export class JmsBrokers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JmsBrokersType<T>
{
  /**
   * Technical entity name for JmsBrokers.
   */
  static override _entityName = 'JmsBrokers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JmsBrokers entity.
   */
  static _keys = ['Key'];
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.String'>;
  /**
   * Capacity.
   * @nullable
   */
  declare capacity?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Max Capacity.
   * @nullable
   */
  declare maxCapacity?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Is Transacted Sessions High.
   * @nullable
   */
  declare isTransactedSessionsHigh?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Is Consumers High.
   * @nullable
   */
  declare isConsumersHigh?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Is Producers High.
   * @nullable
   */
  declare isProducersHigh?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Max Queue Number.
   * @nullable
   */
  declare maxQueueNumber?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Queue Number.
   * @nullable
   */
  declare queueNumber?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Capacity Ok.
   * @nullable
   */
  declare capacityOk?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Capacity Warning.
   * @nullable
   */
  declare capacityWarning?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Capacity Error.
   * @nullable
   */
  declare capacityError?: DeserializedType<T, 'Edm.Int64'> | null;

  constructor(_entityApi: JmsBrokersApi<T>) {
    super(_entityApi);
  }
}

export interface JmsBrokersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  key: DeserializedType<T, 'Edm.String'>;
  capacity?: DeserializedType<T, 'Edm.Int64'> | null;
  maxCapacity?: DeserializedType<T, 'Edm.Int64'> | null;
  isTransactedSessionsHigh?: DeserializedType<T, 'Edm.Int32'> | null;
  isConsumersHigh?: DeserializedType<T, 'Edm.Int32'> | null;
  isProducersHigh?: DeserializedType<T, 'Edm.Int32'> | null;
  maxQueueNumber?: DeserializedType<T, 'Edm.Int64'> | null;
  queueNumber?: DeserializedType<T, 'Edm.Int64'> | null;
  capacityOk?: DeserializedType<T, 'Edm.Int64'> | null;
  capacityWarning?: DeserializedType<T, 'Edm.Int64'> | null;
  capacityError?: DeserializedType<T, 'Edm.Int64'> | null;
}
