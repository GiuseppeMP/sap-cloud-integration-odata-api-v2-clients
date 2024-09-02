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
import type { MessageStoreEntryPropertiesApi } from './MessageStoreEntryPropertiesApi';

/**
 * This class represents the entity "MessageStoreEntryProperties" of service "com.sap.hci.api".
 */
export class MessageStoreEntryProperties<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MessageStoreEntryPropertiesType<T>
{
  /**
   * Technical entity name for MessageStoreEntryProperties.
   */
  static override _entityName = 'MessageStoreEntryProperties';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MessageStoreEntryProperties entity.
   */
  static _keys = ['MessageId', 'Name'];
  /**
   * Message Id.
   */
  declare messageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   * @nullable
   */
  declare value?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: MessageStoreEntryPropertiesApi<T>) {
    super(_entityApi);
  }
}

export interface MessageStoreEntryPropertiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  messageId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
}
