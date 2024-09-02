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
import type { MessageProcessingLogCustomHeaderPropertiesApi } from './MessageProcessingLogCustomHeaderPropertiesApi';
import {
  MessageProcessingLogs,
  MessageProcessingLogsType
} from './MessageProcessingLogs';

/**
 * This class represents the entity "MessageProcessingLogCustomHeaderProperties" of service "com.sap.hci.api".
 */
export class MessageProcessingLogCustomHeaderProperties<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MessageProcessingLogCustomHeaderPropertiesType<T>
{
  /**
   * Technical entity name for MessageProcessingLogCustomHeaderProperties.
   */
  static override _entityName = 'MessageProcessingLogCustomHeaderProperties';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MessageProcessingLogCustomHeaderProperties entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Value.
   * @nullable
   */
  declare value?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link MessageProcessingLogs} entity.
   */
  declare log?: MessageProcessingLogs<T> | null;

  constructor(_entityApi: MessageProcessingLogCustomHeaderPropertiesApi<T>) {
    super(_entityApi);
  }
}

export interface MessageProcessingLogCustomHeaderPropertiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  value?: DeserializedType<T, 'Edm.String'> | null;
  log?: MessageProcessingLogsType<T> | null;
}
