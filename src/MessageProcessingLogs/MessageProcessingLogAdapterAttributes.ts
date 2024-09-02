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
import type { MessageProcessingLogAdapterAttributesApi } from './MessageProcessingLogAdapterAttributesApi';
import {
  MessageProcessingLogs,
  MessageProcessingLogsType
} from './MessageProcessingLogs';

/**
 * This class represents the entity "MessageProcessingLogAdapterAttributes" of service "com.sap.hci.api".
 */
export class MessageProcessingLogAdapterAttributes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MessageProcessingLogAdapterAttributesType<T>
{
  /**
   * Technical entity name for MessageProcessingLogAdapterAttributes.
   */
  static override _entityName = 'MessageProcessingLogAdapterAttributes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MessageProcessingLogAdapterAttributes entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Adapter Id.
   * @nullable
   */
  declare adapterId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Adapter Message Id.
   * @nullable
   */
  declare adapterMessageId?: DeserializedType<T, 'Edm.String'> | null;
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
  declare messageProcessingLog?: MessageProcessingLogs<T> | null;

  constructor(_entityApi: MessageProcessingLogAdapterAttributesApi<T>) {
    super(_entityApi);
  }
}

export interface MessageProcessingLogAdapterAttributesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  adapterId?: DeserializedType<T, 'Edm.String'> | null;
  adapterMessageId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  value?: DeserializedType<T, 'Edm.String'> | null;
  messageProcessingLog?: MessageProcessingLogsType<T> | null;
}
